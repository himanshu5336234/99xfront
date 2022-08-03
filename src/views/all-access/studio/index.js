import React from "react"
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

export default function StudioAllAccess(){
    
    let pricing = [
        {
            id:"6042a0af1d2cbf19c3009b12",
            title:'Essential',
            excerpt:'A Perfect Kickstarter for startups and small businesses to scale and grow your online presence with videos',
            price: 999,
            features:[
                'Designated Video Editor',
                'Designated Graphic Designer',
                'No restrictions on type of Videos',
                'No limitations on No. of Videos per month',
                'No limitations on duration of Videos',
                'Custom Video/Audio edit as per your Requirement',
                'Videos for Instagram, Youtube, Facebook, Twitter, LinkedIn',
                'Custom Footage Edit',
                'Podcast Edits',
                'Product Videos',
                'Video Ads for Digital Marketing',
                'Access to Stock Footage (Envato, Canva, Pexels)',
                'Premium Video Templates',
                'Stock Audio Included (AudioJungle, MixKit, Epidemic Sound)',
                //'',
            ],
            resources:[
                {
                    icon:'',
                    label:'',
                },
                {
                    icon:'',
                    label:'',
                },
                {
                    icon:'',
                    label:'',
                },
                {
                    icon:'',
                    label:'',
                },
            ],
            footer_banner:'',
            footer_img:[
                'https://ik.imagekit.io/99x/startup/Frame_1683_71WUTFFTS.png',
                'https://ik.imagekit.io/99x/startup/01_HEii8AsPk.png'
            ]
        },
        {
            id:'6042a0cd1d2cbf19c3009b13',
            title:'Premium',
            excerpt:'The Right Plan for growing businesses and startups to scale Video Creation & Content Marketing efforts.',
            price: 1999,
            features:[
                'Designated Video Editor',
                'Designated Graphic Designer',
                'Designated Motion Graphic Designer',
                'Designated 2D Animator',

                'No restrictions on type of Videos',
                'No limitations on No. of Videos per month',
                'No limitations on duration of Videos',
                'Custom Video/Audio edit as per your Requirement',
                'Custom Animations Included',

                'Podcast Edits',
                'Videos for Instagram, Youtube, Facebook, Twitter, LinkedIn',
                'Custom Footage Edit',
                
                'Product Videos',
                'Video Ads for Digital Marketing',
                'Custom Footage Edit',

                'Access to Stock Footage (Envato, Canva, Pexels)',
                'Premium Video Templates',
                'Stock Audio Included (AudioJungle, MixKit, Epidemic Sound)',
            ],
            resources:[
                {
                    icon:'',
                    label:'',
                },
            ],
            footer_banner:'',
            footer_img:[
                'https://ik.imagekit.io/99x/startup/Frame_1683_71WUTFFTS.png',
                'https://ik.imagekit.io/99x/startup/01_HEii8AsPk.png'
            ]
        },
        // {
        //     title:'',
        //     excerpt:'',
        //     price:999,
        //     features:[
        //         '',
        //     ],
        //     resources:[
        //         {
        //             icon:'',
        //             label:'',
        //         },
        //     ],
        //     footer_banner:''
        // },
    ]

    return (
        <section className="all-access-page studio-all-access">

            <AAHero
                color="#FF276F"
                title="Your all access pass to content"
                subtitle="Audio & Video Editing for your business - at one flat rate. We’ve got everything you need to create stunning videos with compelling audio, post-production, and animations for your business and products. "
                banner="https://ik.imagekit.io/99x/startup/pages/all-access/Image_1__ks3RhFBvD6.png"
            />

            <AllAccessMainFeatures
             color="#FF276F"
             title={<>Boost your <span className='highlight'>Video Creation</span> efforts</>}
             subtitle="Save 1000$ of Resource spend with Video All Acess Pass? Amplify your online presence with professionally edited videos and animations for your website & social media channels"
             features={[
                 {
                     title:'Digital Marketing Video Ads',
                     subtitle:'Drive your online presence & inspire your audience with authentic, strong narratives and video ads for your digital marketing channels and campaigns. ',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/studio/Unlimited_Requests_iQ6DKKWzG.svg'
                 },
                 {
                     title:'Social Media & Brand Videos',
                     subtitle:'Excite your audience for your Product Launch, Brand Campaigns & Influencer Videos with high-quality, engaging, visual narratives and videos. ',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/studio/Group_45_-0Yq7FVbtk.svg'
                 },
                 {
                     title:'Events, Promos & Business Videos',
                     subtitle:'Inform, Describe, and tell and your story with Stunning Company and Product Promos, Explainers and Whiteboard Videos',
                     icon:'https://ik.imagekit.io/99x/startup/pages/all-access/studio/Group_45_-0Yq7FVbtk.svg'
                 }
             ]}
            />

            <AllAccessHighlight
                color="#FF276F"
                title={<>Flexible <span>Studio All Access</span> passes</>}
                subtitle="Get the best of all our plans - all for one flat rate, in one place. Customize your all-access and get started with your video and audio production journey"
                image="https://ik.imagekit.io/99x/startup/pages/all-access/All_Access_Pass_3__I5il_KzQpZ.png"
            />

            <section className="pricing" id="pricing">
                <div className="container">
                    <div className="price-container">
                        <div className="grid-container">
                            <div className="Labels"></div>
                            <div className="Label-Plan">Plan</div>
                            <div className="Label-Pricing">Pricing</div>
                            <div className="Label-Features">Key Features</div>
                            <div className="Label-Resource">Resources</div>

                            {pricing.map((p,i)=>(
                                <>
                                    <div className={`Plan${i+1}-Title Plan-Title`}>
                                        <h2>{p.title}</h2>
                                        <p className="subtitle">
                                            {p.excerpt}
                                        </p>
                                    </div>
                                </>
                            ))}
                            
                            {pricing.map((p,i)=>(
                                <>    
                                    <CurrencyContext.Consumer>
                                        {({currency, setCurrency})=>{
                                        console.log("CURRENCY_X", currency)
                                        return (
                                            <div className={`Plan${i+1}-Price`}>
                                                <div className="price-container">
                                                    <div className="price-left">
                                                        <div className="price-main">
                                                            <sup>{currency.symbol}</sup>
                                                            <h2>{parseInt(currency.usd_multiplier*p.price)}</h2>
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
                                                    SubscribeToService(p.id, p.price)
                                                }}>
                                                    Claim Free Trial
                                                </button>
                                            </div>
                                        )}}
                                    </CurrencyContext.Consumer>
                                </>
                            ))}

                            {pricing.map((p,i)=>(
                                <>
                                    <div className={`Plan${i+1}-Features`}>
                                        <ul>
                                        {p.features.map((f,i)=>(
                                            <li>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                </>
                            ))}
                            
                            {pricing.map((p,i)=>(
                                <>
                                    <div className={`Plan${i+1}-Resource Plan-Resource`}>
                                        <img className="software" src={p.footer_img[0]}/>
                                        <img src={p.footer_img[1]}/>
                                    </div>
                                </>
                            ))}
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

            <BeautifulRelationship color="#FF276F"/>
        </section>
    )
}