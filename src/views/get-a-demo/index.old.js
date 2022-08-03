import React from "react"
import GreatCompany from "../../components/greatCompany"
import JumbleBlock from "../../components/jumbleBlock";
import StillHaveQuestions from "../../components/stilHaveQuestion"

import "./style.scss";
const PlayButton = require("../../assets/images/play-button.png")
const VideoBg = require("../../assets/images/VideoBackground.png")

export default function GetADemo(props){
    return (
        <div className="get-a-demo">
            <section>
                <div className="container m-30">
                    <div className="row" style={{minHeight:"350px"}}>
                        <div className="col-xs-12 col-md-6 h-100 justify-content-center align-self-center family-Inter" style={{padding:'50px'}}> 
                            <h2 className="weight-500">
                                Scale your business 
                            </h2>
                            <p>
                                Ready to kickstart your scaling with us? Learn more about how we help you save you time and money on your marketing and developmenet spends. Talk to us today!
                            </p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="video-bg d-flex justify-content-center align-content-center" style={{backgroundImage:`url('${VideoBg}')`}}>
                                <img src={PlayButton} style={{maxHeight:"80px", alignSelf:"center"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <div className="container-fluid text-center pv-30">
                
                <h2>You'll be in great company!</h2>
                <p className="lead"></p>
                
            </div> */}

            {/* <div className="container">
                <section className="demo-showcase">
                    <div className="div1">
                        <div>
                            <h3>Don’t just take our word for it, see for yourself what our clients think about us.</h3>
                            <p>Our customers have expertise across thousands of industries. But, they all have one thing in common. 99x Content. We have helped countless customers grow and scale their business.</p>
                        </div>
                    </div>
                    <div className="div2">
                        <img src="#" />
                        <p>"With 99x Content, we have seen 30% revenue growth quarter over quarter and now we’re rolling it out across the entire customer lifecycle."</p>
                    </div>
                    <div className="div3">
                        <div className="img-holder">

                        </div>
                        <div className="content">
                            “With 99x Content, we have seen 30% revenue growth quarter over quarter and now we’re rolling it out across the entire customer lifecycle.”
                        </div>
                    </div>
                    <div className="div4">
                        <div className="rating">4.8/5</div>
                        <p>That’s our average customer rating from 23,416  reviews. Happy creators = happy customers.</p>
                    </div>
                    <div className="div5">
                        <div className="p-count">25K+</div>
                        <p className="text-center">Articles published</p>
                    </div>
                    <div className="div6">
                        <div className="row">
                            <div className="col-5">
                                <h3>Infosys rolls the dice with Social Media, enagagement soars up by 54% </h3>
                                <p>“With 99x Content, we have seen 30% revenue growth quarter over quarter and now we’re rolling it out across the entire customer lifecycle.”</p>
                            </div>
                            <div className="col-7"></div>
                        </div>
                    </div>
                </section>
            </div> */}

            <GreatCompany
                title="You'll be in great company"
                subtitle="30,000+ companies use 99x Content for growth"
            />
            <JumbleBlock/>     

            <div className="container">
                <StillHaveQuestions/>
            </div>
        </div>
    )
}