import React from "react"
import {NavLink}  from "react-router-dom"
import StillHaveQuestions from "../../components/stilHaveQuestion"
import YourDedicatedTeam from "../../components/YourDedicatedTeam"
import AllAccessPassComparisonTable from "../../components/_sections/AllAccessPassComparisonTable"
import EmpowerMarketingTeam from "../../components/_sections/EmpowerMarketingTeam"
import UnlimitedScale from "../../components/_sections/UnlimitedScale"
import "./style.scss"

export default function AllAccessPass(props){
    return (
        <div className="fluid pv-30 all-access-pass">
            <section className="fluid mt-30">
                <div className="container">
                    <div className="row d-flex flex-row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9 text-center">
                            <h1 className="h1 weight-700">
                                Your <span>all access pass</span>to growth
                            </h1>
                            <p className="font-20 weight-500 family-PTsans">
                                <span>>World class creative experts - ready to jump your ship, whenever you need, instantly. </span>
                                A bettter way to hire, save and bring together cross functional teams. All in one place
                            </p>
                            <div className="fluid d-flex flex-row justify-content-center mt-30">
                                <NavLink exact to={'/watch-demo'} className="custom-button bordered flex-fill justify-content-center font-16 fluid-auto aqua">Watch Demo</NavLink>
                                <NavLink exact to={'/schedule-vip-consult'} className="custom-button featured aqua active flex-fill justify-content-center font-16 fluid-auto">Schedule A VIP consult</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fluid mt-30">
                <div className="container">
                    <div className="row d-flex flex-row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9 text-center">
                            <h2 className="h2 weight-700">
                                Breakthroughs For Every Aspect Of Your Business
                            </h2>
                            <p className="font-20 weight-500 family-Inter">
                                99x All Access is designed to transform every aspect of your business. You get access to the best experts, temas and platform in the world for managing your marketing, development and creativity. All in one place.
                            </p>
                        </div>
                        
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <img src="https://ik.imagekit.io/99x/content/notify-card_ijanCUEGY.png"></img>
                        </div>
                        <div className="col-6 mx-auto p-6">
                            <h3>Content All Access Pass</h3>
                            <p>Content All access gives you access to our best of best experts to take care of your online presence throughout. Why hire different specialists for specific job roles, when you can all of them at one place - and at single price point. </p>

                            <p className="font-20 weight-700">
                                With Digital All Access, you get:
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fluid mt-30">
                <div className="container">
                    <YourDedicatedTeam/>
                </div>
            </section>
            
            <section className="fluid mt-30">
                <div className="container">
                    <div className="banner-top text-center pv-30">
                        <h3>Save 10000$ on average hiring with SEO All Acess Pass</h3>
                        <p className="family-inter">99x All Access is designed to transform every aspect of your business. You get access to the best experts, temas and platform in the world for managing your marketing, development and creativity. All in one place.</p>
                    </div>
                    
                    <AllAccessPassComparisonTable/>
                </div>
            </section>

            <section className="fluid mt-30">
                <div className="container">
                    <EmpowerMarketingTeam/>
                </div>
            </section>
           
            <section className="fluid mt-30">
                <div className="container">
                    <UnlimitedScale/>
                </div>
            </section>  
            
            <section className="fluid mt-30">
                <div className="container">
                    <StillHaveQuestions/>
                </div>
            </section>
        </div>
    )
}