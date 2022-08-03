import React, { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import W3Counter from '../../components/w3counter/W3Counter';

export default function ServicePricing(props){

    let history = useHistory()
    let [loading, setLoading] = useState(false);
    let [activeTab, setActiveTab] = useState('basic');

    let isRecurring = props.recurring;
    let service = props.service;
    
    let initCart = {
        serviceId: service.id, 
        serviceType: service.serviceType
    }

    if(props.recurring){

        initCart = {
            ...initCart,
            recurring: true,
            servicePlan:'Standard',
            price:props.service.features['Standard'].price,
            items:[],
        };

    }else{

        initCart = {
            ...initCart,
            recurring: false,
            price:{},
            items:[],
        }

    }

    let [cart, setCart] = useState(initCart);

   

    const counterUpdate = (cb) => {

        let itemKey = cb.callback[0] + "," + cb.callback[1];
        
        let oldCart = cart;
        let newItem = true;

        for(let i = 0; i < oldCart.items.length; i++){

            if(oldCart.items[i].key == itemKey){
            
                let prevCount = oldCart.items[i].count;
                oldCart.items[i].count = cb.counter;
                newItem = false;

                let prevAmount = prevCount*oldCart.items[i].pricePerUnit;
                oldCart.price.amount -= prevAmount;

                let newAmount = cb.counter*oldCart.items[i].pricePerUnit;
                oldCart.price.amount += newAmount;
            }
        }
        
        if(newItem){
            
            oldCart.items.push({
                key: itemKey,
                pricePerUnit: cb.callback[2],
                count: cb.counter
            });

            oldCart.price.amount += cb.callback[2]*cb.counter;
        }

        setCart(oldCart)

    }

    const ToggleTab = (_tab) => {
        
        let ServicePlan = 'Standard';

        switch(_tab){
            case 'basic':
                setActiveTab('basic')
                ServicePlan = "Standard";
                break;
            case 'standard':
                setActiveTab('standard')
                ServicePlan = "Premium";
                break;
            case 'premium':
                setActiveTab('premium')
                ServicePlan = "Enterprise";
                break;
        }

        if(cart.recurring){
            cart.price = props.service.features[ServicePlan].price;
            cart.servicePlan = props.service.features[ServicePlan].price;
        }

        setCart(cart);

    }

    const checkout = () => {

        let cartObject = cart;

        if(!cartObject.recurring){

            for(let i=0; i <cartObject.items.length; i++){

                let cartKeyArray = cartObject.items[i].key.split(",");
                let microServiceIndex = cartKeyArray[0];
                let microServiceItemIndex = cartKeyArray[1];

                cartObject.items[i]['id'] = service.microService[microServiceIndex].id;
                cartObject.items[i]['serviceId'] = service.id;
                cartObject.items[i]['item'] = service.microService[microServiceIndex].items[microServiceItemIndex][0];

            }

        }

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
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
        <div className="custom-tab-1">
            <div className="custom-tab-header">
                <button onClick={() => {
                        ToggleTab('basic')
                    }} className={activeTab === 'basic' ? "active" : ""}>
                    Basic
                </button>
                <button onClick={() => {
                         ToggleTab('standard')
                    }} className={activeTab === 'standard' ? "active" : ""}>
                    Standard
                </button>
                <button onClick={() => {
                        ToggleTab('premium')
                    }} className={activeTab === 'premium' ? "active" : ""}>
                    Premium
                </button>
            </div>
            <div className="custom-tab-body">
                <div className="fluid ph-15">
                    <h2 className="font-20 weight-700">What's included?</h2>
                    <div className="fluid d-flex flex-row flex-wrap justify-content-between mb-20 mt-20">
                        <div className="">
                            <i className="icons icon-clock font-14"></i>
                            <span className="ph-10 weight-700 family-PTsans">2-3 days delivery</span>
                        </div>
                        <div className="">
                            <i className="icons icon-refresh font-14"></i>
                            <span className="ph-10 weight-700 family-PTsans">Refresh</span>
                        </div>
                    </div>

                    <div className="row">
                        <ul className="d-flex flex-row flex-wrap">
                            <li className="mb-15 col-12 col-sm-6 d-flex flex-row">
                                <span><i className="fa fa-check custom-round-check" aria-hidden="true"></i></span>
                                <span className="font-14">Vetted Industry Specific</span>
                            </li>
                            <li className="mb-15 col-12 col-sm-6 d-flex flex-row">
                                <span><i className="fa fa-check custom-round-check" aria-hidden="true"></i></span>
                                <span className="font-14">Vetted Industry Specific</span>
                            </li>
                            <li className="mb-15 col-12 col-sm-6 d-flex flex-row">
                                <span><i className="fa fa-check custom-round-check" aria-hidden="true"></i></span>
                                <span className="font-14">Vetted Industry Specific</span>
                            </li>
                        </ul>
                    </div>

                    { isRecurring ? 

                        <div className="row">
                        <ul className="d-flex flex-row flex-wrap">
                            {
                                service.features['Standard'].list.map((item, itemIndex)=>(
                                
                                        <li className="mb-15 col-12 col-sm-6 d-flex flex-row">
                                            <span><i className="fa fa-check custom-round-check" aria-hidden="true"></i></span>
                                            <span className="font-14">{item}</span>
                                        </li>
                                
                                ))
                            }
                        </ul>
                        </div>
                        :
                        <>
                             <div className="fluid">
                                {service.microService.map((microService, microServiceIndex)=>(
                                    <>
                                        <div className="fluid d-flex justify-content-between microservice-heading">
                                            <div style={{fontWeight:700}}>{microService.title}</div>
                                            <div>No</div>
                                            <div>Per Creative</div>
                                        </div>
                                        {microService.items.map((item, itemIndex)=>(
                                            
                                        
                                            <>
                                                <div className="fluid d-flex justify-content-between align-items-center">
                                                    <div>{item[0]}</div>
                                                    <div>
                                                    <W3Counter
                                                        initialValue="1"
                                                        callback={[microServiceIndex,itemIndex,microService.price.amount]}
                                                        onCounterChange={counterUpdate}
                                                        show="true"
                                                    ></W3Counter>
                                                    </div>
                                                    <div>
                                                    {microService.price.currencySymbol}
                                                    {microService.price.amount}
                                                    </div>    
                                                </div>
                                            </>
                                            
                                        ))}
                                    </>
                                ))}
                             </div>
                        </>
                    }
  

     
                    
                    <div className="fluid ph-30 d-flex mt-20 justify-content-center">
                        
                        {
                        cart.price.amount > 0 ?
                            // <Link href="/checkout" as="/checkout">
                            <button 
                            className="custom-button featured aqua active flex-fill fit-button justify-content-center font-20 fit-button-color-black fit-button-fill-full fit-button-size-medium btn-continue family-Inter" 
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
                                        {cart.price.currencySymbol}
                                        {parseFloat(cart.price.amount/100).toFixed(2)}
                                        )
                                    </span>
                                    </>
                                }
                                
                            </button>
                            // </Link>
                        :
                        ''
                        } 
                        
                        
                    </div>
                    {/* <NavLink exact to={'/checkout'} className="custom-link aqua family-PTsans weight-700 justify-content-center">
                        Compare Packages
                    </NavLink> */}
                </div>
            </div>
        </div>
    </div>
    )
}