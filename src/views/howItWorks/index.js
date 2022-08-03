import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';
import StillHaveQuestions from '../../components/stilHaveQuestion';
import ClientTestinomial from '../../components/ClientTestimonial';
import TryUsToday from '../../components/_sections/TryUsToday';
import EnterpriseSolutions from '../../components/_sections/EnterpriseSolutions';
import HowItWorks from '../../components/_sections/HowItWorks';
import WhyWorkWithUs from '../../components/WhyWorkWithUs';
import FeaturedWorkSlider from '../../components/_sections/FeaturedWorkSlider';
import CustomerTestinomial from '../../components/_sections/CustomerTestinomial';

const videoImage = require('../../assets/images/main/Frame 54.png');
const howItWorks2 = require('../../assets/images/main/Verified Experts.png');
const howItWorks3 = require('../../assets/images/main/how-it-works-3.png');
const howItWorks4 = require('../../assets/images/main/how-it-works-4.png');
const howItWorks5 = require('../../assets/images/main/how-it-works-5.png');
const frame57 = require('../../assets/images/main/Frame 57.png');
const vector = require('../../assets/images/main/Vector.png');
const enterpise = require('../../assets/images/main/Enterpise.png');

export default class MainLayout extends React.Component{
    constructor(){
        super();
    }

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
                   <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/Image_i6gIWij1F_.png"/>
                </div>
            </section>

            <HowItWorks/>
{/* 
            <section className="fluid pv-20 mt-30">
                <div className="container">
                    <div className="fluid text-center">
                        <h2 className="font-44 weight-700">Create content that <span className="font-44 weight-700 color-aqua">matters</span></h2>
                        <p className="font-20 weight-500 family-PTsans">
                            We don't build content, We create content, that connects businesses to their audiences, with a holistic, yet simple approach to content creation. Experts + Creativity + Collaboration = Unprecedented Value.
                        </p>
                    </div>
                    <div className="">
                    </div>
                </div>
            </section> */}
            
            <section className="bg-white pv-30">
                <WhyWorkWithUs/>
            </section>

            
            <section className="fluid pv-30">
                <div className="container pv-30">
                    <FeaturedWorkSlider/>
                </div>
            </section>
        
      
            <TryUsToday/>

            <StillHaveQuestions />

            <CustomerTestinomial light/>
        
        </div>
        );
    }
}