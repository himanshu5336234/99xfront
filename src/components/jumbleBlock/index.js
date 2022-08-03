import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.scss"

const frame97 = require('../../assets/images/main/Frame 97.png');
const frame92 = require('../../assets/images/main/Frame 92.png');
const reviewImage = require('../../assets/images/main/review.png');
const countryImage = require('../../assets/images/main/Emoji.png');
const frame90 = require('../../assets/images/main/Frame 90.png');

export default class JumbleBlock extends React.Component {
    render(){
        return (<section className="container-fluid comp-jumbple-block">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-7 pv-30 ph-30 d-flex align-items-center block-1">
                    <div className="fluid pv-30 ph-30">
                        <h3 class="color-white font-24 weight-700 family-Inter">
                            Don’t just take our word for it, see for yourself what our clients think about us.
                        </h3>
                        <p className="margin-none color-white family-Inter">
                        Our customers have expertise across thousands of industries. But, they all have one thing in common. 99x Content. We have helped countless customers grow and scale their business.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-5 pv-30 ph-30 text-center">
                    <img src={frame97} className="img-fluid fluid" />
                    <div className="fluid mt-20 text-left">
                        <p className="family-Inter">
                        “With 99x Content, we have seen 30% revenue growth quarter over quarter and now we’re rolling it out across the entire customer lifecycle.”
                        </p>
                        <div className="fluid product-review">
                            <div className="fluid d-flex flex-row">
                                <span>
                                    <img src={reviewImage} className="review-profile-img"/>
                                </span>
                                <div className="fluid d-flex flex-column">
                                    <p className="weight-700 family-Inter margin-none">
                                        Mike Ross
                                        <span className="ph-15 color-gray">
                                            VP of Marketing
                                        </span>
                                    </p>
                                    <div className="fluid font-12 d-flex align-items-center">
                                        <img src={countryImage} className="country-icon"/>
                                        United State
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-5">
                    <div className="row fluid-height">
                        <div className="fluid d-flex flex-row">
                            <img src={frame92} className="img-fluid" />
                            <div className="pv-15 ph-15 d-flex flex-column justify-content-center">
                                <p className="family-Inter">
                                    “With 99x Content, we have seen 30% revenue growth quarter over quarter and now we’re rolling it out across the entire customer lifecycle.”
                                </p>
                                <div className="fluid product-review">
                                    <div className="fluid d-flex flex-row">
                                        <div className="fluid d-flex flex-column">  
                                            <p className="weight-700 family-Inter margin-none">
                                                Mike Ross
                                                <span className="ph-15 color-gray">
                                                    VP of Marketing
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fluid d-flex flex-column flex sm-column flex-md-row block-4">

                            <div className="col-12 col-sm-12 col-md-6 pv-15  text-center align-self-center">
                                <span className="color-white font-36 weight-700 family-Inter">
                                    <i className="fa fa-star color-white font-36" aria-hidden="true"></i>
                                    4.8/5
                                </span>
                                <p className="family-Inter color-white font-12">
                                    That’s our average customer rating from 23,416 reviews. Happy creators = happy customers.
                                </p>
                            </div>

                            <div className="col-12 col-sm-12 col-md-6 pv-15 bg-violet align-items-center d-flex flex-column justify-content-center">
                                <span className="color-white font-44 weight-700 family-Inter">
                                    25K +
                                </span>
                                <span className="color-white font-20 weight-700 family-Inter">Articles Publish</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-7 pv-30 ph-30 block-6">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-5 d-flex align-items-center">
                            <div className="fluid">
                                <p className="text-justify color-white weight-700 family-Inter">
                                    Case Study
                                    <i className="icons icon-arrow-right font-12 ph-15"></i>
                                </p>
                                <br/>
                                <br/>
                                <h3 className="font-20 weight-700 family-Inter color-white">
                                    Infosys rolls the dice with Social Media, enagagement soars up by 54% 
                                </h3>
                                <br/>
                                <br/>
                                <p className="family-Inter color-white">
                                “With 99x Content, we have seen 30% revenue growth quarter over quarter and now we’re rolling it out across the entire customer lifecycle.”
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-7">
                            <img src={frame90} className="img-fluid fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>);
    }
}