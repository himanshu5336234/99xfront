import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import W3Carousel from "../../../../components/W3Carousel";
import { addToCart } from '../../../../service/product.service'
import styled from "styled-components"

const PlanLabel =styled.div`
    min-height: ${props => props.height || '300'}px;
`

/**
 * 
 * USED IN CATEGORY PAGE
 *  
 */
export default function CategorySubscriptionPlan(props){

    let history = useHistory();
    let [BuyBtnText, setBuyBtnText] = useState("Claim Free Trial")
    
    let {plans, minHeight, minHeightKeyFeatures, title, subtitle} = props;
    let [MSelectedPlanIndex, setMSelectedPlanIndex] = useState(0);
    let [MSelectedPlan, setMSelectedPlan] = useState(plans[0]);

    let planPeriod = 'monthly';

    let currencySymbol = localStorage.getItem("user_currency") ? JSON.parse(localStorage.getItem("user_currency"))[0].symbol:'$';
    let currencyMultiplier = localStorage.getItem("user_currency_multiplier") ? parseFloat(localStorage.getItem("user_currency_multiplier")):1;
    if(Object.is(NaN, currencyMultiplier)) currencyMultiplier = 1;

    
    const SubscribeToService = (plan) => {
        
        if(!localStorage.getItem("w3_auth")){
            
            localStorage.setItem("after_login", window.location.href)
            return history.push("/ab/account-security/login")
            
        }
        
        const [serviceId,servicePlan, price] = [plan.id, 'Standard', plan.price.monthly.amount]
        if(!serviceId) return alert("Unknown Service")

        setBuyBtnText("Please Wait..")
        addToCart({
            serviceId,
            recurring: true, 
            servicePlan:servicePlan,
            price: {
                isCurrencyPrefix: true,
                currencySymbol:"$",
                currency:"USD",
                amount:price,
                unit:"Per Unit"
            }, 
            items:[],
            serviceType: 'SUBSCRIPTION'
        },(err, d)=>{

            history.push("/checkout");

        })
    
    }


    return (
        <>

        <div className="category-subscription-plans">
            
            <div className="container">
                    <h2 className="mb-15 font-48 text-center">
                        {title ? title:'Flexible Digital Marketing Plans that grow with you'}
                    </h2>
                    <p className="text-center subtitle">
                        {subtitle ? subtitle:'With one platform everyone sees the whole picture. All for one flat rate.. What’s not to love about us.'}
                    </p>

                    <div className="mobile-only">

                        <div className="plan-selector">
                            <ul className="plan-title">
                                {plans.map((plan, i)=>(
                                    <li 
                                    onClick={()=>{
                                        setMSelectedPlanIndex(i)
                                        setMSelectedPlan(plans[i])
                                    }}
                                    className={`${MSelectedPlanIndex === i ? 'active':''}`}>
                                        <span>{plan.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="plan-details-container">

                            <div className="plan-details">
                                <h2>{MSelectedPlan.title}</h2>
                                <p className="subtitle">{MSelectedPlan.description}</p>
                                <div className="price">

                                    <sup>
                                        { currencySymbol }
                                        {/* {MSelectedPlan.price[planPeriod].sign} */}
                                    </sup>
                                    <span className="amount">
                                        {parseInt(currencyMultiplier*MSelectedPlan.price[planPeriod].amount/100)}
                                    </span>
                                    <br/>
                                    <span className="period">
                                        Per Month
                                    </span>
                                    <button className="buy-btn" onClick={()=>{SubscribeToService(MSelectedPlan)}}>
                                        {BuyBtnText}
                                    </button>
                                </div>
                            
                        

                                <div className="key-features">
                                    <ul style={{minHeight: minHeightKeyFeatures || 'auto'}}>
                                        {MSelectedPlan.key_features.map((feature, index)=>{
                                            return (
                                                <li key={index}>
                                                    <img src="https://ik.imagekit.io/99x/startup/Tick_w0DVsuRpO.png"/>
                                                    <span>{feature}</span>
                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>

                                <div className="sub-resources">
                                    <h3>Resources Assigned</h3>
                                    <div className="sub-resource">
                                        {MSelectedPlan.resource.map((r,i)=>(
                                            <div>
                                                <img src={r.icon}/><br/>
                                                <span>{r.title}</span>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                <div className="sub-features">
                                    <ul style={{minHeight:minHeight || '300px'}}>
                                        {Object.keys(MSelectedPlan.features).map((f,i)=>(
                                            <li>
                                                <span className="feature-label">
                                                    {f}
                                                </span>
                                                <span>
                                                    {MSelectedPlan.features[f] ? 
                                                        <>
                                                            {
                                                                (typeof MSelectedPlan.features[f] === 'boolean') ?
                                                                <i class="fa fa-check-circle"></i>
                                                                :
                                                                <span className="f-count">
                                                                    {MSelectedPlan.features[f]}
                                                                </span>
                                                                }
                                                            {/* <img src="https://ik.imagekit.io/99x/startup/99xCheck_S1K62CB8I.svg"/> */}
                                                        </>:
                                                        <>

                                                        </>
                                                    }
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        
                        </div>

                    </div>

                    <div className="row justify-content-center desktop-only">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-11">
                            <div className="custom-tab">
                                <div className="custom-tab-header">
                                   
                                </div>
                                <div className="custom-tab-body">
                                    <div className="sub-table">
                                        <W3Carousel
                                        items="4"
                                        dots={true}
                                        dotData="<button role='button' class='owl-dot'></button>"
                                        nav={false}
                                        >
                                            <div className="item item-labels">

                                                <div className="sub-card label">
``
                                                    <PlanLabel className="label-sub-heading" height={props.labelHeight[0]}>
                                                        <h3 className="label">
                                                            Plan
                                                        </h3>
                                                    </PlanLabel>

                                                    <PlanLabel className="label-key-feature" height={props.labelHeight[1]}>
                                                        <h3 className="label">
                                                                Key Features
                                                        </h3>
                                                    </PlanLabel>

                                                    <PlanLabel className="label-pricing-1" height={props.labelHeight[2]}>
                                                        <h3>Pricing</h3>
                                                    </PlanLabel>

                                                    <PlanLabel className="label-resources" height={props.labelHeight[3]}>
                                                        <h3>Resources Assigned</h3>
                                                    </PlanLabel>

                                                    <PlanLabel className="label-feature-list" height={props.labelHeight[4]}>
                                                        <ul>
                                                            
                                                            {Object.keys(plans[0].features).map((f,i)=>(
                                                                    <li>
                                                                        <span>{f}</span>
                                                                    </li>
                                                            ))}
                                                        </ul>
                                                       
                                                    </PlanLabel>
                                                    <hr/>
                                                    <PlanLabel className="label-pricing-1" height={props.labelHeight[5]}>
                                                        <h3>Pricing</h3>
                                                    </PlanLabel>
                                                    
                                                </div>

                                            </div>
                                        {/* <div className="col-12 col-sm-12 col-md-4"></div> */}
                                        {plans.map((plan, i)=>{
                                            
                                            return (
                                                <div className="item">
                                                    <div className="sub-card fluid">
                                                        
                                                        <div className="sub-heading">
                                                            <h3>{plan.title}</h3>
                                                            <p>
                                                                {plan.description}
                                                            </p>

                                                        </div>

                                                        <div className="key-features">
                                                            <ul style={{minHeight: minHeightKeyFeatures || 'auto'}}>
                                                                {plan.key_features.map((feature, index)=>{
                                                                    return (
                                                                        <li key={index}>
                                                                            <span>{feature}</span>
                                                                        </li>
                                                                    )
                                                                })}
                                                                
                                                            </ul>
                                                        </div>

                                                        <hr/>
                                                        
                                                        <div className="sub-price">
                                                            <sup>
                                                                {currencySymbol}
                                                                {/* {plan.price[planPeriod].sign} */}
                                                            </sup>

                                                            <span className="amount">
                                                                {parseInt(currencyMultiplier*plan.price[planPeriod].amount/100)}
                                                            </span>
                                                            <br/>

                                                            <span className="period">
                                                                Per Month
                                                                {/* {planPeriod} */}
                                                            </span>
                                                            <button className="buy-btn" onClick={()=>{SubscribeToService(plan)}}>
                                                                {BuyBtnText}
                                                            </button>

                                                        </div>

                                                        <hr/>

                                                        <div className="sub-resources">
                                                            {plan.resource.map((r,i)=>(
                                                                <div>
                                                                    <img src={r.icon}/><br/>
                                                                    <span>{r.title}</span>
                                                                </div>
                                                            ))}
                                                            
                                                        </div>

                                                        <div className="sub-features">
                                                            <ul style={{minHeight:minHeight || '300px'}}>
                                                                {Object.keys(plan.features).map((f,i)=>(
                                                                    <li>
                                                                        {plan.features[f] ? 
                                                                            <>
                                                                                {
                                                                                    (typeof plan.features[f] === 'boolean') ?
                                                                                    <i class="fa fa-check-circle"></i>
                                                                                    :
                                                                                    <span>
                                                                                        {plan.features[f]}
                                                                                    </span>
                                                                                    }
                                                                                {/* <img src="https://ik.imagekit.io/99x/startup/99xCheck_S1K62CB8I.svg"/> */}
                                                                            </>:
                                                                            <>
                                                                                <span>-</span>
                                                                            </>
                                                                        }
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>


                                                        <div className="subscription-brief">
                                                            <div classNam="brief-item">
                                                                <p>
                                                                    
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <hr/>
                                                        <div className="subscription-points">
                                                            
                                                        </div>
                                                        <div className="sub-price">
                                                            <sup>
                                                                {/* {plan.price[planPeriod].sign} */}
                                                                {currencySymbol}
                                                            </sup>

                                                            <span className="amount">
                                                                {parseInt(currencyMultiplier*plan.price[planPeriod].amount/100)}
                                                            </span>
                                                            <br/>

                                                            <span className="period">
                                                                Per Month
                                                                {/* {planPeriod} */}
                                                            </span>
                                                            <button className="buy-btn" onClick={()=>{SubscribeToService(plan)}}>
                                                                {BuyBtnText}
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        </W3Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}