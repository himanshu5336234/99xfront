import React from 'react';
import { NavLink } from 'react-router-dom';

const logo1 = require('../../assets/images/main/logo-1.png');
const logo2 = require('../../assets/images/main/logo-2.png');
const logo3 = require('../../assets/images/main/logo-3.png');
const logo4 = require('../../assets/images/main/logo-4.png');

export default function(props){
    
    return (
        <section className="fluid pv-30 bg-light-gray">
            <div className="container pv-30">
                <div className="fluid text-center">
                    <h2 class="text-center font-44">
                        {
                            props.title ? props.title:'Two ways to get content'
                        }
                    </h2>
                    <p className="margin-none weight-700 family-PTsans">
                        {
                            props.subtitle ? props.subtitle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                        }
                    </p>
                </div>
                <div className="fluid d-flex flex-wrap pt-20 justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 align-items-center d-flex justify-content-center">
                        <img src={logo1} className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 align-items-center d-flex justify-content-center">
                        <img src={logo2} className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 align-items-center d-flex justify-content-center">
                        <img src={logo3} className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 align-items-center d-flex justify-content-center">
                        <img src={logo4} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
}