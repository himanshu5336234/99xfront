import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import Typed from "react-typed";

import './style.scss';
import SubscriptionPlans from '../../components/subscriptionPlans';
import BuildStartupSmartWay from '../../components/_sections/BuildStartupSmartWay';
import WhyWorkWithUs from '../../components/WhyWorkWithUs';
import EverythingYouNeedToGrow from '../../components/_sections/EverythingYouNeedToGrow';
import BoostYourStartup from '../../components/_sections/BoostYourStartup';
import LikeAnEcosystem from '../../components/_sections/LikeAnEcosystem';
import FeaturedWorkSlider from '../../components/_sections/FeaturedWorkSlider';
import SignupBox from '../../components/SignupBox';
import SignupBlock from '../../components/SignupBlock';
import CustomerTestinomial from '../../components/_sections/CustomerTestinomial';


class MainLayout extends React.Component{
    constructor(){
        super();
        this.state = {
            toLogin: false,
            email:""
        }
    }

    openAccord = (_event) => {
        if(_event){
            let _body = _event.currentTarget.nextElementSibling;
            if (_body.style.maxHeight && parseFloat(_body.style.maxHeight) > 0) {
                _body.style.maxHeight = '0px';
                _event.currentTarget.parentNode.classList.remove('active');
            } else {
                let acc = document.getElementsByClassName("custom-accord-body");
                for (let i = 0; i < acc.length; i++) {
                    acc[i].style.maxHeight = '0px';
                    if(acc[i].parentNode.classList.contains('active')){
                        acc[i].parentNode.classList.toggle('active');
                    }
                }
                _event.currentTarget.parentNode.classList.add('active');
                _body.style.maxHeight = _body.scrollHeight + "px";
            }
        }
    }

    claimFreeTrial = () => {
        const Email = this.state.email;
        this.setState({toLogin: true});
    }   
    setUserEmail = (email) => {
        this.setState({email:email});
    }

    render(){

        if(this.state.toLogin){
            return (
            <Redirect 
                to={`/ab/account-security/login?email=${this.state.email}`}
            />
            )
        }
    
        return (
        <>
        <div className="fluid pv-20">
            <section className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 pv-30 home-page">
                        <h1 className="color-blue">
                            Startup Studio, <span className="typed-h1"><span>On the Cloud</span></span>
                        </h1>
                        <div className="mobile-only">
                            <img src="https://ik.imagekit.io/99x/startup/pages/home/home_hero_VUunaP2v5.png"/>
                        </div>
                        {/* <Typed 
                            className="typed-h1"
                            strings={["fraction of the cost"]} 
                            typeSpeed={10}
                            backSpeed={20}
                            backDelay={1000}
                            loop 
                        /> */}

                        {/* <p className="family-inter pv-20"> 
                            No Jargons or nonsense. Just Great Work. Wether it’s a launch campaign, social media graphics or a complicated product developed, we’ve got you covered throughout. 
                        </p> */}
                      
                        <div className="fluid d-flex flex-row flex-wrap" style={{marginTop:'48px'}}>
                            <NavLink exact={true} to={'/'} className="custom-button color1">
                                <i class="fa fa-plus" aria-hidden="true"></i> Web & App Development
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color2">
                                <i class="fa fa-plus" aria-hidden="true"></i> Digital Marketing
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color3">
                                <i class="fa fa-plus" aria-hidden="true"></i> SEO
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color4">
                                <i class="fa fa-plus" aria-hidden="true"></i> Social Media
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color5">
                                <i class="fa fa-plus" aria-hidden="true"></i> Graphic Design
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color6">
                                <i class="fa fa-plus" aria-hidden="true"></i> UI/UX
                            </NavLink>
                        </div>

                        <div style={{marginTop:'48px'}}>
                            <SignupBox/>
                        </div>
                        {/* <div className="fluid pt-20 mb-30"> 
                            <div className="free-trial-form">
                                <input 
                                type="text" 
                                name="email" 
                                placeholder="Email" 
                                onKeyUp={(e)=>{
                                    this.setUserEmail(e.target.value)
                                }}
                                />
                                <button className="btn-blank" onClick={()=>{this.claimFreeTrial()}}>
                                    Claim Free Trial
                                </button>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 desktop-only">
                        <img src="https://ik.imagekit.io/99x/startup/revised/Homepage_Primary_Banner2x_hJCiDEygm.png" className="home-banner-img"/>
                    </div>
                </div>
            </section>
            <section className="mv-30">
                <div className="container client-logos">
                    <img src="https://ik.imagekit.io/99x/startup/LogoGroup_tzgyaOVeP.svg"/>
                </div>
            </section>
            <section className="mv-30">
                <div className="container">
                    <BuildStartupSmartWay/>
                </div>
            </section>
            
            {/* <section className="bg-blue-light mv-30">
                <div className="container mv-30">
                    <BuildYourStart/>
                </div>
            </section> */}

            {/* <section className="fluid pv-30">
                <WaysToGetContent/>
            </section> */}

            <section className="fluid pt-30">
                <SubscriptionPlans/>
            </section>

            <section className="bg-white pv-30">
                <BoostYourStartup/>
            </section>

            {/* <section className="bg-white pv-30">
                <AllPlansFeatures/>
            </section> */}

            <section className="bg-white pv-30">
                <WhyWorkWithUs/>
            </section>

            <section>
                <EverythingYouNeedToGrow/>
            </section>
            
           
          

            {/* <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Quality Talent. Superior Content. Top-Notch Customer Support</h2>
                            <br/>
                            <br/>
                            <ul>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-700 family-inter">Vetted Industry Specific Writers</span>
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-700 family-inter">Dedicated Account Manager</span>
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-700 family-inter">Quick Turnaround, Maximum Efficiency</span>
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-700 family-inter">Curated Expert community and talent</span>
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-700 family-inter">Unlimited Requests & Revisions</span>
                                </li>
                                <li className="mb-15">
                                    <i className="fa fa-check custom-round-check" aria-hidden="true"></i> 
                                    <span className="weight-700 family-inter">Truly End-to-End service & management</span>
                                </li>
                            </ul>

                            <NavLink exact={true} to={"/get-a-demo"} className="custom-button normal aqua">Get Demo</NavLink>

                        </div>
                        <div className="col-12 col-md-6">
                            <img src={homeBanner4} style={{maxWidth:'100%'}}/>
                        </div>
                    </div>
                </div>
            </section> */}
            
            {/* <section className="bg-primary d-flex video-player" style={{minHeight:"600px"}}>
                <div className="player-container" style={{backgroundImage:`url('${VideoThumb}')`}}>
                    <img src={VideoPlayBtn} />
                </div>
            </section> */}
            
            {/* <section>
                <SiteByNumbers/>
            </section> */}

            <section className="fluid pv-30">
                <div className="container pv-30">
                    <FeaturedWorkSlider/>
                </div>
            </section>
            
            <SignupBlock/>

            <section className="bg-white pv-30">
                <LikeAnEcosystem/>
            </section>
            
            

            
            {/* <StillHaveQuestions /> */}
        </div>
        <CustomerTestinomial/>
    </>
    );
    }
}

export default MainLayout;