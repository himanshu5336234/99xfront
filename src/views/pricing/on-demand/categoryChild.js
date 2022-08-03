import React from 'react';
import { connect } from 'react-redux';

import './style.scss';
import {RESET_CATEGORY_SERVICES_LIST} from '../../../actions/actionType';
import {categoryServiceListAPI} from '../../../actions/category';

const banner1 = require('../../../assets/images/banner-2.png');
const blogs = require('../../../assets/images/blog-1.png');
const blanksquare = require('../../../assets/images/blank-square.png');
const seotools = require('../../../assets/images/seo-tools.png');
const texture = require('../../../assets/images/texture-1.png');
const pointsIcon = require('../../../assets/images/points-icon.png');

class CategoryChild extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(this.props.location.state && this.props.location.state.slug){
            this.props.getCatServiceList(this.props.location.state.slug);
        }
    }

    componentDidUpdate(){
        console.log(this.props.catServiceList);
    }

    gotoCatDetail = (item) => {
        this.props.history.push('/services/'+item.slug, {cat_id: item.id, slug: item.slug});
    }

    render(){
        console.log(this.props);
        return (<div className="fluid ph-15 mt-30">
            <section className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 pv-30">
                        <h1>Kickstart your Business <br/>with our tailor-made <br/>services</h1>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <img src={banner1} className="img-fluid"/>
                    </div>
                </div>
            </section>
            <section className="container pv-15 mt-30">
                <div className="row pv-15 text-center justify-content-lg-center">
                    <div className="col-12 col-sm-12 col-md-12">
                        <h4><span className="color-green font-24">Startup & Business</span> Checkout Our Feature Services</h4>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 text-left mt-20">
                        <h2 className="margin-none font-28">{this.props.catServiceList.list.category && this.props.catServiceList.list.category.title ? this.props.catServiceList.list.category.title : 'Web design and development'}</h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-lg-auto pv-30">
                        <div className="row pv-20">
                            {this.props.catServiceList.isFetching ? (<div className="col-12 col-sm-12">
                                <p className="text-center font-28 weight-600">Fetching Services...</p>
                            </div>) : this.props.catServiceList.list.results && this.props.catServiceList.list.results.length > 0 ? this.props.catServiceList.list.results.map((item, index) => {
                                return (<div className="col-12 col-sm-6 col-md-6 mb-30" key={'category_list_'+index} onClick={() => this.gotoCatDetail(item)}>
                                    <div className="blogs">
                                        <img src={blogs} className="fluid"/>
                                        <p className="title gilroyBold margin-none ph-15 pv-15 text-left bg-green color-white">{item.title}</p>
                                        {/* <div className="blogs-body"> */}
                                            {/* <div className="fluid">
                                                <button className="btn-bordered-filled color-green">BUSINESS</button>
                                            </div> */}
                                            {/* <div className="fluid d-flex flex-row justify-content-between align-items-center">
                                                <div className="">
                                                    <p className="font-20 margin-none"><span className="color-green font-20 gilroyBold">Rs. 1999</span> Onwards / Per Link</p>
                                                </div>
                                                <div className="">
                                                    <i className="fa fa-star color-green font-20" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-green font-20" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-green font-20" aria-hidden="true"></i>
                                                    <i className="fa fa-star color-green font-20" aria-hidden="true"></i>
                                                    <i className="fa fa-star font-20" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="fluid mt-10">
                                                <ul className="two-grid-list">
                                                    <li>
                                                        UI-UX
                                                    </li>
                                                    <li>
                                                        Website Design
                                                    </li>
                                                    <li>
                                                        E-Commerce
                                                    </li>
                                                    <li>
                                                        Front-End Development
                                                    </li>
                                                    <li>
                                                        Business Website
                                                    </li>
                                                    <li>
                                                        Backend Development
                                                    </li>
                                                    <li>
                                                        Responsive Design
                                                    </li>
                                                    <li>
                                                        High Performance Design
                                                    </li>
                                                </ul>
                                            </div> */}
                                        {/* </div> */}
                                    </div>
                                </div>);
                            }) : (<div className="col-12 col-sm-12">
                                <p className="text-center font-28 weight-600">No Service Found.</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </section>
            <section className="container pv-15">
                <div className="row pv-15 text-center justify-content-md-center justify-content-lg-center">
                    <div className="col-12 col-sm-12 col-md-8">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="title-1">
                                    <h2>Compare 99x</h2>
                                    <img src={blanksquare} className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 justify-content-center d-flex flex-column">
                                <p className="gilroyBold font-20">with others & see</p>
                                <p className="gilroyBold font-20">how we stack up.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-lg-auto pv-30">
                        <div className="custom-tools-tabs">
                            <ul className="">
                                <li className="">
                                    <a href="#" className="active">Backlinks</a>
                                </li>
                                <li className="">
                                    <a href="#">Google Search Console</a>
                                </li>
                                <li className="">
                                    <a href="#">Keyword Search</a>
                                </li>
                                <li className="">
                                    <a href="#">Competitor Research</a>
                                </li>
                                <li className="">
                                    <a href="#">Rank Tracker</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-lg-auto pv-30 text-right">
                        <img src={seotools} className="img-fluid"/>
                    </div>
                </div>
            </section>
            <section className="fluid pv-30 bg-pink">
                <section className="container">
                    <div className="row pv-30">
                        <div className="col-12 col-sm-12 col-md-12 mb-30 color-white">
                            <h2 className="font-36 text-center">How it works</h2>
                        </div>
                        <div className="fluid d-flex flex-wrap pt-20 align-items-center justify-content-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-sm-12 col-md-2 d-flex align-items-start mb-20 flex-row justify-content-center">
                                        <div className="services custom-card d-flex flex-column align-items-center pv-20 box-shadow-none">
                                            <img src={pointsIcon} className="img-fluid bordered-img"/>
                                            <p className="text-left mt-15 font-16 color-white weight-600">Share your requirements on our client Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2 d-flex align-items-center mb-20 mt-20 flex-row justify-content-center">
                                        <div className="services custom-card d-flex flex-column align-items-center pv-20 box-shadow-none">
                                            <img src={pointsIcon} className="img-fluid bordered-img"/>
                                            <p className="text-left mt-15 font-16 color-white weight-600">Share your requirements on our client Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2 d-flex flex-column align-items-center">
                                        <div className="services custom-card d-flex flex-column align-items-center pv-20 mb-20 box-shadow-none">
                                            <img src={pointsIcon} className="img-fluid bordered-img"/>
                                            <p className="text-left mt-15 font-16 color-white weight-600">Share your requirements on our client Dashboard</p>
                                        </div>
                                        <div className="services custom-card d-flex flex-column align-items-center pv-20 box-shadow-none">
                                            <img src={pointsIcon} className="img-fluid bordered-img"/>
                                            <p className="text-left mt-15 font-16 color-white weight-600">Share your requirements on our client Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2 d-flex align-items-center mb-20 mt-20 flex-row justify-content-center">
                                        <div className="services custom-card d-flex flex-column align-items-center pv-20 box-shadow-none">
                                            <img src={pointsIcon} className="img-fluid bordered-img"/>
                                            <p className="text-left mt-15 font-16 color-white weight-600">Share your requirements on our client Dashboard</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-2 d-flex align-items-start mb-20 flex-row justify-content-center">
                                        <div className="services custom-card d-flex flex-column align-items-center pv-20 box-shadow-none">
                                            <img src={pointsIcon} className="img-fluid bordered-img"/>
                                            <p className="text-left mt-15 font-16 color-white weight-600">Share your requirements on our client Dashboard</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container pv-15">
                <div className="row pv-15 text-center justify-content-lg-center">
                    <div className="col-12 col-sm-12 col-md-10">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="title-1">
                                    <h2>Startup & Business</h2>
                                    <img src={blanksquare} className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 justify-content-center d-flex flex-column">
                                <p className="gilroyBold font-16">Lorem Ipsum is simply dummy text</p>
                                <p className="gilroyBold font-16 margin-none">Lorem Ipsum is simply dummy text</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-lg-auto pv-30">
                        <div className="row pv-20">
                            <div className="col-12 col-sm-6 col-md-4 mb-15">
                                <div className="blogs">
                                    <img src={blogs} className="img-fluid"/>
                                    <div className="blogs-body">
                                        {/* <div className="fluid">
                                            <button className="btn-bordered-filled color-green">BUSINESS</button>
                                        </div> */}
                                        <div className="fluid mt-10">
                                            <p className="gilroyBold">Lorem Ipsum is simply dummy text of the printing</p>
                                            <p><span className="color-green font-20 gilroyBold">Rs. 1999</span> Onwards / Per Link</p>
                                        </div>
                                        <div className="fluid mt-10">
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 mb-15">
                                <div className="blogs">
                                    <img src={blogs} className="img-fluid"/>
                                    <div className="blogs-body">
                                        {/* <div className="fluid">
                                            <button className="btn-bordered-filled color-green">BUSINESS</button>
                                        </div> */}
                                        <div className="fluid mt-10">
                                            <p className="gilroyBold">Lorem Ipsum is simply dummy text of the printing</p>
                                            <p><span className="color-green font-20 gilroyBold">Rs. 1999</span> Onwards / Per Link</p>
                                        </div>
                                        <div className="fluid mt-10">
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 mb-15">
                                <div className="blogs">
                                    <img src={blogs} className="img-fluid"/>
                                    <div className="blogs-body">
                                        {/* <div className="fluid">
                                            <button className="btn-bordered-filled color-green">BUSINESS</button>
                                        </div> */}
                                        <div className="fluid mt-10">
                                            <p className="gilroyBold">Lorem Ipsum is simply dummy text of the printing</p>
                                            <p><span className="color-green font-20 gilroyBold">Rs. 1999</span> Onwards / Per Link</p>
                                        </div>
                                        <div className="fluid mt-10">
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star color-green" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>);
    }
}

const mapStateToProps = state => ({
    catServiceList: state.CategoryServiceList
});

const mapDispatchToProps = dispatch => ({
    getCatServiceList: (slug) => {
        dispatch(categoryServiceListAPI(slug));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryChild);