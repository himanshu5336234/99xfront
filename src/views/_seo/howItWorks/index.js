import React from 'react';

import './style.scss';
import StillHaveQuestions from '../../../components/stilHaveQuestion';
import TryUsToday from '../../../components/_sections/TryUsToday';
import HowItWorks from '../../../components/_sections/HowItWorks';
import WhyWorkWithUs from '../../../components/WhyWorkWithUs';
import FeaturedWorkSlider from '../../../components/_sections/FeaturedWorkSlider';
import CustomerTestinomial from '../../../components/_sections/CustomerTestinomial';

export default class MainLayout extends React.Component{

    render(){
        return (<div className="fluid pv-30">
            <section className="fluid pv-30">
                <div className="container">
                    <div className="row d-flex flex-row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9 text-center">
                        
                            <h1 className="h1 weight-700"> Getting great work done is easy</h1>
                            <p className="font-20 weight-500 family-PTsans">
                                <span className="font-20 weight-700">
                                    Because, We make sure every piece of work done is nothing less than great.
                                </span> 
                                Build authentic content fast, communicate better, collaborate instantly and gloablly in just a few clicks. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fluid">
                <div className="container">
                   <img src="https://ik.imagekit.io/99x/seo/Image_2__pXM5ox9vs.png" style={{maxWidth:"100%"}}/>
                </div>
            </section>

            <HowItWorks site="seo"/>
            
            <section className="bg-white pv-30">
                <WhyWorkWithUs/>
            </section>        
      
            <TryUsToday/>

            <StillHaveQuestions site="seo" />

            <CustomerTestinomial light/>
        
        </div>
        );
    }
}