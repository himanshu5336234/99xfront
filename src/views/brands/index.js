import React from "react"
import "./style.scss"

import { NavLink } from "react-router-dom"

export default function(props){
    return (
        <div className=" brands-page">
        <div className="container">

            <div className="row banner-hero">
                <div className="col-md-6 col-12 col-sm-12">
                    <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/brand_hero_TF46R-T3Uo.png"/>
                </div>
                <div className="col-md-6 col-12 col-sm-12 hero-text-container">
                    <div className="hero-text">
                        <h2>Now anyone can scale it online!</h2>
                        <p>99xapps brings all the expertise your tools and all the people you need to grow your business — all in one place. </p>
                        
                        <NavLink to="/ab/account-security/login" className="custom-button normal aqua active">
                            Get Started
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="your-business">
                <h2>Your business deserves the best</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                        <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/b_best_Ee75OfF_3D.png"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 item-container">
                        <div className="item">
                            <h3>Engage with</h3>
                            <p>Get your business online, and scale with exceptional work from exception talent across myriad of services - from content to advertising. We’ve got it all</p>
                        </div>
                        <div className="item">
                            <h3>Tell us why</h3>
                            <p>We offer flexible and amazing ways to work with our community of professionals - On-Demand, subscriptions and more. </p>
                        </div>
                        <div className="item">
                            <h3>Bring everyone in</h3>
                            <p>Bring your team’s goals, plans, tasks, files, and more together in one shared space. Collaborate with your team, manage projects, and share freelancers - all in one workspace.</p>
                        </div>
                        <div className="item">
                            <h3>Scale it up</h3>
                            <p>Our reports make it easy to monitor performance, growth, and more, so you can make smart decisions about how to spend your marketing or development budgets.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

            <div className="brands-how-it-works">

                <div className="container">

                    <h2>How it works?</h2>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 text-container">
                            <h3>A Professional Team at your fingertips</h3>
                            <p>Quickly sign up for the services you need. We take care of the quality & the delivery of the work. Sitback relax and get the best talents and services with ease.</p>
                            <NavLink to="/">
                                Get Started
                            </NavLink>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <img src="https://ik.imagekit.io/99x/startup/components/boost_your_startup/Group_1114_rrDBVZspY.png"/>
                        </div>


                        <div className="col-12 col-sm-12 col-md-6">
                            <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/b_reports_yvrT_v-LFC.png"/>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 text-container">
                            <h3>Manage, communicate, analyse - all in a single tab.</h3>
                            <p>Bring your team’s goals, plans, tasks, files, and more together in one shared space. Collaborate with your team, manage projects, and collaborate - all in one workspace.</p>

                        </div>


                    
                        <div className="col-12 col-sm-12 col-md-6 text-container">
                            <h3>Guaranteed Satisfaction</h3>
                            <p>We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions.</p>

                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <img src="https://ik.imagekit.io/99x/startup/components/boost_your_startup/Customer_Support_LVHFuUT0GH.png"/>
                        </div>

                    
                    </div>
                </div>

            </div>


            <div className="customer-meteric container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 left">
                        <h3>1,000+</h3>
                        <p>Paid customer accounts</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 right">
                        <h3>4,000+</h3>
                        <p>Creators globally</p>
                    </div>
                </div>
            </div>
            

            <div className="global-customer container">
                <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/b_globe_6vgff26Hu.png"/>
            </div>
            

        </div>
    )
}