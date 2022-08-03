import React from "react"
import {NavLink}  from "react-router-dom"
import "./style.scss"

export default function EmpowerMarketingTeam(props){

    const Content = [
        {
            link:"/c/digital-marketing",
            image:"https://ik.imagekit.io/99x/startup/icons/icon_digital_marketing_llq-V5t_Fp.svg",
            title:"Digital Marketing",
            subtitle:"Your Personal Digital Marketing Studio to help grow your Sales, Leads and Brand Equity. From Google Ads, Facebook, Instagram to LinkedIN, we got you covered."
        },
        {
            link:"/c/graphic-design",
            image:"https://ik.imagekit.io/99x/startup/icons/icon_creatives_fPtO0pOvad.svg",
            title:"Creatives & Design",
            subtitle:"Captivating Designs for Social Media, Retail, or your Marketing Campaigns. Connect and communicate with your audience in the most meaningful way."
        },
        {
            link:"/all-access/tech",
            image:"https://ik.imagekit.io/99x/startup/icons/icon_tech_yNjejLa8P.svg",
            title:"Tech & Product",
            subtitle:"Experienced & Professional Software Developers to build your Web, Mobile App or Custom Products."
        },
       
    ];
    return (
        <>
            <div className="build-startup-smart-way-main pv-30">
                <div className="comp-title text-center">
                    <h2>
                        Build & Scale your Startup, the smart way
                    </h2>
                    {/* <p className="lead">
                    Enable your business with unique solutions for every function. On an average you’ll be saving 30% of your hiring cost at the same time working with the best, without missing a beat
                    </p> */}
                </div>
                <div className="row">
                    {Content.map((c,i)=>(
                        <div className="col-sm-12 col-md-4">
                            <div className="card">
                                <div className="image-container">
                                    <img src={c.image}/>
                                    <br/>
                                    <br/>
                                    <span className="chip">
                                        Monthly Subscription
                                    </span>
                                </div>
                                <div className="card-body">
                                    <div className="top-text">
                                        <h5 className="card-title">{c.title}</h5>
                                        <p className="card-text">{c.subtitle}</p>
                                    </div>
                                    
                                    <div className="bottom-text">
                                        <NavLink to={c.link}>
                                        <span className={`card-highlight card-${i}`}>
                                            Hire Marketers starting at just <span>$299</span>
                                        </span>
                                        </NavLink>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}