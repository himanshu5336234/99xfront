import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';
const articleFeatured = require("../../assets/images/main/articles-1.jpg");

const FeaturedCategory = (props) => {
    return (<section className="fluid pv-30">
        <div className="container pv-30">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-5 d-flex flex-column">
                    <h2>Featured Works!</h2>
                    <p>Not to brag, But our clients love our work too!</p>
                    <div className="border-right ph-15 mv-30 flex-fill">
                        <button onClick={() => {}} className="custom-button featured active">
                            For Saas Product
                        </button>
                        <button onClick={() => {}} className="custom-button featured">
                            For E-commerce
                        </button>
                        <button onClick={() => {}} className="custom-button featured">
                            For Healthcare
                        </button>
                        <button onClick={() => {}} className="custom-button featured">
                            For Finance
                        </button>
                        <button onClick={() => {}} className="custom-button featured">
                            For Information Technology
                        </button>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-7">
                    <div className="custom-tab type-1">
                        <div className="custom-tab-header">
                            <div className="fluid category-card-wrapper">
                                <button onClick={() => {}} className="active">
                                    All Work
                                </button>
                                <button onClick={() => {}}>
                                    Articles & Blogs
                                </button>
                                <button onClick={() => {}}>
                                    Social Media Copies
                                </button>
                                <button onClick={() => {}}>
                                    Social Media Copies
                                </button>
                            </div>
                        </div>
                        <div className="custom-tab-body">
                            <div className="fluid category-card-wrapper">
                                <NavLink exact to={'#'} className="article-wrapper relative">
                                    <img src={articleFeatured} className="fluid"/>
                                    <div className="article-inner">
                                        <div className="middle-content">
                                            <label>2300 signups in 24 hrs</label>
                                            <p className="mb-30">Not to brag, But our clients love our work too!</p>
                                            <span>Find out more</span>
                                        </div>
                                        <span className="category-title">Articles & Blogs</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default FeaturedCategory;