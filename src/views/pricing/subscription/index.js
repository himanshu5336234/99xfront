import React from "react"
import { Helmet } from "react-helmet"
import AllPlansFeatures from "../../../components/allPlansFeatures"
import ClientTestinomial from "../../../components/ClientTestimonial"
import StillHaveQuestions from "../../../components/stilHaveQuestion"
import SubscriptionPlans from "../../../components/subscriptionPlans"
import CampaignDriveResults from "../../../components/_sections/CampaignDriveResults"
import FeaturedWork from "../../../components/_sections/FeaturedWork"
import TryUsToday from "../../../components/_sections/TryUsToday"

import "./style.scss"

const PricingHeroImage = require('../../../assets/images/pricing-hero.svg')


export default function Plans(props){
    return (
        <>
            <Helmet>
                <title>Subscription Plans - 99x Startups</title>
            </Helmet>
            
            <div className="subscription-price-page">
                <div className="fluid pv-30">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 hero-img-container">
                                <img src="https://ik.imagekit.io/99x/startup/Frame_54_z7BTgAu0vG.svg"/>
                            </div>

                            <div className="col-12 col-sm-12 col-md-6 hero-text">
                                <h1>
                                    Digital Marketing 
                                    <br/> 
                                    <span>
                                        on autopilot
                                    </span>
                                </h1>
                                <h2>
                                    Your digtial marketing agency, in the cloud. 
                                </h2>
                                <p>
                                99x Startup combines the creative, strategy and experienced diversity of our talented global community, experienced in-house strategists, project managers and a super intuitive robust platform to deliver innovative digital marketing solutions.
                                </p>
                            </div>
                           
                        </div>
                    </div>

                </div>
                <section>
                    <div className="container mv-30 pv-30">
                        <CampaignDriveResults/>
                    </div>
                </section>
                <section>
                    <SubscriptionPlans/>
                </section>
                

                <section className="container-fluid pv-20">
                    <div className="container">
                        <ClientTestinomial/>
                    </div>
                </section>

                <TryUsToday/>
                
                <div className="container">
                    <FeaturedWork/>
                </div>
                

            

                <section>
                    <StillHaveQuestions/>
                </section>

            </div>

        </>
    )
}
