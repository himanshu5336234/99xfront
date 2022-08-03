import React from 'react';

import './style.scss';
import StillHaveQuestions from '../../../components/stilHaveQuestion';
import TryUsToday from '../../../components/_sections/TryUsToday';
import HowItWorks from '../../../components/_sections/HowItWorks';
import WhyWorkWithUs from '../../../components/WhyWorkWithUs';
import FeaturedWorkSlider from '../../../components/_sections/FeaturedWorkSlider';
import CustomerTestinomial from '../../../components/_sections/CustomerTestinomial';
import SubscriptionPlans from '../../../components/NewSubscriptionPlans';
import SubscriptionData from "../../../data/sites/design/subscriptions"

export default class MainLayout extends React.Component{

    render(){
        return (<div className="fluid how-it-works-page">

            <section style={{background:"#391763", top:"-30px"}} className="hero-banner">
                <section className="fluid pv-30">
                    <div className="container">
                        <div className="row d-flex flex-row justify-content-center">
                            <div className="col-12 col-sm-12 col-md-8 col-lg-9 text-center">
                            
                                <h1 className="h1 weight-700"> Getting great design is now easy</h1>
                                <p className="font-20 weight-500 family-PTsans">
                                    <span className="font-20 weight-600">
                                    Because we make sure, every piece of work done is nothing less than exceptional. Collaborate instantly, create work that matters fast, and achieve more in just a few clicks. 
                                    </span> 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="fluid">
                    <div className="container">
                    <img src="https://ik.imagekit.io/99x/design/_new/Mask_Group_drUYNOfnQ.png" style={{maxWidth:"100%"}}/>
                    </div>
                </section>
            </section>

            <HowItWorks site="social"/>

            <section className="fluid pt-30">
                <SubscriptionPlans
                    title={<>Smart <span style={{fontSize:'48px', color:'var(--color-primary)', textDecoration:'underline'}}>Design</span> Subscriptions</>}
                    subtitle={<>Whatever you need, we’ve got the right plan for everything your business needs.</>}
                    data={SubscriptionData}
                />
            </section>
            
            <section className="bg-white pv-30">
                <WhyWorkWithUs/>
            </section>        

            <StillHaveQuestions site="design" />

            <CustomerTestinomial light/>
        
        </div>
        );
    }
}