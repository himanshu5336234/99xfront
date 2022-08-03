import React, { useState } from "react"
import {NavLink} from "react-router-dom"
import "./style.scss"
import W3Carousel from "../../W3Carousel"
let UIDesignSection = () => {
    
    let features = [
        'Professional UX/UI Designers',
        'Unlimited Requests & Revisions',
        'Conversion-first Web & App Designs',
        'Gorgeous User Interfaces to delight your users',
        'In-Depth Collaboration for Quality Output'
    ]

    let imgsrc = "https://ik.imagekit.io/99x/startup/components/everything_you_need/ui_ux_fJOGDAJ_0h.png";

    return (
        <>
            <div className="row comp-card">
                <div className="col-md-6 comp-features">
                    <div className="mobile-only">
                        <img src={imgsrc}/>
                    </div>
                    <ul>
                        {features.map((item, i)=>(
                            
                            <li className="mb-15 list-points" key={i}>
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span>
                                        {item}
                                    </span>
                            </li>

                        ))}
                    </ul>
                    <div className="container mb-30 text-left mt-30">
                        <NavLink exact={true} to={"/c/ui-ux"} className="btn-explore custom-button normal magenta">Explore Subscriptions</NavLink>
                    </div>
                </div>
                <div className="col-md-6 desktop-only">
                    <img src={imgsrc}/>
                </div>
            </div>
        </>
    )
}

let TechnologySection = () => {
    let features = [
        'Skilled Software Developers',
        'Designated Project Manager',
        'Web Dev / Mobile App Dev / Custom App Dev',
        'Complimentary UI/UX Designer',
        'Flexible Hiring options that suits you',
    ]

    let imgsrc = "https://ik.imagekit.io/99x/startup/components/everything_you_need/technology_zWE5HsLXAt.png"

    return (
        <>
            <div className="row comp-card">
                <div className="col-md-6 comp-features">
                    <div className="mobile-only">
                        <img src={imgsrc}/>
                    </div>
                    <ul>
                        {features.map((item, i)=>(
                            
                            <li className="mb-15" key={i}>
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-500 family-inter">
                                        {item}
                                    </span>
                            </li>

                        ))}
                    </ul>
                    <div className="container mb-30 text-left mt-30">
                        <NavLink exact={true} to={"/c/web-dev"} className="btn-explore custom-button normal magenta">Explore Subscriptions</NavLink>
                    </div>
                </div>
                <div className="col-md-6 desktop-only">
                    <img src={imgsrc}/>
                </div>
            </div>
        </>
    )
}

let GraphicDesignSection = () => {
    let features = [
        'Expert Visual Designers',
        'Unlimited Requests & Revisions',
        'Designed creatives from Online Ads to Print Media',
        'Free Stock Images & Icons, Vectors ',
        'In-Depth Collaboration for Quality Output',
    ]

    let imgsrc = "https://ik.imagekit.io/99x/startup/components/everything_you_need/graphic_design_HYts9a6eo2.png"

    return (
        <>
            <div className="row comp-card">
                <div className="col-md-6 comp-features">
                    <div className="mobile-only">
                        <img src={imgsrc}/>
                    </div>
                    <ul>
                        {features.map((item, i)=>(
                            
                            <li className="mb-15" key={i}>
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-500 family-inter">
                                        {item}
                                    </span>
                            </li>

                        ))}
                    </ul>
                    <div className="container mb-30 text-left mt-30">
                        <NavLink exact={true} to={"/c/graphic-design"} className="btn-explore custom-button normal magenta">Explore Subscriptions</NavLink>
                    </div>
                </div>
                <div className="col-md-6 desktop-only">
                    <img src={imgsrc}/>
                </div>
            </div>
        </>
    )
}
let DigitalMarketingSection = () => {
    let features = [
        'Expert Digital Marketing Specialists',
        'Tailor Made campaigns for Sales, Lead Gen & Brand Awareness',
        'Quality Ad Creatives for higher CTR & Conversions',
        'Weekly Calls, Reporting & Analytics',
        'Real-time Tracking & Collaboration',
    ]
    let imgsrc = "https://ik.imagekit.io/99x/startup/components/everything_you_need/digital_marketing_0TxIWwl-vp.png";

    return (
        <>
            <div className="row comp-card">
                <div className="col-md-6 comp-features">
                    <div className="mobile-only">
                        <img src={imgsrc}/>
                    </div>
                    <ul>
                        {features.map((item, i)=>(
                            
                            <li className="mb-15" key={i}>
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-500 family-inter">
                                        {item}
                                    </span>
                            </li>

                        ))}
                    </ul>
                    <div className="container mb-30 text-left mt-30">
                        <NavLink exact={true} to={"/c/digital-marketing"} className="btn-explore custom-button normal magenta">Explore Subscriptions</NavLink>
                    </div>
                </div>
                <div className="col-md-6 desktop-only">
                    <img src={imgsrc}/>
                </div>
            </div>
        </>
    )
}
let SocialMediaSection = () => {
    let features = [
        'Curated & Experienced Graphic Designers',
        'Designated Social Media Manager',
        'Creative Content for Facebook, Instagram, Twitter & more',
        'Professional Content for LinkedIn',
        'Social Media Account Management',
    ]

    let imgsrc= "https://ik.imagekit.io/99x/startup/components/everything_you_need/social_media_ocznNE-NQ.png"

    return (
        <>
            <div className="row comp-card">
                <div className="col-md-6 comp-features">
                    <div className="mobile-only">
                        <img src={imgsrc}/>
                    </div>
                    <ul>
                        {features.map((item, i)=>(
                            
                            <li className="mb-15" key={i}>
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-500 family-inter">
                                        {item}
                                    </span>
                            </li>

                        ))}
                    </ul>
                    <div className="container mb-30 text-left mt-30">
                        <NavLink exact={true} to={"/c/social-media"} className="btn-explore custom-button normal magenta">Explore Subscriptions</NavLink>
                    </div>
                </div>
                <div className="col-md-6 desktop-only">
                    <img src={imgsrc}/>
                </div>
            </div>
        </>
    )
}
let SeoSection = () => {
    let features = [
        'Technical SEO Experts',
        'URL Structure & Website Architecture',
        'Thorough Keyword  Research & SEO Optimized Meta Data',
        'High Domain Authority Link Building',
        'SEO Optimized Content',
    ]
    let imgsrc= "https://ik.imagekit.io/99x/startup/components/everything_you_need/seo_KgdU_NJgPd.png"

    return (
        <>
            <div className="row comp-card">
                <div className="col-md-6 comp-features">
                    <div className="mobile-only">
                        <img src={imgsrc}/>
                    </div>
                    <ul>
                        {features.map((item, i)=>(
                            
                            <li className="mb-15" key={i}>
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-500 family-inter">
                                        {item}
                                    </span>
                            </li>

                        ))}
                    </ul>
                    <div className="container mb-30 text-left mt-30">
                        <NavLink exact={true} to={"/c/seo"} className="btn-explore custom-button normal magenta">Explore Subscriptions</NavLink>
                    </div>
                </div>
                <div className="col-md-6 desktop-only">
                    <img src={imgsrc}/>
                </div>
            </div>
        </>
    )
}

export default function EverythingYouNeedToGrow(props){

    const initialCategories = [
        {
            id:'1',
            title:'UI-UX Design',
            icon:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/ui-ux_lgiaEiiz-M.svg',
            iconActive:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/ui_ux-acitve_mPjxoloOi8.svg',
            body: UIDesignSection,
        },
        {
            id:'2',
            title:'Technology',
            icon:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/technology_pfmrRKzTly.svg',
            iconActive:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/technology-active_5VENt197Eu.svg',
            body: TechnologySection,
        },
        {
            id:'3',
            title:'Graphic Design',
            icon:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/graphic-design__pYWV1DI2u.svg',
            iconActive:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/graphic_design-active__ITAw7GHLW.svg',
            body: GraphicDesignSection,
        },
        {
            id:'4',
            title:'Digital Marketing',
            icon:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/digital-marketing_mokSk5N4a.svg',
            iconActive:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/digital_marketing-acitve_BLIs3c8c5J.svg',
            body: DigitalMarketingSection,
        },
        {
            id:'5',
            title:'Social Media',
            icon:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/social-media_DsomNDjTId.svg',
            iconActive:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/social_media-acitve_9XHeZsVz6h.svg',
            body: SocialMediaSection,
        },
        {
            id:'6',
            title:'SEO',
            icon:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/social-media_DsomNDjTId.svg',
            iconActive:'https://ik.imagekit.io/99x/startup/components/everything_you_need/icons/social_media-acitve_9XHeZsVz6h.svg',
            body:SeoSection,
        }
    ];

    let [activeCategory, setActiveCategory ] = useState('1')

    return (
        <>
            <div className="eyntg">
                <h2 className="lh-150">Everything you need to grow your Startup</h2>
                <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="custom-tab">
                                <div className="custom-tab-header-container" style={{overflow:"hidden"}}>
                                    <W3Carousel name={"eyntg"} className="category-list">
                                    {initialCategories.map((c,i)=>{
                                        return (
                                            <button onClick={() => {
                                                setActiveCategory(c.id);

                                            }} className={`${activeCategory === c.id ? 'active':''}`}>
                                                 
                                                <img style={{width:"48px"}}  src={`${activeCategory === c.id ? c.iconActive:c.icon}`} />
                                                {c.title}
                                                
                                                
                                            </button>
                                        )
                                    })}
                                    </W3Carousel>
                                </div>
                            </div>
                        </div>
                </div>

                <div className={`content ${activeCategory === '1' ? '':'hidden'}`}><UIDesignSection/></div>
                <div className={`content ${activeCategory === '2' ? '':'hidden'}`}><TechnologySection/></div>
                <div className={`content ${activeCategory === '3' ? '':'hidden'}`}><GraphicDesignSection/></div>
                <div className={`content ${activeCategory === '4' ? '':'hidden'}`}><DigitalMarketingSection/></div>
                <div className={`content ${activeCategory === '5' ? '':'hidden'}`}><SocialMediaSection/></div>
                <div className={`content ${activeCategory === '6' ? '':'hidden'}`}><SeoSection/></div>

            </div>
        </>
    )
}