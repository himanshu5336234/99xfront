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

import OnDemandData from "../../data/onetime_plans"
import SubscriptionData from "../../data/sites/social/subscriptions"

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
                    <div className="col-12 col-sm-12 col-md-6 pv-30 home-page">
                        <h1 className="color-blue">
                            <span style={{color:'#2f2f2f',fontSize:'3.5rem', }}>Grow your</span> Social Media
                            <span style={{color:'#2f2f2f',fontSize:'3.5rem', }}> Presence with ease.</span>
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
                                <i class="fa fa-plus" aria-hidden="true"></i> Facebook
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color2">
                                <i class="fa fa-plus" aria-hidden="true"></i> Social Media Management
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color3">
                                <i class="fa fa-plus" aria-hidden="true"></i> Instagram
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color4">
                                <i class="fa fa-plus" aria-hidden="true"></i> Social Media Marketing
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color5">
                                <i class="fa fa-plus" aria-hidden="true"></i> Linkedin
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
                        <img src="https://ik.imagekit.io/99x/social/Mask_Group_tf3EYNqfh.png" className="home-banner-img"/>
                    </div>
                </div>
            </section>
            <section className="mv-30">
                <div className="container client-logos">
                    <img src="https://ik.imagekit.io/99x/seo/LogoGroup_xD_Wljz8G.png"/>
                </div>
            </section>
            <section className="mv-30">
                <div className="container">
                    <FeaturedOnDemandServices
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
                    site="social"
                    title={<>Boost your <span>social media presence</span></>}
                    subtitle={<>We’ll help you engage your users with social media marketing and management services to keep your business moving in the right direction.</>}
                />
            </section>

            <section className="fluid pt-30">
                <SubscriptionPlans
                    title={<>Smart <span style={{fontSize:'48px', color:'var(--color-primary)', textDecoration:'underline'}}>Social Media Subscriptions</span></>}
                    subtitle={<>Whatever you need, we’ve got the right plan for everything your business needs.</>}
                    data={SubscriptionData}
                />
            </section>

            <section className="container pt-30">
                <AlternateImageHighlight
                    items={[
                        {
                            banner:'https://ik.imagekit.io/99x/social/Group_1652_VPOALiuf-3.png',
                            content:<>
                                <h3>Reach people across channels</h3>
                                <p>Get Professional & Elegant Creatives for your Social Media Channels. Want us to manage your pages? We got that covered too</p>
                                <ul>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Facebook, Instagram, Twitter & More</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Social Media Calendar</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Posting & Scheduling</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Social Analytics</span>
                                    </li>
                                </ul>
                            </>
                        },
                        {
                            banner:'https://ik.imagekit.io/99x/social/Group_1653_BV1BK3mYU1.png',
                            content:<>
                                <h3>Creatives and copy that sells</h3>
                                <p>Tailor-made Creatives & Content for your Brand. Be it a Saas Product or a D2C Brand, we ensure it is Custom Made for YOU.</p>
                                <ul>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Industry Specific Expertise</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Skilled Graphic Designers & Copywriters</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Interactive Gifs, Videos & More</span>
                                    </li>
                                </ul>
                            </>
                        },
                        {
                            banner:'https://ik.imagekit.io/99x/social/Group_1658_1FIFa7S5E.png',
                            content:<>
                                <h3>Art meets Science</h3>
                                <p>Stay on top of your game with comprehensive social management. Measure what’s working with our detailed analytics and reports. Gain visibility, track metrics that matter most, so you can make informed decisions on the fly.</p>
                                <ul>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Sophisticated Campaign Management</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Comprehensive Analytics & Insights</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Holistic assessment of your Brand’s Metrics</span>
                                    </li>
                                </ul>
                            </>
                        },
                    ]}
                />
            </section>
            {/* <section className="bg-white pv-30">
                <AllPlansFeatures/>
            </section> */}

            <section className="bg-white pv-30">
                <WhyWorkWithUs/>
            </section>
            
            <SignupBlock
            theme="light"
            />

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