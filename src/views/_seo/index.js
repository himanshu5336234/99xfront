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
import SubscriptionData from "../../data/sites/seo/subscription_plans"

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
                            <span style={{color:'#2f2f2f',fontSize:'3.5rem', display:'block'}}>World's Only</span>
                            <span style={{fontSize:"3.5rem", textDecoration:"underline"}}>Integrated SEO Marketplace</span>
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

                        {/* <p>
                            Drive more foot traffic to your store
                        </p>
                        
                        <p className="family-inter pv-20"> 
                            All you need to increase your local visibility and scale your local SEO & content marketing efforts, drive more people to your stores and boost business prominence - All for one price.
                        </p> */}
                      
                        <div className="fluid d-flex flex-row flex-wrap" style={{marginTop:'48px'}}>
                            <NavLink exact={true} to={'/'} className="custom-button color1">
                                <i class="fa fa-plus" aria-hidden="true"></i> On-page SEO
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color2">
                                <i class="fa fa-plus" aria-hidden="true"></i> Google My Business
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color3">
                                <i class="fa fa-plus" aria-hidden="true"></i> Technical SEO
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color4">
                                <i class="fa fa-plus" aria-hidden="true"></i> Link Building
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color5">
                                <i class="fa fa-plus" aria-hidden="true"></i> App Store Optimization
                            </NavLink>
                            <NavLink exact={true} to={'/'} className="custom-button color6">
                                <i class="fa fa-plus" aria-hidden="true"></i> Articles & Blogs
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
                        <img src="https://ik.imagekit.io/99x/seo/Desktop_mLrKMaJ2F.png" className="home-banner-img"/>
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
                    site="seo"
                    title={<>Boost your search optimization efforts.</>}
                    subtitle={<>Spend more time growing your business. We’ll help you reach your people, where they are with comprehensive SEO services and exceptional people to keep your site moving in the right direction.</>}
                />
            </section>

            <section className="fluid pt-30">
                <SubscriptionPlans
                    title={<>Smart SEO Management Subscriptions</>}
                    subtitle={<>Whatever you need, we’ve got the right plan for everything your business needs.</>}
                    data={SubscriptionData}
                />
            </section>

            <section className="container pt-30">
                <img style={{maxWidth:"100%"}} src="https://ik.imagekit.io/99x/seo/Group_1877_iMAVNAnvp.png"/>
            </section>

            <section className="container pt-30">
                <AlternateImageHighlight
                    items={[
                        {
                            banner:'https://ik.imagekit.io/99x/seo/Mask_Group_xODh9fdwq.png',
                            content:<>
                                <h3>Befriend the search algorithms</h3>
                                <p>Whether you’re a startup or a business, we’ve got everything you need to create and scale your search marketing efforts with ease.  Just tell us what you need and we will plan, create and schedule.</p>
                                <ul>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Holistic White hat Technical SEO</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Verfied Link Building from DA 20+ Sites</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Hyperlocal Presence & Google My Business</span>
                                    </li>
                                </ul>
                            </>
                        },
                        {
                            banner:'https://ik.imagekit.io/99x/seo/Group_1789_UtIT3RB__8.png',
                            content:<>
                                <h3>Research and Content that drives results</h3>
                                <p>Whether you’re reaching new customers or showcasing your products, and services. We will make make sure your business look good, connects meaningfully with amazing content and thorough research that reaches your people where they are. </p>
                                <ul>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Expert Content Writers & Designers</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Indsutry Specific Conent</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Short form, Long form, Rich Media Content</span>
                                    </li>
                                </ul>
                            </>
                        },
                        {
                            banner:'https://ik.imagekit.io/99x/seo/Group_1658__Myuug682.png',
                            content:<>
                                <h3>Get Facts, Not Fiction</h3>
                                <p>Stay on top of your game, with comprehensive SEO. Measure what’s working with our detailed analytics and reports. Gain visibility, track metrics that matter most, so you can makeinformed decisions on the fly. Optimize and move forward faster. </p>
                                <ul>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Reports & Analytics</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>Smart Recommendations</span>
                                    </li>
                                    <li>
                                        <span><i class="fa fa-check custom-check" aria-hidden="true"></i></span>
                                        <span>SEO tools & integrations</span>
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