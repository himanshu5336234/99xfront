import React from "react"
import { NavLink } from "react-router-dom"
import "./style.scss"

export default function(props){

    return (
        <div className="container creators-page">
            
            <div className="hero-container">
                <h1>Work your way.</h1>
            </div>

            <div className="hero-desc">
                <p>
                    It’s that easy.  Do what you love, and get paid for it. Find awesome clients, sell your skills and become a part of our global community of talented 
                    <span className="highlight">designers—all</span> in a safe, secure workspace.
                </p>
                <NavLink to="/ab/account-security/login#creatorSignup" className="custom-button normal aqua active">
                    Sign me up!
                </NavLink>
            </div>

            <div className="growing-creators">
                <h2>Join Our Growing Creators Community</h2>
                <div className="row">
                    <div className="col-6 col-md-3 col-sm-6">
                        <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/c_developers_TJGW0TEgz_.png"/>
                    </div>
                    <div className="col-6 col-md-3 col-sm-6">
                        <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/c_designers_Jxm8kk-xR2.png"/>
                    </div>
                    <div className="col-6 col-md-3 col-sm-6">
                        <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/c_content_writers__ZGQXR6Nnq.png"/>
                    </div>
                    <div className="col-6 col-md-3 col-sm-6">
                        <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/c_marketers_0Brz4uMXu.png"/>
                    </div>
                </div>
            </div>

          
            
            <div className="start-your-dream-job">
                <h2>Start your dream<br/>job now. It's simple.</h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                        <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/c_dream_job_OMadP57oRh.png"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="item">
                            <h3>Show it</h3>
                            <p>Show your work to the world. Build your online presence, set up services. When you share your work on 99x, your work gets seen</p>
                        </div>
                        <div className="item">
                            <h3>Do it</h3>
                            <p>Bring your A-game. Get verified. Apply to join our global community of talent today</p>
                        </div>
                        <div className="item">
                            <h3>Work it</h3>
                            <p>Throw yourself into the ring. Set up your shop or work with us and offer your work to our global audience or get matched 1-to-1 with quality clients that fit your skill set.</p>
                        </div>
                        <div className="item">
                            <h3>Earn it</h3>
                            <p>Get paid on time, every time. Payment is transferred to you upon order completion.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="creators-global-customer">
                <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/c_globe_HW-R1AfgC.png"/>
            </div>

        </div>
    )
}