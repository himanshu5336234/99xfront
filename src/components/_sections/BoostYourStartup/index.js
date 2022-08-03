import React, { useState } from "react"
import {NavLink} from "react-router-dom"
import "./style.scss"

let HighlightCard = (props) => {

    return (
        <>
            <div className="card">
                <img src={props.image}/>
                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>
            </div>
        </>
    )
}

let LeverageWorldClassTalent = (props) => {
    
    if(props && props.site){
        if(props.site == "design"){
            return (
                <HighlightCard
                    title="Expert designers at your fingertips"
                    subtitle="Quickly sign up for the services you need. We’ll take care of the quality & the delivery of the work. Sitback relax and get the best talents and services with ease."
                    image="https://ik.imagekit.io/99x/design/_new/01_9BBhQAo5TL.png"
                />
            )
        }
        if(props.site == "seo"){
            return (
                <HighlightCard
                    title="A Professional Team at your fingertips"
                    subtitle="Quickly sign up for the services you need. We take care of the quality & the delivery of the work. Sitback relax and get the best talents and services with ease."
                    image="https://ik.imagekit.io/99x/seo/01_v9XC0bCXQP.png"
                />
            )
        }
        if(props.site == "social"){
            return (
                <HighlightCard
                    title="A Professional Team at your fingertips"
                    subtitle="Quickly sign up for the services you need. We take care of the quality & the delivery of the work. Sitback relax and get the best talents and services with ease."
                    image="https://ik.imagekit.io/99x/social/01_nHIaI1dfJ.png"
                />
            )
        }
    }

    return (
        <HighlightCard
            title="A Professional Team at your fingertips"
            subtitle="Quickly sign up for the services you need. We take care of the quality & the delivery of the work. Sitback relax and get the best talents and services with ease."
            image="https://ik.imagekit.io/99x/startup/components/boost_your_startup/Group_1114_rrDBVZspY.png"
        />
    )
}
let EverythingYouNeed = (props) => {

    if(props && props.site){
        if(props.site == "seo"){
            return (
                <HighlightCard
                    title="Everything from Technical to On-Page SEO"
                    subtitle="Say goodbye to limitations. Whether you’re an early Stage Startup or an Enterprise, we’ve got everything you need to scale your SEO and Content. Plug & Play subscriptions on the fly."
                    image="https://ik.imagekit.io/99x/seo/Image_BFg7YgzQA.png"
                />
            )
        }
        if(props.site == "social"){
            return (
                <HighlightCard
                    title="From Strategy to full-blown Marketing"
                    subtitle="Say goodbye to limitations. Whether you’re an early Stage Startup or an Enterprise, we’ve got everything you need to scale your SEO and Content. Plug & Play subscriptions on the fly."
                    image="https://ik.imagekit.io/99x/social/Image_7Iu5pLhe_.png"
                />
            )
        }
    }    
    return (
        <HighlightCard
            title="Everything from Digital to Design to Tech"
            subtitle="Say goodbye to the limitations. Whether you’re an early Stage Startup or an Enterprise, we cater to services across categories. Plug & Play subscriptions on the fly."
            image="https://ik.imagekit.io/99x/startup/components/boost_your_startup/everything_you_need_h4Lf6wrnxz.png"
        />
    )
}
let TeamAndWorkPlayBook = (props) => {
    
    if(props && props.site){
        if(props.site == "seo"){
            return (
                <HighlightCard
                    title="Collaboration, Team & Project Management"
                    subtitle="Bring your team’s goals, plans, tasks, files, and more together in one shared space. Collaborate with your team, manage projects, and collaborate - all in one workspace."
                    image="https://ik.imagekit.io/99x/seo/Image_1__lVsnQAOC5E.png"
                />
            )
        }
        if(props.site == "social"){
            return (
                <HighlightCard
                    title="Collaboration, Team & Project Management"
                    subtitle="Bring your team’s goals, plans, tasks, files, and more together in one shared space. Collaborate with your team, manage projects, and collaborate - all in one workspace."
                    image="https://ik.imagekit.io/99x/seo/Image_1__lVsnQAOC5E.png"
                />
            )
        }
    }  

    return (
        <HighlightCard
            title="Collaboration, Team & Project Management"
            subtitle="Bring your team’s goals, plans, tasks, files, and more together in one shared space. Collaborate with your team, manage projects, and collaborate - all in one workspace."
            image="https://ik.imagekit.io/99x/startup/components/boost_your_startup/team_playbook_wS3bb0Xup.png"
        />
    )
}
let CustomerSupport = (props) => {
    
    if(props && props.site){
        if(props.site == "seo"){
            return (
                <HighlightCard
                    title="We are here for you to succeed"
                    subtitle="We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions."
                    image="https://ik.imagekit.io/99x/seo/Customer_Support_HQm7Vzc1em.png"
                />
            )
        }
        if(props.site == "social"){
            return (
                <HighlightCard
                    title="We are here for you to succeed"
                    subtitle="We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions."
                    image="https://ik.imagekit.io/99x/social/Customer_Support_nfHbYibaCC.png"
                />
            )
        }
    }  

    return (
        <HighlightCard
            title="We are here for you to succeed"
            subtitle="We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions."
            image="https://ik.imagekit.io/99x/startup/components/boost_your_startup/Customer_Support_LVHFuUT0GH.png"
        />
    )
}

let FreeTrialsHighlight = (props) => {
    
    if(props && props.site){
        if(props.site == "seo"){
            return (
                <HighlightCard
                    title="Try us our 100% Risk-free today!"
                    subtitle="You’ll fall in love with us. But, If you don’t and you’re not 100% satisfied after a trial, we’ll refund your money, No questions asked whatsoever. Try us out now risk-free. "
                    image="https://ik.imagekit.io/99x/startup/components/boost_your_startup/free_trial_934ceM8Zbk.png"
                />
            )
        }
    }  

    return (
        <HighlightCard
            title="Try us our 100% Risk-free today!"
            subtitle="You’ll fall in love with us. But, If you don’t and you’re not 100% satisfied after a trial, we’ll refund your money, No questions asked whatsoever. Try us out now risk-free. "
            image="https://ik.imagekit.io/99x/startup/components/boost_your_startup/free_trial_934ceM8Zbk.png"
        />
    )
}


export default function BoostYourStartup(props){

    const initialCategories = [
        {
            id:'1',
            title:'Leverage Quality Talent',
        },
        {
            id:'2',
            title:'Everything you need is here. ',
        },
        {
            id:'3',
            title:'The team and work playbook',
        },
        {
            id:'4',
            title:'World Class Customer Support',
        },
        {
            id:'5',
            title:'Free-Trials & No Questions asked Refund.',
        },
    ];

    let [activeCategory, setActiveCategory ] = useState('1')

    return (
        <>
            <div className="boost-your-startup">
                <div className="container">
                <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h2 className="lh-150">
                                {props.title || <>Boost your <span>startup</span> <br/>with exceptional work</>}
                            </h2>
                            <p className="lead">
                                {props.subtitle || <>Spend more time growing your business. We’ll help you scale your business giving you access to premium services and the right talent to keep you moving in the right direction.</>}
                            </p>
                            <ul>
                                    {initialCategories.map((c,i)=>{
                                        return (
                                            <li onClick={() => {
                                                setActiveCategory(c.id);

                                            }} className={`${activeCategory === c.id ? 'active':''}`}>
                                                {c.title}
                                            </li>
                                        )
                                    })}
                             </ul>       
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className={`content ${activeCategory === '1' ? '':'hidden'}`}><LeverageWorldClassTalent {...props}/></div>
                            <div className={`content ${activeCategory === '2' ? '':'hidden'}`}><EverythingYouNeed {...props}/></div>
                            <div className={`content ${activeCategory === '3' ? '':'hidden'}`}><TeamAndWorkPlayBook {...props}/></div>
                            <div className={`content ${activeCategory === '4' ? '':'hidden'}`}><CustomerSupport {...props}/></div>
                            <div className={`content ${activeCategory === '5' ? '':'hidden'}`}><FreeTrialsHighlight {...props}/></div>
                        </div>
                </div>

                
            </div>
            </div>
        </>
    )
}