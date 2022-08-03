import React from "react"
import "./style.scss";

const AssetFeature1 = require("../../assets/images/feature-1.png");
const AssetFeature2 = require("../../assets/images/feature-2.png");
const AssetFeature3 = require("../../assets/images/feature-3.png");
const AssetFeature4 = require("../../assets/images/feature-4.png");
const AssetFeature5 = require("../../assets/images/feature-5.png");
const AssetFeature6 = require("../../assets/images/feature-6.png");
const AssetFeature7 = require("../../assets/images/feature-7.png");
const AssetFeature8 = require("../../assets/images/feature-8.png");

export default function AllPlansFeatures(props){
    return (
        <>
                <center>
                    <h2 className="mt-30 mb-20">All our plans and products include</h2>
                </center>
                <div className="container all-plan-features">
                    <div className="row pv-30">
                        <div className="col-6 col-md-3 mb-20">
                            <img src={AssetFeature1} className="img-fluid mb-20"/>
                            <h3 className="font-16">Once Delivered, You own it</h3>
                            <p className="text-justify">You have 100% ownership of the files the moment we deliver them to you. That includes the copyrights and broadcast rights of the content</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={AssetFeature2} className="img-fluid mb-20"/>
                            <h3 className="font-16">Unlimited Requests</h3>
                            <p className="text-justify">Request as many designs/posts your heart wants. Leave it to us, to get the job done on time for you. Did we mention with reporting and analytics too.</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={AssetFeature3} className="img-fluid mb-20"/>
                            <h3 className="font-16">Unlimiited Revisions</h3>
                            <p className="text-justify">Yep, We mean it. Infact we want you to make requests till it’s the best ever content ever written. We’ll keep editing until you think it’s absolutely perfect</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={AssetFeature4} className="img-fluid mb-20"/>
                            <h3 className="font-16">Faster than flash turnaround</h3>
                            <p className="text-justify">Your requests will be delivered in a day or two business days — or even same-day delivery for Business accounts. Try us, you’ll be impressed for sure</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={AssetFeature5} className="img-fluid mb-20"/>
                            <h3 className="font-16">Industry Specific Talant</h3>
                            <p className="text-justify"> Work with your team directly. We screen and bring only the best, experienced, and industry specific talents for you. Your A-team just a ping away</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={AssetFeature6} className="img-fluid mb-20"/>
                            <h3 className="font-16">24/7 Live Chat Support</h3>
                            <p className="text-justify">Run into an issue? Just chat with our world-class support team in real time, or hey you wanna talk about the weather we are available 24/5 for you</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={AssetFeature7} className="img-fluid mb-20"/>
                            <h3 className="font-16">Satisfaction Guranteed</h3>
                            <p className="text-justify">You’ll love in love with us and, we’ll love you 3000. If you don’t , we’ll get you a no-questions asked full refund, try us out risk-free with our 30-day trial.</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <img src={AssetFeature8} className="img-fluid mb-20"/>
                            <h3 className="font-16">No questions asked refund</h3>
                            <p className="text-justify">Refund Initiated</p>
                        </div>
                    </div>
                </div>
        </>
    )
}