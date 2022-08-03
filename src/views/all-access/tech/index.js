import React,{useState} from "react"
import StillHaveQuestions from "../../../components/stilHaveQuestion"
import W3Range from "../../../components/W3Range"
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

export default function TechAllAccess(){

    let [currentPlanIndex, setCurrentPlanIndex] = useState(2);

    let Resources = [
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Group_61_1b9if0ONAW.svg',
            text:'Project Manager',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Developers_-_32px_QOgAqp3hO7.svg',
            text:'Software Developers ',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Group_913_mnj4WZClhi.svg',
            text:'App Developers',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Copywriter_-_32px_8mNMkrF4D.svg',
            text:'UX/UI Designer',
        },
    ]

    let pricing = [  
        {
            id:'6042a1831d2cbf19c3009b14',
            title:'50hr Development',
            price: 699,
            features:[
                {
                    title:"Web Development",
                    banners:{
                        software:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Group_1714_JBrRJjmwv_.png'
                    },
                    category:"SMEs",
                    features:[
                        "Dedicated Project Manager ",
                        "Dedicated Software Developer(s)",
                        "Dedicated UI/UX Designer ",
                        "Custom Hours of Web Development",
                        "Switch between Projects",
                        "Front End Development OR Back End Development",
                        "Front-end stack: React JS, HTML/CSS, Next JS, Angular JS",
                        "Back-end stack: Node, PHP, Java, Python, Ruby on Rails",
                        "Database: MySQL, NoSQL, PostgreSQL",
                        "Agile Software Development",
                        "Collaboration & Project Management",
                    ]
                },
                {},
                {
                    title:'Mobile App Development',
                    banners:{
                        software:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Group_1715_xD2zOYo2c.png'
                    },
                    category:"SMEs",
                    features:[
                        "Dedicated App developers",
                        "Dedicated UI/UX Designer ",
                        "Custom Hours of Web Development",
                        "Switch between Projects & Developers",
                        "Android  OR IOS OR Hybrid Apps Development",
                        "App Languages/frameworks: Java, Kotlin, Swift, Objective C, React Native, Flutter",
                        "Database: MySQL, NoSQL, PostgreSQL",
                        "Agile Software Development",
                        "Collaboration & Project Management",
                    ]
                },
            ]
        },
        {
            id:'6042a1af1d2cbf19c3009b15',
            title:'100h Development',
            price: 1199,
            features:[
                {
                    title:"Web Development",
                    banners:{
                        software:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Group_1714_JBrRJjmwv_.png'
                    },
                    category:"SMEs",
                    features:[
                        "Dedicated Project Manager ",
                        "Dedicated Software Developer(s)",
                        "Dedicated UI/UX Designer ",
                        "Custom Hours of Web Development",
                        "Switch between Projects",
                        "Front End Development OR Back End Development",
                        "Front-end stack: React JS, HTML/CSS, Next JS, Angular JS",
                        "Back-end stack: Node, PHP, Java, Python, Ruby on Rails",
                        "Database: MySQL, NoSQL, PostgreSQL",
                        "Agile Software Development",
                        "Collaboration & Project Management",
                    ]
                },
                {},
                {
                    title:'Mobile App Development',
                    banners:{
                        software:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Group_1715_xD2zOYo2c.png'
                    },
                    category:"SMEs",
                    features:[
                        "Dedicated App developers",
                        "Dedicated UI/UX Designer ",
                        "Custom Hours of Web Development",
                        "Switch between Projects & Developers",
                        "Android  OR IOS OR Hybrid Apps Development",
                        "App Languages/frameworks: Java, Kotlin, Swift, Objective C, React Native, Flutter",
                        "Database: MySQL, NoSQL, PostgreSQL",
                        "Agile Software Development",
                        "Collaboration & Project Management",
                    ]
                },
            ]
        },
        {
            id:'6042a1dd1d2cbf19c3009b16',
            title:'150h Development',
            price: 1999,
            features:[
                {
                    title:"Web Development",
                    banners:{
                        software:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Group_1714_JBrRJjmwv_.png'
                    },
                    category:"SMEs",
                    features:[
                        "Dedicated Project Manager ",
                        "Dedicated Software Developer(s)",
                        "Dedicated UI/UX Designer ",
                        "Custom Hours of Web Development",
                        "Switch between Projects",
                        "Front End Development OR Back End Development",
                        "Front-end stack: React JS, HTML/CSS, Next JS, Angular JS",
                        "Back-end stack: Node, PHP, Java, Python, Ruby on Rails",
                        "Database: MySQL, NoSQL, PostgreSQL",
                        "Agile Software Development",
                        "Collaboration & Project Management",
                    ]
                },
                {},
                {
                    title:'Mobile App Development',
                    banners:{
                        software:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Group_1715_xD2zOYo2c.png'
                    },
                    category:"SMEs",
                    features:[
                        "Dedicated App developers",
                        "Dedicated UI/UX Designer ",
                        "Custom Hours of Web Development",
                        "Switch between Projects & Developers",
                        "Android  OR IOS OR Hybrid Apps Development",
                        "App Languages/frameworks: Java, Kotlin, Swift, Objective C, React Native, Flutter",
                        "Database: MySQL, NoSQL, PostgreSQL",
                        "Agile Software Development",
                        "Collaboration & Project Management",
                    ]
                },
            ]
        }
    ];

    return (
        <section className="all-access-page tech-all-access">

            <AAHero
                color="#2D56E8"
                title="Your all access pass to tech"
                subtitle="Web Development & App Development in one plan. We’ve got everything to build and develop future-ready Web & Mobile Applications and software products with ease."
                banner="https://ik.imagekit.io/99x/startup/pages/all-access/Hero_Image_E4oGhNtgu1.png"
            />

            <AllAccessMainFeatures
             color="#2D56E8"
             title={<>Build products with ease for your business</>}
             subtitle="Save 1000$ of Resource spend with Tech All Acess Pass? Expert Developement team work on your projects, build web or mobile or hybrid apps with ease, moreover at a fraction of cost."
             features={[
                 {
                     title:'Build Products - Web, Mobile or Custom Apps ',
                     subtitle:'No more fretting over finding resources, hiring spends or infrastructure anymore. Save time, money and your efforts for the impactful  things, as for building your vision and products, we got you covered.',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Frame_437_NtIw1EYvAS.svg'
                 },
                 {
                     title:'Your golden ticket to unlimited value',
                     subtitle:'Everything you need is right here, under one roof - at a single price point. Right from SEO to building a stronger social media presence to running digital marketing campaigns at scale.',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Group_84_OthU-Z-Dc7.svg'
                 },
                 {
                     title:'Switch between projects at will',
                     subtitle:'Want us to work on Social Media this week and switch to a SEO next week? and manage social media simultaneously No problem. We’ve got you covered everywhere.',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/tech/Group_65_2eYC8JpHS.svg'
                 }
             ]}
            />

            <AllAccessHighlight
                color="#2D56E8"
                title={<>Flexible <span>Tech All Access</span> passes</>}
                subtitle="Get the best of all our plans - all for one flat rate, in one place. Customize your all-access and get started with your product & software development journey"
                image="https://ik.imagekit.io/99x/startup/pages/all-access/All_Access_Pass_1__sCsqmblaqU.png"
            />

            <section  style={{background:'#F8FEFF'}}>
            <div className="container">
                <div className="price-section">
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
                        <div className="Resources">
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
                            <div className="dev-slider">
                                <h3>Development Hours/per month</h3>
                                <div className="x-range">
                                    <W3Range onChange={(v)=>{
                                        console.log("Slider:", v)
                                        switch(v){
                                            case "0":
                                                setCurrentPlanIndex(0);
                                                break;
                                            case "50":
                                                setCurrentPlanIndex(1);
                                                console.log("Moved to 50")
                                                break;
                                            case "100":
                                                setCurrentPlanIndex(2);
                                                break;
                                            default:
                                                setCurrentPlanIndex(2)
                                        }
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Price" id="pricing">

                        <CurrencyContext.Consumer>
                        {({currency, setCurrency})=>(
                            <>
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
                            </>
                        )}
                        </CurrencyContext.Consumer>
                        

                        <button onClick={()=>{
                            SubscribeToService(pricing[currentPlanIndex].id, pricing[currentPlanIndex].price)
                        }}>
                            Subscribe
                        </button>

                        <p className="muted">
                            Quoted price applies when staying within the plan’s maximum marketing budget, social media posts, and website user limits. We don’t stop campaigns if limits are exceeded, but you will be charged for overages. Additional charges for add-ons will also apply.
                        </p>

                    </div>
                </div>
                <div className="price-notice">
                    <p>
                        Looks like you need more than 50 hours for developing awesome mobile and web apps. You’ll need our Premium plan.
                    </p>
                </div>
            </div>
            </section>

            <br/>

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

            <BeautifulRelationship color="#2D56E8"/>
        </section>
    )
}