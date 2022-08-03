import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import './style.scss';
import StillHaveQuestions from '../../../components/stilHaveQuestion';

const banner1 = require('../../../assets/images/main/Frame 160.png');
const servicesIcon = require('../../../assets/images/main/Frame 2.png');
const servicesIcon1 = require('../../../assets/images/main/service-icon-1.png');
const servicesIcon2 = require('../../../assets/images/main/service-icon-2.png');
const productVideoImg = require('../../../assets/images/main/Product Video.png');
const enterpise = require('../../../assets/images/main/Enterpise.png');
const organization = require('../../../assets/images/main/650Organizations.png');

class Category extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //
    }

    componentDidUpdate(){
        //
    }

    render(){
        console.log(this.props.catList);
        return (<div className="fluid ph-15">
            <section className="fluid pv-30">
                <div className="fluid d-flex flex-wrap flex-row pt-30">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-5 border-right">
                        <div className="row justify-content-end">
                            <div className="col-12 col-sm-10 col-md-9 col-lg-10 ph-30 d-flex flex-column align-items-end pt-20">
                                <div className="fluid mt-30">
                                    <h1 className="font-48 weight-700">
                                        All your Content 
                                        <br/>needs <span className="font-48 weight-700 color-aqua">On-Demand</span></h1>
                                        <p className="font-20 weight-500 family-PTsans">
                                            {/* <span className="font-20 weight-700">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </span> */}
                                            Needs changes as business grow? We'll help you market smarter and better day
                                        </p>    
                                    <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-link aqua family-PTsans weight-700 justify-content-start ph-none">
                                        Looking for All-one-subscriptions?
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-8 col-lg-7 d-flex flex-row align-items-center pv-30">
                        <div className="fluid category-card-wrapper type-2">
                            <NavLink exact={true} to={'/services/linkedin-profile-Zfcdnye1'} className="fluid category-card pt-20 ph-20 text-center relative">
                                <img src={banner1} className="fluid"/>
                                <div className="fluid text-left overlay">
                                    <p className="font-28 weight-700 family-PTsans color-white">Quality content creation is expensive and time consuming</p>
                                    <p className="text-justify color-white">
                                        Articles & Blogs
                                        <i className="icons icon-arrow-right font-12 ph-15"></i>
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink exact={true} to={'/services/linkedin-profile-Zfcdnye1'} className="fluid category-card pt-20 ph-20 text-center relative">
                                <img src={banner1} className="fluid"/>
                                <div className="fluid text-left overlay">
                                    <p className="font-28 weight-700 family-PTsans color-white">Quality content creation is expensive and time consuming</p>
                                    <p className="text-justify color-white">
                                        Articles & Blogs
                                        <i className="icons icon-arrow-right font-12 ph-15"></i>
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink exact={true} to={'/services/linkedin-profile-Zfcdnye1'} className="fluid category-card pt-20 ph-20 text-center relative">
                                <img src={banner1} className="fluid"/>
                                <div className="fluid text-left overlay">
                                    <p className="font-28 weight-700 family-PTsans color-white">Quality content creation is expensive and time consuming</p>
                                    <p className="text-justify color-white">
                                        Articles & Blogs
                                        <i className="icons icon-arrow-right font-12 ph-15"></i>
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fluid pv-30">
                <div className="fluid d-flex flex-row flex-wrap justify-content-end">
                    <div className="col-12 col-sm-10 col-md-10 col-lg-11 pr-none">
                        <h2 className="font-28 weight-700">What can we help you create today?</h2>
                        <div className="fluid service-search-nav">
                            <div className="d-flex">
                                <button onClick={() => {}} className="search-icon">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="fluid">
                                <div className="fluid service-nav">
                                    <button onClick={() => {}} className="custom-button aqua active">
                                        All Services
                                    </button>
                                    <button onClick={() => {}} className="custom-button aqua">
                                        Articles & Blogs
                                    </button>
                                    <button onClick={() => {}} className="custom-button aqua">
                                        Case Studies
                                    </button>
                                    <button onClick={() => {}} className="custom-button aqua">
                                        Social Media Copies
                                    </button>
                                    <button onClick={() => {}} className="custom-button aqua">
                                        Media Content
                                    </button>
                                    <button onClick={() => {}} className="custom-button aqua">
                                        All Services
                                    </button>
                                    <button onClick={() => {}} className="custom-button aqua">
                                        Articles & Blogs
                                    </button>
                                    <button onClick={() => {}} className="custom-button aqua">
                                        Case Studies
                                    </button>
                                    <button onClick={() => {}} className="custom-button aqua">
                                        Social Media Copies
                                    </button>
                                    <button onClick={() => {}} className="custom-button aqua">
                                        Media Content
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-30">
                        <div className="row">
                            <div className="fluid d-flex flex-row flex-wrap">
                                <div className="service-list-wrapper">
                                    <div className="service-list-item text-center">
                                        <img src={servicesIcon1} className="mt-10 mb-30"/>
                                        <div className="fluid text-left">
                                            <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                            <p className="font-16 weight-700 family-arial margin-none">From US $239</p>
                                            <p>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <span className="font-12 ph-15">(97 Reviews)</span>
                                            </p>
                                            <p className="font-12 family-arial">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                        </div>
                                    </div>
                                    <div className="service-list-item text-center">
                                        <img src={servicesIcon1} className="mt-10 mb-30"/>
                                        <div className="fluid text-left">
                                            <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                            <p className="font-16 weight-700 family-PTsans margin-none">From US $239</p>
                                            <p>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <span className="font-12 ph-15">(97 Reviews)</span>
                                            </p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                        </div>
                                    </div>
                                    <div className="service-list-item text-center">
                                        <img src={servicesIcon1} className="mt-10 mb-30"/>
                                        <div className="fluid text-left">
                                            <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                            <p className="font-16 weight-700 family-PTsans margin-none">From US $239</p>
                                            <p>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <span className="font-12 ph-15">(97 Reviews)</span>
                                            </p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="float-right">
                                    <img src={productVideoImg} className="fluid product-video-img"/>
                                </div>
                                <div className="fluid">
                                    <div className="service-list-wrapper">
                                        <div className="service-list-item text-center">
                                            <img src={servicesIcon1} className="mt-10 mb-30"/>
                                            <div className="fluid text-left">
                                                <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                                <p className="font-16 weight-700 family-PTsans margin-none">From US $239</p>
                                                <p>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <span className="font-12 ph-15">(97 Reviews)</span>
                                                </p>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                            </div>
                                        </div>
                                        <div className="service-list-item text-center">
                                            <img src={servicesIcon1} className="mt-10 mb-30"/>
                                            <div className="fluid text-left">
                                                <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                                <p className="font-16 weight-700 family-PTsans margin-none">From US $239</p>
                                                <p>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <span className="font-12 ph-15">(97 Reviews)</span>
                                                </p>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                            </div>
                                        </div>
                                        <div className="service-list-item text-center">
                                            <img src={servicesIcon1} className="mt-10 mb-30"/>
                                            <div className="fluid text-left">
                                                <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                                <p className="font-16 weight-700 family-PTsans margin-none">From US $239</p>
                                                <p>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <span className="font-12 ph-15">(97 Reviews)</span>
                                                </p>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                            </div>
                                        </div>
                                        <div className="service-list-item text-center">
                                            <img src={servicesIcon1} className="mt-10 mb-30"/>
                                            <div className="fluid text-left">
                                                <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                                <p className="font-16 weight-700 family-PTsans margin-none">From US $239</p>
                                                <p>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <span className="font-12 ph-15">(97 Reviews)</span>
                                                </p>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                            </div>
                                        </div>
                                        <div className="service-list-item text-center">
                                            <img src={servicesIcon1} className="mt-10 mb-30"/>
                                            <div className="fluid text-left">
                                                <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                                <p className="font-16 weight-700 family-PTsans margin-none">From US $239</p>
                                                <p>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <span className="font-12 ph-15">(97 Reviews)</span>
                                                </p>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                            </div>
                                        </div>
                                        <div className="service-list-item text-center">
                                            <img src={servicesIcon1} className="mt-10 mb-30"/>
                                            <div className="fluid text-left">
                                                <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                                <p className="font-16 weight-700 family-PTsans margin-none">From US $239</p>
                                                <p>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <span className="font-12 ph-15">(97 Reviews)</span>
                                                </p>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                            </div>
                                        </div>
                                        <div className="service-list-item text-center">
                                            <img src={servicesIcon1} className="mt-10 mb-30"/>
                                            <div className="fluid text-left">
                                                <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                                <p className="font-16 weight-700 family-PTsans margin-none">From US $239</p>
                                                <p>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <span className="font-12 ph-15">(97 Reviews)</span>
                                                </p>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                            </div>
                                        </div>
                                        <div className="service-list-item text-center">
                                            <img src={servicesIcon1} className="mt-10 mb-30"/>
                                            <div className="fluid text-left">
                                                <p className="font-20 family-PTsans margin-none">Articles & Blogs</p>
                                                <p className="font-16 weight-700 family-PTsans margin-none">From US $239</p>
                                                <p>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                    <span className="font-12 ph-15">(97 Reviews)</span>
                                                </p>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Continue</NavLink>
                                            </div>
                                        </div>
                                        <NavLink exact to={'/'} className="service-list-item text-center last-card bg-red d-flex flex-column justify-content-center">
                                            <p className="color-white family-PTsans font-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <p className="color-white family-PTsans weight-700 font-14">Psst: We have Subscription plans to <i className="icons icon-arrow-right font-12 ph-15"></i></p>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fluid mt-30">
                <div className="container">
                    <div className="row">
                        <div className="fluid shadow-card d-flex flex-row justify-content-between align-items-center">
                            <div className="d-flex flex-row flex-fill align-items-center">
                                <img src={enterpise} className=""/>
                                <p className="family-PTsans ph-20 font-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div>
                                <NavLink exact to={'/services/linkedin-profile-Zfcdnye1'} className="custom-button featured aqua active flex-fill justify-content-center font-20">Learn More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fluid pv-30">
                <div className="container">
                    <div className="row">
                        <img src={organization} className="fluid"/>
                    </div>
                </div>
            </section>
            <section className="fluid pv-30">
                <div className="container">
                    <div className="row">
                        <div className="fluid">
                            <h2 className="font-40 weight-700 text-center">99xContent by the Numbers.</h2>
                            <div className="fluid d-flex flex-row justify-content-center mt-30">
                                <div className="col-12 col-sm-4 col-md-4 col-lg-3 text-center border-right">
                                    <p className="font-60 weight-700 family-PTsans text-center color-aqua">4247</p>
                                    <p>Active Content Writers</p>
                                </div>
                                <div className="col-12 col-sm-4 col-md-4 col-lg-3 text-center border-right">
                                    <p className="font-60 weight-700 family-PTsans text-center color-aqua">4247</p>
                                    <p>Active Content Writers</p>
                                </div>
                                <div className="col-12 col-sm-4 col-md-4 col-lg-3 text-center">
                                    <p className="font-60 weight-700 family-PTsans text-center color-aqua">4247</p>
                                    <p>Active Content Writers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <StillHaveQuestions/>
        </div>);
    }
}

const mapStateToProps = state => ({
    //
});

const mapDispatchToProps = dispatch => ({
    //
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);