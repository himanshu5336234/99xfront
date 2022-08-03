import React,{useState} from "react"
import StillHaveQuestions from "../../../components/stilHaveQuestion"
import WhyWorkWithUs from "../../../components/WhyWorkWithUs"
import BeautifulRelationship from "../../../components/_sections/BeautifulRelationship"
import LikeAnEcosystem from "../../../components/_sections/LikeAnEcosystem"
import "../style.scss"
import AllAccessMainFeatures from "../_components/aa-features"
import AAHero from "../_components/aa-hero"
import AllAccessHighlight from "../_components/aa-highlight"
import TrustedBy1000Customers from "../../../components/_sections/TrustedBy1000Customers"
import EnterpriseSolutions from "../../../components/_sections/EnterpriseSolutions"

import CurrencyContext from "../../../context/currency.context"

import {SubscribeToService} from "../helper"

export default function DigitalAllAccess(){

    let [currentPlanIndex, setCurrentPlanIndex] = useState(0);

    let pricing = [  
        {
            id:'60429e7f1d2cbf19c3009b0d',
            title:'SMEs',
            price: 799,
            features:[
                {
                    title:"SEO",
                    category:"SMEs",
                    features:[
                        "Applicable for Websites upto  - 50000 Monthly visitors",
                        "Designated SEO Manager",
                        "4 SEO Optimized Articles Per Month (1000 words)",
                        "Link Building ( 6 High Quality Links per month)",
                        "Link Building from sites with 20+domain authority ",
                        "On-Page & Technical SEO "
                    ]
                },
                {},
                {
                    title:'Digital Marketing',
                    category:"SMEs",
                    features:[
                        'Applicable for Ad Spends upto 2000$ per month',
                        'Google Ads - SEM, Display & Youtube',
                        'LinkedIn & Native Ads on Taboola, Outbrain and more',
                        'Facebook, Twitter & Instagram Ads',
                        'Creatives & Copy for all Ads',
                        'Comprehensive Campaign Management',
                        'Campaign A/B Testing',
                        'Custom & Lookalike Audiences'
                    ]
                },
                {},
                {
                    title:'Social Media',
                    category:'SMEs',
                    features:[
                        "15 Unique Social Media Posts per month",
                        "Creatives for Instagram, Facebook LinkedIn, Twitter, Pinterest & more.",
                        "2  Infographics, Slideshow or Templatized Videos Included",
                        "Dedicated Social Media  Manager",
                        "Dedicated Content Writer",
                        "Dedicated Graphic Designer ",
                        "Social Media Management Included",
                        "Stock Images Included",
                    ]
                }
            ]
        },
        {
            id:'60429eb71d2cbf19c3009b0e',
            title:'Startup',
            price: 999,
            features:[
                {
                    title:"SEO",
                    category:"SMEs",
                    features:[
                        "Applicable for Websites upto  - 150000 Monthly visitors",
                        "Designated SEO Manager",
                        "6 SEO Optimized Articles Per Month (1000 words)",
                        "Link Building ( 10 High Quality Links per month)",
                        "Link Building from sites with 20+domain authority ",
                        "Google My Business Management",
                        "On-Page & Technical SEO "
                    ]
                },
                {},
                {
                    title:'Digital Marketing',
                    category:"SMEs",
                    features:[
                        'Applicable for Ad Spends upto 5000$ per month',
                        'Google Ads - SEM, Display & Youtube',
                        'LinkedIn & Native Ads on Taboola, Outbrain and more',
                        'Facebook, Twitter & Instagram Ads',
                        'Creatives & Copy for all Ads',
                        'Comprehensive Campaign Management',
                        'Campaign A/B Testing',
                        'Custom & Lookalike Audiences'
                    ]
                },
                {},
                {
                    title:'Social Media',
                    category:'SMEs',
                    features:[
                        "22 Unique Social Media Posts per month",
                        "Creatives for Instagram, Facebook LinkedIn, Twitter, Pinterest & more.",
                        "4 Slideshow or Templatized Videos Included",
                        "2 Infographics and Animated Gifs",
                        "Dedicated Social Media  Manager",
                        "Dedicated Content Writer",
                        "Dedicated Graphic Designer ",
                        "Social Media Management Included",
                        "Stock Images Included",
                    ]
                }
            ]
        },
        {
            id:'60429ed81d2cbf19c3009b0f',
            title:'Business',
            price: 1999,
            features:[
                {
                    title:"SEO",
                    category:"SMEs",
                    features:[
                        "Applicable for Websites upto  - 300000 Monthly visitors",
                        "Designated SEO Manager",
                        "8 SEO Optimized Articles Per Month (1000 words)",
                        "Link Building ( 10 High Quality Links per month)",
                        "Link Building from sites with 20+domain authority ",
                        "On-Page & Technical SEO "
                    ]
                },
                {},
                {
                    title:'Digital Marketing',
                    category:"SMEs",
                    features:[
                        'Applicable for Ad Spends upto 2000$ per month',
                        'Google Ads - SEM, Display & Youtube',
                        'LinkedIn & Native Ads on Taboola, Outbrain and more',
                        'Facebook, Twitter & Instagram Ads',
                        'Creatives & Copy for all Ads',
                        'Comprehensive Campaign Management',
                        'Campaign A/B Testing',
                        'Custom & Lookalike Audiences'
                    ]
                },
                {},
                {
                    title:'Social Media',
                    category:'SMEs',
                    features:[
                        "30 Unique Social Media Posts per month",
                        "Creatives for Instagram, Facebook LinkedIn, Twitter, Pinterest & more.",
                        "4 Slideshow or Templatized Videos Included",
                        "2 Infographics and Animated Gifs",
                        "Dedicated Social Media  Manager",
                        "Dedicated Content Writer",
                        "Dedicated Graphic Designer ",
                        "Social Media Management Included",
                        "Stock Images Included",
                    ]
                }
            ]
        }
    ];

    let Resources = [
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/digital/32px_T5wCBaLr9_.svg',
            text:'Digital Marketing Manager',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/digital/32px_2__Vw2eDIj-MK.svg',
            text:'Social Media Manager',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/digital/32px_1__zGmpuPN0u8.svg',
            text:'SEO Specialist',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/digital/32px_3__Rw_12Guh3d.svg',
            text:'Graphic Designer',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/digital/Group_913_i0YbF4H45W.svg',
            text:'Content Writer',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/digital/Copywriter_-_32px_XXwqgo8jMI.svg',
            text:'Copywriter',
        },
        {
            image:'https://ik.imagekit.io/99x/startup/pages/all-access/digital/VideoEditor_-_32px_yyBM3yf85.svg',
            text:'Video Editor',
        },
    ]

    return (
        <section className="all-access-page digital-all-access">

            <AAHero
                title="Your all access pass to digital"
                subtitle="Do more with all access - right from social media to SEO to digital marketing for your business; we’ve got everything you need. All our best features packed in one: Available Instantly for you."
                banner="https://ik.imagekit.io/99x/startup/pages/all-access/Group_1639_P7KhtPXZA9.png"
            />

            <AllAccessMainFeatures
             color="#02ADC5"
             title={<>Scale your <span className='highlight'>Digital Marketing</span> efforts</>}
             subtitle="Save 1000$ of Resource spend with Digial All Acess Pass? Build Your community, Drive traffic and focus on driving revenues and retention with a holistic Digital Marketing Approach."
             features={[
                 {
                     title:'Your Digital Marketing team, assembled',
                     subtitle:'With us, you wont just get a guy who runs campaigns, you get to work with a team of experts. An experienced Digital Marketer, Graphic Designer & Content Writer for your campaigns.',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/digital/Frame_437_MJIT3o8kR.svg'
                 },
                 {
                     title:'Your golden ticket to unlimited value',
                     subtitle:'Everything you need is right here, under one roof - at a single price point. Right from SEO to building a stronger social media presence to running digital marketing campaigns at scale.',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/digital/Group_85_nWJBykXyx.svg'
                 },
                 {
                     title:'Holistic Digital Marketing at work',
                     subtitle:'Want us to work on Social Media this week and switch to a SEO next week? and manage social media simultaneously No problem. We’ve got you covered everywhere.',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/digital/Group_65_KacSrHDIF5.svg'
                 }
             ]}
            />

            <AllAccessHighlight
                background="#F8FEFF"
                color="#02ADC5"
                title={<>Flexible <span>Digital All Access</span> passes</>}
                subtitle="Get the best of all our plans - all for one flat rate, in one place. Customize your all-access and get started with your digital growth journey"
                image="https://ik.imagekit.io/99x/startup/pages/all-access/All_Access_Pass_l4rvbWOfLm.png"
            />

            <section  style={{background:'#F8FEFF'}}>
            <div className="container" id="pricing">
                <div className="price-section">
                <div className="price-blocks">
                    <div className="Price-Name">
                        {pricing[currentPlanIndex].features.map((p,i)=>{
                            if(p.title)
                                return (
                                <div className="price-desc-container">
                                    <div className="title-bar">
                                        <h3>{p.title}</h3>
                                        <select 
                                        value={currentPlanIndex}
                                        onChange={(e)=>{
                                            // console.log(v);
                                            setCurrentPlanIndex(e.target.value)
                                        }}>
                                            <option value="0">SMEs</option>
                                            <option value="1">Startup</option>
                                            <option value="2">Business</option>
                                        </select>
                                    </div>
                                    <div className="features">
                                        <ul>
                                            {p.features.map((f,i)=>(
                                                <li><span>{f}</span></li>
                                            ))}
                                        </ul>
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
                    <CurrencyContext.Consumer>
                        {
                            ({currency, setCurrency}) => (
                                <div className="Price">
                        
                                    <div className="price-container">
                                        <div className="price-left">
                                            <div className="price-main">
                                                <sup>{currency.symbol}</sup>
                                                <h2>{currency.usd_multiplier*pricing[currentPlanIndex].price}</h2>
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
                                        SubscribeToService(pricing[currentPlanIndex].id, pricing[currentPlanIndex].price)
                                    }}>
                                        Subscribe
                                    </button>

                                    <p className="muted">
                                        Quoted price applies when staying within the plan’s maximum marketing budget, social media posts, and website user limits. We don’t stop campaigns if limits are exceeded, but you will be charged for overages. Additional charges for add-ons will also apply.
                                    </p>

                            </div>
                            )
                        }
                    </CurrencyContext.Consumer>
                </div>
                </div>
            </div>

            <div className="we-work-with container">
                <div className="row">
                    <div className="col-md-5">
                        <p>We work with an array of Digital products and tools to enhance your ROI.</p>
                    </div>
                    <div className="col-md-7">
                        <img src="https://ik.imagekit.io/99x/startup/pages/all-access/digital/Group_1710_N8DOUoi1D.png"/>
                    </div>
                </div>
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

            <BeautifulRelationship/>
        </section>
    )
}
