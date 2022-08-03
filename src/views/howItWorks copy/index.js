import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';
import StillHaveQuestions from '../../components/stilHaveQuestion';
import ClientTestinomial from '../../components/ClientTestimonial';
import TryUsToday from '../../components/_sections/TryUsToday';
import EnterpriseSolutions from '../../components/_sections/EnterpriseSolutions';

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
                        
                            <h1 className="h1 weight-700"> Getting great work done is <span className="h1 weight-700 color-aqua">easy</span></h1>
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
                    <img src={videoImage} className="img-fluid fluid" alt="Video" title="Video"/>
                </div>
            </section>
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
            </section>
            <section className="container-fluid pv-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 pv-15">
                            <img src={howItWorks2} className="fluid"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 pv-30">
                            <h3 className="font-20 weight-700 family-PTsans">
                            Let the experts, create it for you.
                            </h3>
                            <p>
                                Work with your team directly from day 1. 
                                You dont have to go through rounds of interviews and screen tallent. 
                                We’ do it for you and bring only the best, experienced, and industry specific talents for you. 
                                Your A-team just a ping away.
                            </p>
                            <ul>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    Content experts in over 30+ skill sets
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    Dedicated Account Manager
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    From super simple to crazy complex projects
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row d-flex flex-row-reverse flex-sm-row-reverse flex-md-row flex-lg-row">
                        <div className="col-12 col-sm-12 col-md-6 pv-30">
                            <h3 className="font-20 weight-700 family-PTsans">
                                Unlimited Requests and revisions
                            </h3>
                            <p>
                            Request as many designs/posts your heart wants. Infact we Insist to make requests for content and revisions till it’s the best content ever written. We’ll keep editing until you think it’s absolutely perfect. Leave it to us, to get the job done on time for you. 
                            </p>
                            <ul>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Vetted Industry Specific Writers
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Dedicated Account Manager
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Quick Turnaround, Maximum Efficiency
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 pv-15">
                            <img src={howItWorks5} className="fluid"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 pv-15">
                            <img src="https://ik.imagekit.io/99x/startup/Turnarounds_50113uebY.svg" className="fluid"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 pv-30">
                            <h3 className="font-20 weight-700 family-PTsans">
                              Fast, Faster Quick turnarounds
                            </h3>
                            <p>
                                You want your content created in days, not weeks. Your requests will be delivered in a day or two business days — or even same-day delivery for Subscription accounts. ;) Try us, you’ll be impressed for sure.
                            </p>
                            <ul>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Vetted Industry Specific Writers
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Dedicated Account Manager
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Quick Turnaround, Maximum Efficiency
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row d-flex flex-row-reverse flex-sm-row-reverse flex-md-row flex-lg-row">
                        <div className="col-12 col-sm-12 col-md-6 pv-30">
                            <h3 className="font-20 weight-700 family-PTsans">
                            Streamlined communication and analytics
                            </h3>
                            <p>
                            99X platform offers a streamlined way to request new designs and communicate revisions for your team. 99x comes with super intuitive integrations for communication, reporting dashboards and analytics - all here, so you can focus on the strategy more.
                            </p>
                            <ul>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Vetted Industry Specific Writers
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Dedicated Account Manager
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Quick Turnaround, Maximum Efficiency
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 pv-15">
                            <img src="https://ik.imagekit.io/99x/startup/Reports___Comm_1__ZYnAUNSxY.svg" className="fluid"/>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="container-fluid pv-20">
                <div className="container">
                    <ClientTestinomial/>
                </div>
            </section>
        
      

            <EnterpriseSolutions/>

            <TryUsToday/>

            <StillHaveQuestions />
        
        </div>
        );
    }
}