import React, { useEffect, useRef, useState } from  "react"
import PaymentMethod from "../../../../components/payment-method/PaymentMethod"
import ENV from "../../../../env.config"

import "./style.scss"
import W3Modal from "../../../../components/w3modal/W3Modal"
import { ToastContainer, toast } from 'react-toastify';

import SubscriptionPlanData from "../../../../data/subscription_plans"
import OnDemandData from "../../../../data/onetime_plans"

import {apiRequest} from "../../../../api"
const TierMap = {
    "Standard":"Essential",
    "Premium":"Premier",
    "Enterprise":'"Prime'
};

const CheckoutPayment = (props) => {

    console.log("Checkout Props", props);

    let applyCouponBox = useRef();
    let couponCodeInput = useRef();
    let [paymentMeta, setPaymentMeta] = useState( {} );
    let [cart, setCart ]  = useState(null);
    let [loading, setLoading] = useState(false);
    let [recurring, setRecurring] = useState(null);

    let [confirmingPayment, setConfirmingPayment] = useState(false);

    let [Features,setFeatures] = useState([])
    

    let w3_cart = localStorage.getItem("w3_cart");
    useEffect(()=>{

        
        apiRequest({
            method:'GET',
            url:'/cart',
            includeUser: true
        }).then(cartData=>{

            if(cartData.success){

                const cart = cartData.data[0] || null;
                console.log("CART_PAYMENT", cart)

                
                setCart(cart);
                

                if(cart.service.serviceType == "SUBSCRIPTION"){
                    
                    console.log("PAYMENT_META", cart.service.paymentMeta);
                    
                    // Setting Features
                    let SubscriptionPlanDataArray = [];
                    let SubscriptionPlanDataKeys = Object.keys(SubscriptionPlanData);
                    for(let i=0; i < SubscriptionPlanDataKeys.length; i++){
                        let Services = SubscriptionPlanData[SubscriptionPlanDataKeys[i]];
                        for(let j = 0; j < Services.length; j++) SubscriptionPlanDataArray.push(Services[j])
                    }
                    let KeyF = SubscriptionPlanDataArray.filter(s => s.id === cart.service.id)
                    // setFeatures(KeyF[0].key_features)

                    // Setting Features End

                    setPaymentMeta(cart.service.paymentMeta);
                    setRecurring(true);

                }else{

                    // Setting Features
                    let selectedServiceIndex = Object.keys(OnDemandData).filter(e=>{
                        return OnDemandData[e].id == cart.service.id
                    })

                    let ss = OnDemandData[selectedServiceIndex[0]]
                    let selectedPlan = ss.plans.filter(e=>{
                        return e.name == TierMap[cart.servicePlan]
                    })

                    if(selectedPlan[0]) setFeatures(selectedPlan[0].props)

                    // Setting Features End

                    setRecurring(false);

                }

            }else{

                toast.error(cartData.message)

            }

        })
        
    },[props])

    const ApplyCoupon = () => {
        let code = couponCodeInput.current.value;
        apiRequest({
            method:'PUT',
            url:'/cart',
            data: {
                coupon:code
            }
        }).then(d=>{
            
            console.log(d);
            if(!d.success) return toast.error(d.message)

            toast(d.message)
            window.location.reload()
        
        }).catch(e=>{
            
            alert("Payment Failed");
            console.error("Payment Failed", e);

        })
    }

    const processPayment = (Payload) => {

        setConfirmingPayment(true);

        apiRequest({
            method:'POST',
            url:'/cart/pay',
            data: Payload
        }).then(d=>{
            
            console.log("Payment Success", d)
            if(cart.service.serviceType == "SUBSCRIPTION"){
                window.top.location = "/thank-you?mode=subscription";
            }
            else{
                window.top.location = "/thank-you";
            }
            
        
        }).catch(e=>{
            
            alert("Payment Failed");
            console.error("Payment Failed", e);

        })
    }

    if(!cart) return (<>Loading...</>)

    
    console.log("USER_CART", cart);
    return (
        <>
            <div className="content_wrapper page_checkout_payment container pv-30">
                
                {
                    recurring !== null ?
                    <PaymentMethod
                    init={ENV.PAYMENTS}
                    cart={cart}
                    recurring={recurring}
                    paymentMeta={paymentMeta}
                    onSuccess={processPayment}
                    user={{
                        name: localStorage.getItem('user-name') || 'Ashutosh Kumar',
                    }}
                    fx={{
                        getStripeIntent: async() => {
                            return await apiRequest({url:'/cart?paymentMethod=STRIPE'}) 
                        },
                        subscribeViaStripe: async(paymentMethod, price) => {
                            return await apiRequest({
                                url:'cart/subscribe/stripe',
                                method:"POST",
                                data:{
                                    paymentMethod,
                                    price
                                }
                            });
                        },
                        getRazorPayOrderId: async() => {
                            return await apiRequest({
                                url:'cart?paymentMethod=RP',
                            })
                        },
                        getRazorPaySubscriptionId: async() => {
                            return await apiRequest({
                                url:'cart?paymentMethod=RP_SUBSCRIPTION',
                            })
                        }
                    }}
                    >

                    <>
                        <table>
                        <tbody>
                            <tr className="border-bottom">
                                {recurring ? 
                                <td colSpan="2">
                                    <div className="service-meta-subscription">
                                        {/* <div className="img-container">
                                            <img src="http://localhost:4010/static/media/product.412ee6f2.png"/>
                                        </div> */}
                                        <div>
                                            <h3>Your Order</h3>
                                        </div>
                                        <div className="plan-d">
                                            <h4>Plan Type</h4>
                                            <span>Startup</span>
                                        </div>
                                    </div>
                                </td>
                                :
                                <td colSpan="2">
                                    <div className="service-meta">
                                        {/* <div className="img-container">
                                            <img src="http://localhost:4010/static/media/product.412ee6f2.png"/>
                                        </div> */}
                                        <div className="product-tag-chips">
                                                {cart.service.serviceType == "FIXED" ? <div className="product-title">{cart.service.title}</div>:null}
                                                <div className="product-type">
                                                    {cart.service.serviceType == "FIXED" ? 'One Time Subscription':'Monthly Subscription'}
                                                </div>
                                        </div>
                                        <p>{cart.service.subtitle}</p>
                                    </div>
                                </td>
                                }
                            </tr>
                            {recurring ? null:
                            <tr className="border-bottom">
                                <td colSpan="2">
                                    <div className="service-details">
                                        <ul className="service-price">
                                            <li>
                                                {TierMap[cart.servicePlan]} x {cart.serviceQuantity}
                                            </li>
                                            <li className="price">
                                                {cart.service.features.Standard.price.currencySymbol}
                                                {parseFloat(cart.service.features[cart.servicePlan].price.amount*cart.serviceQuantity/100).toFixed(2)}
                                            </li>
                                        </ul>
                                        <ul className="service-features">

                                            {Features.map((del,i)=>(
                                                <li key={i}>
                                                    <span><i className="fa fa-check custom-check" aria-hidden="true"></i></span>
                                                    <span className="font-14">{del}</span>
                                                </li>
                                            ))}
                                        
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            }
                            <tr className="apply-coupon border-bottom">
                                <td colSpan="2">
                                    {cart.coupon ? 
                                    <>
                                        <div className="coupon-applied">
                                            <label>
                                                <h3>{cart.coupon.code}</h3>
                                                <span>Coupon Discount</span>
                                            </label>
                                            <div className="value">
                                                -{parseFloat(cart.coupon.discount.value/100).toFixed(2)}
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="flex apply-btn" onClick={(e)=>{
                                            document.querySelector(".apply-btn").classList.add("hidden")
                                            applyCouponBox.current.classList.remove("hidden")
                                        }}>
                                            <img src="https://ik.imagekit.io/99x/startup/CouponDiscount_PRey1aJu3.svg"/>
                                            <span className="btn-text">Apply Coupon</span>
                                            <i className="fa fa-question-circle" aria-hidden="true"></i>
                                        </div>
                                        <div className="flex input-coupon hidden" ref={applyCouponBox}>
                                            <input 
                                            ref={couponCodeInput}
                                            type="text" 
                                            placeholder="Enter Coupon Code"/>
                                            <button 
                                            onClick={()=>{ApplyCoupon()}}
                                            className="apply-coupon-btn"
                                            >Apply</button>
                                        </div>
                                        </>
                                    }
                                </td>
                            </tr>   
                            <tr className="service-fee border-bottom">
                                <td>Service Fee</td>
                                <td style={{textAlign:'right'}}>
                                { cart.price.currencySymbol }
                                { '0' }
                                </td>
                            </tr>
                            <tr className="total-calculation">
                                <th>
                                    Total   
                                    {recurring ? ' billed today':null}
                                </th>
                                <th style={{textAlign:'right'}}>
                                { cart.price.currencySymbol }
                                { parseFloat(cart.price.amount/100).toFixed(2) }
                                </th>
                            </tr>
                        </tbody>
                        </table>
                        {recurring ? 
                        <p className="subscription-notice">
                            All prices are in {cart.price.currency} and all sales are final. You will be charged 
                            {cart.price.currencySymbol}{ parseFloat(cart.price.amount/100).toFixed(2) } every month while this subscription is active. Cancel any time.
                        </p>
                        :null}
                    </>
                
                    </PaymentMethod>
                    :null
                }
                


            </div>

            <W3Modal
            show={confirmingPayment}
            onModalChange={()=>{}}
            backdrop="static"
            title="Processing Payment..."
            showFooter="false"
            >

                <div className="row processing-payment ">

                    <p>Please Wait, while we confirm your payment</p>

                </div>

            </W3Modal>
        </>
    )
}




export default CheckoutPayment