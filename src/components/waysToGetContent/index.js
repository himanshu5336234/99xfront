import React from "react"
import { NavLink, Redirect } from 'react-router-dom';
import "./style.scss"

const ondemand = require("../../assets/images/main/Frame 57.png");
const articleandblogicon = require("../../assets/images/main/Frame 58.png");

export default function WaysToGetContent(props){
    const Cats = [
        {
            id:1,
            title:"Articles & Blog Posts",
            subtitle:"from US$199",
            desc:"Well researched, Keyword rich long form articles, whitepapers or blogs, our team of expert writers got your back. All your content needs in one place."
        },
        {
            id:2,
            title:"LinkedIn Profiles",
            subtitle:"from US$39",
            desc:"Well researched, Keyword rich long form articles, whitepapers or blogs, our team of expert writers got your back. All your content needs in one place."
        },
        {
            id:3,
            title:"CXO Marketing",
            subtitle:"from US$199",
            desc:"Well researched, Keyword rich long form articles, whitepapers or blogs, our team of expert writers got your back. All your content needs in one place."
        },
    ]
    return (
        <>
        <div className="container mb-30">
                    <h2 class="color-green text-center font-44">Two ways to get content</h2>
                    <div className="row d-flex flex-row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                            <p className="text-justify family-inter">Quality content creation is expensive and time consuming. It does’nt have to be. In a few clicks, 99x gives you access to a professional content creator ready to jump into your content ecosystem</p>
                        </div>
                    </div>
                </div>
                <div className="fluid d-flex flex-wrap flex-row pt-30">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-5 border-right">
                        <div className="row justify-content-end">
                            <div className="col-12 col-sm-10 col-md-9 ph-30 d-flex flex-column align-items-end pt-20">
                                <img src={ondemand} className="img-fluid" alt="On Demand" title="On Demand"/>
                                <div className="fluid mt-30">
                                    <p className="font-24 weight-700 family-PTsans">On-Demand</p>
                                    <p className="text-justify family-inter">
                                        Work with us directly. Place orders for services that you need, wether it’s a blog post or social media copy. We'll collaborate one-on-one with you on your project.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-8 col-lg-7 d-flex flex-row align-items-center pv-30 category-touch">
                        <div className="fluid category-card-wrapper">
                            {Cats.map(c=>{
                                return (
                                    <NavLink exact={true} to={'/'} className="fluid category-card pt-20 ph-20 text-center">
                                        <img src={articleandblogicon} className="img-fluid"/>
                                        <div className="fluid text-left mt-30">
                                            <h3 className="font-24 weight-700 family-PTsans title">{c.title}</h3>
                                            <p className="font-20 weight-500 family-PTsans subtitle">{c.subtitle}</p>
                                            <p className="text-justify desc">{c.desc}</p>
                                        </div>
                                    </NavLink>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
                <div className="container mb-30 text-right mt-30">
                    <NavLink exact={true} to={"/"} className="custom-button normal aqua">See all Category</NavLink>
                </div>
            </>
    )
}