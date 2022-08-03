import React from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';

const logo = require('../assets/images/logo.png');

class FooterLayout extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <footer>
                <div className="container pv-30">
                    <div className="row pv-30">
                        <div className="col-12 col-sm-12 col-md-5 col-lg-3 mb-15">
                            <img src="https://ik.imagekit.io/99x/startup/99xStartup_white_uUGDgdALbr.png" className="img-fluid mb-15" style={{width:'147px'}} />
                            <p style={{fontSize:'14px',fontWeight:'500',width:'330px'}}>
                                99x Startup is a platform designed for Startups and Agile Enterprises alike to build & grow their business with quality work & structured services.
                            </p>
                            {/* <i className="fa fa-linkedin" aria-hidden="true"></i>
                            <i className="fa fa-twitter"  aria-hidden="true"></i> */}

                            <div className="social-media">
                                <img src="https://ik.imagekit.io/99x/startup/linkedin_white_CVtihrtra.png" />
                                <img src="https://ik.imagekit.io/99x/startup/twitter_white_V96bgvSysV.png" style={{marginLeft:"15px"}}/>
                            </div>
                        </div>
                        
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-none d-lg-block">
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 col-lg-6 mb-15">
                            <div className="row">
                                
                                <div className="col-6 col-sm-6 col-md-4">
                                    <h2 className="family-inter weight-700 font-20">99X Startup</h2>
                                    <ul className="">
                                        <li>
                                            <NavLink exact to={'/pricing/on-demand'} className="weight-300">On Demand</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to={'/pricing/subscription'} className="weight-300">All-in-one subscription</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to={'/pricing/on-demand'} className="weight-300">Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to={'/'} className="weight-300">Careers</NavLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-4">
                                    <h2 className="family-inter weight-700 font-20">Resources</h2>
                                    <ul className="">
                                        <li>
                                            <NavLink exact to={'/'} className="weight-300">Blogs</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to={'/'} className="weight-300">Media</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to={'/'} className="weight-300">Gallery</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to={'/'} className="weight-300">Downloads</NavLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-4">
                                    <h2 className="family-inter weight-700 font-20">Site</h2>
                                    <ul className="">
                                        <li>
                                            <NavLink exact to={'/'} className="weight-300">Sitemap</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to={'/'} className="weight-300">Privacy policy</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to={'/'} className="weight-300">Refund Policy</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact to={'/'} className="weight-300">Terms</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 pv-15 border-top" style={{borderTop:'2px solid #111'}}>
                            <p className="margin-none family-Inter" style={{fontSize:'12px',fontWeight:'500'}}>© 2020 99x Content, All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
 export default FooterLayout;