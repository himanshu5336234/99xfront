import React, { useEffect, useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import W3Counter from '../../components/w3counter/W3Counter';


export default function ServicePricing(props){

    let history = useHistory()
    let [loading, setLoading] = useState(false);
    let [activeTab, setActiveTab] = useState('basic');
    
    let [allPlans, setAllPlans] = useState(props.plans);
    let [currentService, setCurrentService] = useState(props.service)
    let [currentPlanIndex, setCurrentPlanIndex] = useState(0);
    let [currentPlan, setCurrentPlan] = useState(allPlans[0]);

    let [serviceQuantity, setServiceQuantity ] = useState(1);
    let [seeMoreChecked, setSeeMoreChecked] = useState(false);

    let isRecurring = props.recurring;
    let service = props.service;

    
    let inStock = true;
    if(Object.keys(props).indexOf("stock") != -1){
        inStock = false;        
    }

    let currencySymbol = localStorage.getItem("user_currency") ? JSON.parse(localStorage.getItem("user_currency"))[0].symbol:'$';
    let currencyMultiplier = localStorage.getItem("user_currency_multiplier") ? parseFloat(localStorage.getItem("user_currency_multiplier")):1;
    if(Object.is(NaN, currencyMultiplier)){
        localStorage.clear();
        window.location.reload();
    }

    
    let initCart = {
        tier: 1,
        serviceId: currentService.id, 
        serviceType: currentService.serviceType,
        quantity: 1,
        items:[
            {
                count: 1,
                pricePerUnit: 1,
                key: 'Pitch Deck'
            }
        ]
    }

    const ToggleTab = (_tab) => {
        
        let ServicePlan = 'Standard';

        switch(_tab){
            case 'tier1':
                setActiveTab('tier1')
                ServicePlan = "Standard";
                break;
            case 'tier2':
                setActiveTab('tier2')
                ServicePlan = "Premium";
                break;
            case 'tier3':
                setActiveTab('tier3')
                ServicePlan = "Enterprise";
                break;
        }

        setCart(cart);

    }
    
    useEffect(()=>{
        
        ToggleTab('tier2')
        ToggleTab('tier1')
        console.log("PRICING_TABLE_MOUNT")
    

    },[]);

    if(props.recurring){

        initCart = {
            ...initCart,
            recurring: true,
            servicePlan:'Standard',
            price:currentService.plans[0].price,
        };

    }else{

        initCart = {
            ...initCart,
            recurring: false,
            servicePlan:'Standard',
            price:currentService.plans[0].price,
        }

    }

    let [cart, setCart] = useState(initCart);

   

 
    

    const checkout = () => {


        if(!localStorage.getItem("w3_auth")){
            
            localStorage.setItem("after_login", window.location.href)
            return history.push("/ab/account-security/login")
            
        }

        let cartObject = cart;

        // Fixed Price
        //if(!cartObject.recurring){

           


            // for(let i=0; i <cartObject.items.length; i++){

            //     let cartKeyArray = cartObject.items[i].key.split(",");
            //     let microServiceIndex = cartKeyArray[0];
            //     let microServiceItemIndex = cartKeyArray[1];

            //     cartObject.items[i]['id'] = service.microService[microServiceIndex].id;
            //     cartObject.items[i]['serviceId'] = service.id;
            //     cartObject.items[i]['item'] = service.microService[microServiceIndex].items[microServiceItemIndex][0];

            // }

        //}

        cartObject.quantity = serviceQuantity;
        cartObject.price = currentPlan.price;
        cartObject.tier = currentPlanIndex + 1;

        cartObject.items[0].id = "600e8d73b86ef735d8119808";
        cartObject.items[0].serviceId = currentService.id;
        cartObject.items[0]['item'] = "Pitch Deck"

        

        if(!loading){

            props.checkout(cartObject, (err, doc)=>{

                history.push("/checkout");
                
            });
            setLoading(true);
        
        }else{
            alert("Please Wait...")
        }

    }


    return (
        <div className="pricing-component">
        <div className="custom-tab-1">
            <div className="custom-tab-header">
                {allPlans.map((plan, index)=>(
                    <button onClick={() => {
                            ToggleTab(`tier${index+1}`)
                            setCurrentPlanIndex(index)
                            setCurrentPlan(props.plans[index])
                        }} className={activeTab === `tier${index+1}` ? "active" : ""}>
                        {plan.name}
                    </button>
                ))}
                
            </div>
            <div className="custom-tab-body">
                <div className="fluid ph-15">
                    
                    <div className="plan-content">
                        <div className="intro">
                            <h2>{currentPlan.name}</h2>
                            <div className="price-container">
                                <div className="price">
                                    <span className="symbol">
                                        <span className="text">
                                            {/* {currentPlan.price.currencySymbol} */}
                                            { currencySymbol }
                                        </span>
                                    </span>
                                    <span className="amount">
                                        <span className="text">
                                            {parseInt(currencyMultiplier*currentPlan.price.amount)}
                                        </span>
                                    </span>
                                </div>
                                <div className="price-unit">
                                    <span>{currentPlan.price.unit}</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="subtitle" style={{marginTop:'20px'}}>
                            <p>
                                {currentPlan.subtitle}
                            </p>
                        </div>
                        <div className="plan-deliverable">
                            {/* <h3 className="font-18 weight-700">What's included?</h3> */}
                            <div className="fluid d-flex flex-row flex-wrap mb-20 mt-20">
                                <div className="">
                                    {/* <i className="icons icon-clock font-14"></i> */}
                                    <img className="icon" src="https://ik.imagekit.io/99x/startup/Group_79_1yEB9KIyW.svg"/>
                                    <span className="ph-10 font-14">{currentPlan.delivery_in} delivery</span>
                                </div>
                                <div className="">
                                    {/* <i className="icons icon-refresh font-14"></i> */}
                                    <img className="icon" src="https://ik.imagekit.io/99x/startup/Group_45_g8ES5MTo3D.svg"/>
                                    <span className="ph-10 font-14">{currentPlan.revisions} Revisions</span>
                                </div>
                            </div>

                            <div className="row deliverables">
                                <ul className="d-flex flex-row flex-wrap">
                                    {currentPlan.props.map((del, i) => {

                                        if(i < 3)
                                            return (
                                                <li className="col-12 col-sm-12 d-flex flex-row init-del">
                                                    <span><i className="fa fa-check custom-check" aria-hidden="true"></i></span>
                                                    <span className="font-14">{del}</span>
                                                </li>

                                            )

                                        if(i == 3)
                                            return (
                                                <li className={`col-12 col-sm-12 d-flex flex-row init-del ${currentPlan.props.length > 3 && !seeMoreChecked ? 'disabled':''}`}>  
                                                    <span><i className="fa fa-check custom-check" aria-hidden="true"></i></span>
                                                    <span className="font-14">{del}</span>
                                                </li>
                                            )
                                    })  
                                    }
                                    {currentPlan.props.length > 4 ? 
                                        <>
                                            <li className="col-12 col-sm-12 see-more">
                                                
                                                <input type="checkbox" id="seeMoreButton" checked={seeMoreChecked} />
                                                <label htmlFor="seeMoreButton" onClick={()=>{
                                                    setSeeMoreChecked(!seeMoreChecked)
                                                }}></label>
                                                
                                                <ul>
                                            {currentPlan.props.map((del, i) => {
                                                if(i >= 4)
                                                return (
                                                    
                                                    <li className="col-12 col-sm-12 d-flex flex-row">
                                                        <span><i className="fa fa-check custom-check" aria-hidden="true"></i></span>
                                                        <span className="font-14">{del}</span>
                                                    </li>
                                                )
                                            })}
                                                </ul>
                                            </li>
                                        </>
                                        :null
                                    }
                                    
                                </ul>
                            </div>

                            <div className="row item-quantity-holder">
                                <span className="label">
                                    No. of Slides
                                </span>
                                <W3Counter
                                minValue={1}
                                initialValue={1}
                                onCounterChange={(d)=>{
                                   setServiceQuantity(d.counter)
                                }}
                                />
                            </div>
                        </div>

                    </div>

                    
                 

     
                    
                    <div className="fluid d-flex mt-20 justify-content-center">
                        
                        {
                        cart.price.amount > 0 ?
                            // <Link href="/checkout" as="/checkout">
                            <>
                            {inStock ? 
                                <button 
                                className="checkout-btn custom-button active flex-fill fit-button justify-content-center font-20 fit-button-color-black fit-button-fill-full fit-button-size-medium btn-continue" 
                                onClick={() => checkout()}>
                                    {
                                        (loading)
                                        ?
                                        'Please Wait...'
                                        :
                                        <>
                                        Continue
                                        <span> 
                                            (
                                                {currencySymbol}
                                                {/* {currentPlan.price.currencySymbol} */}
                                                {parseInt(currencyMultiplier*(currentPlan.price.amount*serviceQuantity))}
                                            )
                                        </span>
                                        </>
                                    }
                                    
                                </button>
                            :
                            <button
                                className="checkout-btn btn-continue"
                            >
                                Out of Stock
                            </button>
                            }
                            </>
                            // </Link>
                        :
                        ''
                        } 
                        
                    </div>
                    <ul className="assurance">
                            <li>99x Assurance</li>
                            <li>Easy Cancellations & Refunds</li>
                    </ul>
                    {/* <NavLink exact to={'/checkout'} className="custom-link aqua family-PTsans weight-700 justify-content-center">
                        Compare Packages
                    </NavLink> */}
                </div>
            </div>
        </div>
    </div>
    )
}