import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';


import './style.scss';
import SubscriptionPlans from '../../components/NewSubscriptionPlans';
import WhyWorkWithUs from '../../components/WhyWorkWithUs';
import BoostYourStartup from '../../components/_sections/BoostYourStartup';
import LikeAnEcosystem from '../../components/_sections/LikeAnEcosystem';
import SignupBox from '../../components/SignupBox';
import SignupBlock from '../../components/SignupBlock';
import CustomerTestinomial from '../../components/_sections/CustomerTestinomial';
import FeaturedOnDemandServices from 'components/_sections/FeaturedOnDemandServices';

import OnDemandData from "../../data/sites/design/onetime_plans"
import SubscriptionData from "../../data/sites/design/subscriptions"
import FeaturedWorkSlider from '../../components/_sections/FeaturedWorkSlider';

const AlternateImageHighlight = (props) => {
    return (
        <>
            {props.items.map((item, index)=>(
                <div className="row alternate-image-highlight">
                    {index%2 == 0 &&
                        <>
                            <div className={`col-12 col-sm-12 col-md-6 pv-30 content`}>
                                {item.content}
                            </div>
                            <div className={`col-12 col-sm-12 col-md-6 pv-15`}>
                                <img src={item.banner} className="fluid"/>
                            </div>
                        </>
                    }
                    {index%2 != 0 &&
                        <>
                            <div className={`col-12 col-sm-12 col-md-6 pv-15`}>
                                <img src={item.banner} className="fluid"/>
                            </div>
                            <div className={`col-12 col-sm-12 col-md-6 pv-30 content`}>
                                {item.content}
                            </div>
                        </>
                    }
                </div>
            ))}
        </>
    )
}

class MainLayout extends React.Component{
    constructor(){
        super()
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
                    <div className="">
                        <h1 className="color-blue">
                            <span style={{color:'#2f2f2f',fontSize:'3.5rem', }}>Elevate your</span> <br/>
                            <span style={{color:'#2f2f2f',fontSize:'3.5rem', }}>business with</span> 
                            <span style={{color:'#6931C4',fontSize:'3.5rem', textDecoration:'underline' }}> Elegant Designs.</span>
                        </h1>
                        <div className="mobile-only">
                            <img src="https://ik.imagekit.io/99x/social/Mask_Group_tf3EYNqfh.png"/>
                        </div>
                        {/* <Typed 
                            className="typed-h1"
                            strings={["fraction of the cost"]} 
                            typeSpeed={10}
                            backSpeed={20}
                            backDelay={1000}
                            loop 
                        /> */}

                        {/* <p>
                            Drive more foot traffic to your store
                        </p>
                        
                        <p className="family-inter pv-20"> 
                            All you need to increase your local visibility and scale your local SEO & content marketing efforts, drive more people to your stores and boost business prominence - All for one price.
                        </p> */}
                      
                        <div className="fluid d-flex flex-row flex-wrap" style={{marginTop:'48px'}}>
                            <NavLink exact={true} to={'/'} className="custom-button color1">
                                <i class="fa fa-plus" aria-hidden="true"></i> Logo & Branding
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color2">
                                <i class="fa fa-plus" aria-hidden="true"></i> UX/UI Design
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color3">
                                <i class="fa fa-plus" aria-hidden="true"></i> Digital & Social Media Ads
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color4">
                                <i class="fa fa-plus" aria-hidden="true"></i> Illustrations
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color5">
                                <i class="fa fa-plus" aria-hidden="true"></i> Web Design
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color5">
                                <i class="fa fa-plus" aria-hidden="true"></i> Print & Packaging Design
                            </NavLink>
                            {/* <NavLink exact={true} to={'/'} className="custom-button color6">
                                <i class="fa fa-plus" aria-hidden="true"></i> Articles & Blogs
                            </NavLink> */}
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
                        <img src="https://ik.imagekit.io/99x/design/_new/Banner_cHnJW2_mv.png?updatedAt=1627401520343" className="home-banner-img"/>
                    </div>
                </div>
            </section>
            <section className="mv-30">
                <div className="container client-logos">
                    <img src="https://ik.imagekit.io/99x/design/_new/LogoGroup_-VxN-Efxu.png"/>
                </div>
            </section>
            <section className="mv-30">
                <div className="container">
                    <FeaturedOnDemandServices
                        site="design"
                        services={OnDemandData}
                    />
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

            <section className="bg-white pv-30">
                <BoostYourStartup
                    site="design"
                    title={<>Add <span>color</span> to your <br/>online presence.</>}
                    subtitle={<>Spend more time growing your business. We’ll help you express your ideas to your audience with stunning designs and exceptional designers and show off your business faster, better, your way.</>}
                />
            </section>

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
            
            <SignupBlock
                theme="light"
                site="design"
            />

            <section className="bg-white pv-30">
                <LikeAnEcosystem/>
            </section>
            
            

            
            {/* <StillHaveQuestions /> */}
        </div>


        <section className="fluid pv-30" style={{background:'#F8F8F8'}}>
                    <FeaturedWorkSlider site="design"/>
        </section>

        <CustomerTestinomial
            themeColor='#391763'
        />
    </>
    );
    }
}

export default MainLayout;