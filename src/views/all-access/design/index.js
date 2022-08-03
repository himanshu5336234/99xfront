import React, {useState} from "react"
import StillHaveQuestions from "../../../components/stilHaveQuestion"
import WhyWorkWithUs from "../../../components/WhyWorkWithUs"
import BeautifulRelationship from "../../../components/_sections/BeautifulRelationship"
import EnterpriseSolutions from "../../../components/_sections/EnterpriseSolutions"
import LikeAnEcosystem from "../../../components/_sections/LikeAnEcosystem"
import TrustedBy1000Customers from "../../../components/_sections/TrustedBy1000Customers"
import "../style.scss"
import AllAccessMainFeatures from "../_components/aa-features"
import AAHero from "../_components/aa-hero"
import AllAccessHighlight from "../_components/aa-highlight"

import {SubscribeToService} from "../helper"

import CurrencyContext from "../../../context/currency.context"

export default function DesignAllAccess(){

    let [currentPlanIndex, setCurrentPlanIndex] = useState(0);

    let Resources = [
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/design/32px_YGOGPzIVw.svg',
            text:'Graphic Designer',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/design/Developers_-_32px_i_-zG47bsO.svg',
            text:'UI Designer',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/design/Group_66_HZC13PsaC8.svg',
            text:'UX Designer',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/design/Frame_935_V-6Oo-1Q6X.svg',
            text:'UX Architect',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/design/32px_1__RE5ki9jclx.svg',
            text:'Motion Developer',
        },
    ]

    let pricing = [  
        {
            id:'6042a0491d2cbf19c3009b10',
            title:'Essential',
            price: 699,
            features:[
                {
                    title:"Graphic Design",
                    category:"",
                    banners:{
                        software:'https://ik.imagekit.io/99x/startup/pages/all-access/design/Group_1726_Fme-5uCL5I.png'
                    },
                    features:[
                        "Dedicated Graphic Designer",              
                        "Social Media Creatives",              
                        "Digital Marketing Campaign Ads",
                        "Print Media - Posters & Banners",
                        "Website, mobile App, landing page banners & Emailers.",
                        "Unlimited Requests & Revisions",
                        "<24 Hours Turnaround Time per Request",
                        "Stock Images Included",
                    ]
                },
                {
                    title:'UX/UI Design',
                    category:"SMEs",
                    banners:{
                        software:'https://ik.imagekit.io/99x/startup/pages/all-access/design/Group_1727_hyyJ2X_OzD.png'
                    },
                    features:[
                        "Dedicated UI/UX Designer ",
                        "Custom Product Design, Web & Mobile App (Android, IOS, Hybrid Apps)",
                        "Interactive Prototypes + Design System Included",
                        "Low Fidelity, Mid Fidelity, High Fidelity screens",
                        "Sketch, Figma, Adobe XD files",
                        "Unlimited Requests & Revisions",
                        "Stock Images Included",
                    ]
                },
            ]
        },
        {
            id:'6042a0771d2cbf19c3009b11',
            title:'Premium',
            price: 1199,
            features:[
                {
                    title:"Graphic Design",
                    category:"",
                    banners:{
                        software:'https://ik.imagekit.io/99x/startup/pages/all-access/design/Group_1726_Fme-5uCL5I.png'
                    },
                    features:[
                        "Dedicated Graphic Designer",              
                        "Social Media Creatives",              
                        "Digital Marketing Campaign Ads",
                        "Print Media - Posters & Banners",
                        "Website, mobile App, landing page banners & Emailers.",
                        "Unlimited Requests & Revisions",
                        "<24 Hours Turnaround Time per Request",
                        "Stock Images Included",
                    ]
                },
                {
                    title:'UX/UI Design',
                    category:"SMEs",
                    banners:{
                        software:'https://ik.imagekit.io/99x/startup/pages/all-access/design/Group_1727_hyyJ2X_OzD.png'
                    },
                    features:[
                        "Dedicated UI/UX Designer ",
                        "Custom Product Design, Web & Mobile App (Android, IOS, Hybrid Apps)",
                        "Interactive Prototypes + Design System Included",
                        "Low Fidelity, Mid Fidelity, High Fidelity screens",
                        "Sketch, Figma, Adobe XD files",
                        "Unlimited Requests & Revisions",
                        "Stock Images Included",
                    ]
                },
                {
                    title:'Custom Interactions',
                    banners:{
                        software:''
                    },
                    features:[
                        "Custom Illustrations",
                        "Custom Interactions  + Micro Interactions",
                        "Animated GIFs",
                    ]
                }
            ]
        },
    ];

    return (
        <section className="all-access-page design-all-access">

            <AAHero
                color="#5F30C5"
                title="Your all access pass to design"
                subtitle="Graphic Design, UI/UX Design & Custom Illustrations for your business - at one flat rate. Whether you need moving illustrations or stunning print designs, or seamless interfaces for your products, We’ve got you covered."
                banner="https://ik.imagekit.io/99x/startup/pages/all-access/Image_iaNCMczHm.png"
            />

            <AllAccessMainFeatures
             color="#5F30C5"
             title={<>Add colors to your brand & online presence.</>}
             subtitle="Save 1000$ of Resource spend with Digial All Acess Pass? Build Your community, Drive traffic and focus on driving revenues and retention with a holistic Digital Marketing Approach."
             features={[
                 {
                     title:'Your Design team, assembled',
                     subtitle:'No more fretting over finding resources, hiring spends or infrastructure anymore. Save time, money and your efforts for the bigger things, as for designing amazing assets for your biz, we got you covered. ',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/design/Vector_PpcwvOPWz.svg'
                 },
                 {
                     title:'Art & Science meet Context',
                     subtitle:'Deliver seamless and consistent user and brand experiences that your customers expect. Leverage our industry knowledge from 20+ Industries, inspire, communicate & scale your brand value. ',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/design/Unlimited_Requests_1RxPIsft8Y.svg'
                 },
                 {
                     title:'Your golden ticket to unlimited value',
                     subtitle:'Everything you need is right here, under one roof - at a single price point. Whether its print media, digital media or wireframes for your apps and websites, We’ve got all your needs covered. ',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/design/ContentWriter_4Y92LkPbYn.svg'
                 }
             ]}
            />

            <AllAccessHighlight
                background="#FFF8FB"
                color="#5F30C5"
                title={<>Flexible <span>Design All Access</span> passes</>}
                subtitle="Get the best of all our plans - all for one flat rate, in one place. Customize your all-access and get started with your design and creativity journey"
                image="https://ik.imagekit.io/99x/startup/pages/all-access/All_Access_Pass_2__F8dcKx0uD.png"
            />

            <section  style={{background:'#FFF8FB;'}}>
            <div className="container">
                <div className="price-plan-chooser">
                    <ul>
                        <li 
                        className={`${currentPlanIndex == 0 ? 'active':''}`}
                        onClick={()=>{
                            setCurrentPlanIndex(0);
                        }}
                        >
                            <span>Essential</span>
                        </li>
                        <li 
                        className={`${currentPlanIndex == 1 ? 'active':''}`}
                        onClick={()=>{
                            setCurrentPlanIndex(1);
                        }}
                        >
                            <span>Premium</span>
                        </li>
                    </ul>
                </div>

                <CurrencyContext.Consumer>
                    {
                        ({currency, setCurrency}) => (
                            
                            <>
                            <div className="price-section" id="pricing">
                                <div className="price-blocks">
                                    <div className="Price-Name">
                                        {pricing[currentPlanIndex].features.map((p,i)=>{
                                            if(p.title)
                                                return (
                                                <div className="price-desc-container">
                                                    <div className="title-and-features">
                                                        <div className="title-bar">
                                                            <h3>{p.title}</h3>
                                                        </div>
                                                        <div className="features">
                                                            <ul>
                                                                {p.features.map((f,i)=>(
                                                                    <li><span>{f}</span></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="softwares">
                                                        <img src={p.banners.software}/>       
                                                    </div>
                                                </div>
                                                )
                                            return (
                                                <div className="plus-icon">
                                                    <img src="https://ik.imagekit.io/99x/startup/pages/all-access/Add_Y1YFwFfoh.svg"/>
                                                </div>
                                            )
                                        })}
                                    
                                    </div>
                                    <div className={`Resources ${currentPlanIndex == 1 ? 'section2':''}`}>
                                        <div  className="res-assigned">
                                            <h3>Resources Assigned</h3>
                                            <div className="resource-container">
                                                <ul>
                                                    {Resources.map((r,i)=>(
                                                        <li>
                                                            <img src={r.image}/>
                                                            <span>{r.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={`Price ${currentPlanIndex == 0 ? 'hidden':''}`}>

                                            <div className="price-container">
                                                <div className="price-left">
                                                    <div className="price-main">
                                                        <sup>{currency.symbol}</sup>
                                                        <h2>
                                                            {
                                                                parseInt(currency.usd_multiplier*pricing[currentPlanIndex].price)
                                                            }
                                                        </h2>
                                                    </div>
                                                    <span>/per month</span>
                                                </div>
                                                <div className="price-right">
                                                    <div className="offer">
                                                        <span>Save 20%</span>
                                                    </div>
                                                    <div className="currency-switch">

                                                    </div>
                                                </div>

                                            </div>

                                            <button onClick={()=>{
                                                SubscribeToService(pricing[1].id, pricing[1].price)
                                            }}>
                                                Subscribe
                                            </button>

                                            <p className="muted">
                                                Quoted price applies when staying within the plan’s maximum marketing budget, social media posts, and website user limits. We don’t stop campaigns if limits are exceeded, but you will be charged for overages. Additional charges for add-ons will also apply.
                                            </p>

                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={`Price ${currentPlanIndex == 1 ? 'hidden':''}`}>

                                    <div className="price-container">
                                        <div className="price-left">
                                            <div className="price-main">
                                                <sup>{currency.symbol}</sup>
                                                <h2>{parseInt(currency.usd_multiplier*pricing[currentPlanIndex].price)}</h2>
                                            </div>
                                            <span>/per month</span>
                                        </div>
                                        <div className="price-right">
                                            <div className="offer">
                                                <span>Save 20%</span>
                                            </div>
                                            <div className="currency-switch">

                                            </div>
                                        </div>

                                    </div>

                                    <button onClick={()=>{
                                                SubscribeToService(pricing[0].id, pricing[0].price)
                                    }}>
                                        Subscribe
                                    </button>

                                    <p className="muted">
                                        Quoted price applies when staying within the plan’s maximum marketing budget, social media posts, and website user limits. We don’t stop campaigns if limits are exceeded, but you will be charged for overages. Additional charges for add-ons will also apply.
                                    </p>

                                </div>
                            </div>
                            {/* <div className="price-notice">
                                <p>
                                    Looks like you need more than 50 hours for developing awesome mobile and web apps. You’ll need our Premium plan.
                                </p>
                            </div> */}
                            </>
                        )
                    }
                </CurrencyContext.Consumer>
            </div>
            </section>

            

            <section className="bg-white pv-30">
                <EnterpriseSolutions/>
            </section>
        
            <section className="bg-white pv-30">
                <TrustedBy1000Customers/>
            </section>
       
            <section className="bg-white pv-30">
                <LikeAnEcosystem/>
            </section>

            <section className="bg-white pv-30">
                <WhyWorkWithUs/>
            </section>

            <section className="bg-white pv-30">
                <StillHaveQuestions/>
            </section>

            <BeautifulRelationship color="#5F30C5"/>
        </section>
    )
}