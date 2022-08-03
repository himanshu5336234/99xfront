import React, { useContext, useState } from "react"
import { NavLink, useHistory } from 'react-router-dom';
import { addToCart } from '../../service/product.service'
import SubscriptionPlanData from "../../data/subscription_plans"
import CurrencyContext from '../../context/currency.context'

import "./style.scss";
import W3Carousel from "../W3Carousel";

const PricingTable = ({plans, SubscribeToService}) => {
    
    let myCurrency = useContext(CurrencyContext);
    console.log("My Currency", JSON.stringify(myCurrency))

    let currencySymbol = localStorage.getItem("user_currency") ? JSON.parse(localStorage.getItem("user_currency"))[0].symbol:'$';
    let currencyMultiplier = localStorage.getItem("user_currency_multiplier") ? parseFloat(localStorage.getItem("user_currency_multiplier")):1;
    if(Object.is(NaN, currencyMultiplier)){
        currencyMultiplier = 1
        localStorage.clear();
        window.location.reload();
    }
    
    return (
        <div className="custom-tab-body pricing-table">
            <div className="desktop-only">
                
                <W3Carousel
                    items="3"
                    dots={true}
                    dotData="<button role='button' class='owl-dot'></button>"
                    nav={false}
                >
                <CurrencyContext.Consumer>
                    {
                        ({currency, setCurrency})=>(
                            
                            <>
                            {plans.map((plan, i)=>{

                                let servicePlan = (i == 0) ? 'Standard':((i == 1) ? 'Premium':'Enterprise');
                                let planPeriod = "monthly"
            
                                return (
                                    
                                    <div className="item">
                                        <div className="subscription-card fluid">
            
                                            <div className="table-top">
                                                
                                                <div className="subscription-type">
                                                    {plan.title}
                                                </div>
            
                                                <div className="actual-price">
                                                    <span class="strikethrough">
                                                        {currency.symbol}
                                                        {currency.usd_multiplier*plan.price[planPeriod].amount/100 + 201}
                                                    </span>
                                                </div>
            
                                                <div className="subscription-price">
                                                    <sup style={{fontSize:'18px'}}>
                                                        {
                                                            currency.symbol
                                                        }
                                                    </sup>
                                                    <span className="amount">
                                                        {
                                                            currency.usd_multiplier*plan.price[planPeriod].amount/100
                                                        }
                                                    </span>
                                                    <br/>
                                                    <span className="period">
                                                        Per Month
                                                        {/* {planPeriod} */}
                                                    </span>
                                                </div>
            
                                            </div>
            
                                            {/* <div className="">
                                                <button onClick={() => {setPlanPeriod("monthly")}} className={`blank-button ${planPeriod === 'monthly' ? 'active':''}`}>
                                                    monthly
                                                </button>
                                                <button onClick={() => {setPlanPeriod("annually")}} className={`blank-button ${planPeriod === 'annually' ? 'active':''}`}>
                                                    annually
                                                </button>
                                            </div> */}
            
                                            <div className="subscription-brief">
                                                <div classNam="brief-item">
                                                    <p>
                                                        {plan.description}
                                                    </p>
                                                </div>
                                            </div>
            
                                            <div className="subscription-points">
                                                <ul>
                                                    {plan.home_features && plan.home_features.map((feature, index)=>{
                                                        return (
                                                            <li key={index}>
                                                                <img src="https://ik.imagekit.io/99x/startup/99xCheck_S1K62CB8I.svg"/>
                                                                <span>{feature}</span>
                                                            </li>
                                                        )
                                                    })}
            
                                                </ul>
                                            </div>
                                            <button 
                                            onClick={(e)=>{
                                                e.target.value = "Please Wait..."
                                                SubscribeToService(plan.id, servicePlan, plan.price)
                                            }}
                                            className="custom-button normal btn-subscribe">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                   
                                )
                            })}
                            </>
                        )
                    }
                </CurrencyContext.Consumer>
                
                 </W3Carousel>
            </div>
            <div className="mobile-only">
                <W3Carousel
                    items="1"
                    dots={true}
                    dotData="<button role='button' class='owl-dot'></button>"
                    nav={false}
                >
                {plans.map((plan, i)=>{

                    let servicePlan = (i == 0) ? 'Standard':((i == 1) ? 'Premium':'Enterprise');
                    let planPeriod = "monthly"

                    return (
                        
                        <div className="item">
                            <div className="subscription-card fluid">

                                <div className="table-top">
                                    
                                    <div className="subscription-type">
                                        {plan.title}
                                    </div>

                                    <div className="actual-price">
                                        <span class="strikethrough">${plan.price[planPeriod].amount/100 + 201}</span>
                                    </div>

                                    <div className="subscription-price">
                                        <sup style={{fontSize:'18px'}}>{plan.price[planPeriod].sign}</sup>
                                        <span className="amount">
                                            {plan.price[planPeriod].amount/100}
                                        </span>
                                        <br/>
                                        <span className="period">
                                            Per Month
                                            {/* {planPeriod} */}
                                        </span>
                                    </div>

                                </div>

                                {/* <div className="">
                                    <button onClick={() => {setPlanPeriod("monthly")}} className={`blank-button ${planPeriod === 'monthly' ? 'active':''}`}>
                                        monthly
                                    </button>
                                    <button onClick={() => {setPlanPeriod("annually")}} className={`blank-button ${planPeriod === 'annually' ? 'active':''}`}>
                                        annually
                                    </button>
                                </div> */}

                                <div className="subscription-brief">
                                    <div classNam="brief-item">
                                        <p>
                                            {plan.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="subscription-points">
                                    <ul>
                                        {plan.home_features && plan.home_features.map((feature, index)=>{
                                            return (
                                                <li key={index}>
                                                    <img src="https://ik.imagekit.io/99x/startup/99xCheck_S1K62CB8I.svg"/>
                                                    <span>{feature}</span>
                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>
                                <button 
                                onClick={(e)=>{
                                    e.target.value = "Please Wait..."
                                    SubscribeToService(plan.id, servicePlan, plan.price)
                                }}
                                className="custom-button normal btn-subscribe">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                       
                    )
                })}
                 </W3Carousel>
            </div>
        </div>
    )
}

export default function SubscriptionPlans(props){

    const data = props.data;
    
    let history = useHistory();

    let initialCategories = data.map(e=>({
        id: e.key,
        key: e.key,
        title: e.title,
        link: `/c/${e.key}`
    }))


    let [activeIndex, setActiveIndex] = useState(0)
    let [activeCategory, setActiveCategory] = useState(initialCategories[activeIndex].id)
    let [activePlanKey, setActivePlanKey] = useState(initialCategories[activeIndex].key)

    const SubscribeToService = (activePlanKey, serviceId,servicePlan, price) => {

        let selectedCat = initialCategories.filter(e => e.key == activePlanKey)
        selectedCat = selectedCat[0]

        history.push(selectedCat.link)
    
    }

    return (
        <>
            <div className="mv-30 family-inter main-subscription-plans">
                
                <div className="container">

                    <h2 className="mb-15 font-48 text-center">
                        {props.title || <>Subscription Plans</>}
                    </h2>
                    <p className="text-center mb-30 family-inter subtitle">
                        {props.subtitle || 'Whatever you need, we’ve got the right plan for everything your business needs.'}
                    </p>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-11">
                            <div className="custom-tab">

                                <div className="custom-tab-header">
                                    {initialCategories.map((c,i)=>{
                                        return (
                                            <button onClick={() => {
                                                setActiveIndex(i)
                                            }} className={`${activeIndex === i ? 'active':''}`}>
                                                {c.title}
                                            </button>
                                        )
                                    })}
                                </div>
                                
                                
                                <PricingTable
                                    key={activeIndex}
                                    plans={data[activeIndex].plans}
                                    SubscribeToService={(serviceId,servicePlan, price)=>{
                                        SubscribeToService(activePlanKey, serviceId,servicePlan, price)
                                    }}
                                />
                               
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}