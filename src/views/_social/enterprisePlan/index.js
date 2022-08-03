import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

import LikeAnEcosystem from '../../../components/_sections/LikeAnEcosystem';
import WhyWorkWithUs from '../../../components/WhyWorkWithUs';
import CustomerTestinomial from '../../../components/_sections/CustomerTestinomial';
import TrustedBy1000Customers from "../../../components/_sections/TrustedBy1000Customers";

import styled from "styled-components"

const StyledSection = styled.section`
    background:${props => props.color};
    text-align:center;
    display: flex;
    flex-direction: column;
    padding: 40px 0px;
`

const SH3 = styled.h3`
    max-width: 620px;
    margin: auto;
    color: #fff;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: -0.48px;
    line-height: 48px;
`

const StyledButton = styled.button`
    background: #DC1871;
    border-radius: 4px;
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    line-height: 23px;
    padding: 13px 27px;
    margin: 30px auto;
    outline: 0px;
    border: 0px;
`

export default class EnterprisePlan extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (<div className="fluid enterprise-plan">
            
            <section className="fluid hero">
                <div className="container">
                    <div className="row d-flex flex-row">

                        <div className="col-sm-12 col-md- col-lg-6">
                            <h1 className="weight-700">Keep your eye on the enterprize</h1>
                            <p className="font-18">
                            Your customers and business are always eveloving that’s why enterprise marketing, development and creative strategies  needs to be smart, and flexible. Whether you’re a high-growth innovator or an established company, our people can help you grow and scale your business.
                            </p>
                            <div className="mt-30">
                                <NavLink style={{width:'162px'}} exact to={'/contact'} className="custom-button featured aqua active font-16 ">Schedule a Call</NavLink>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md- col-lg-6">
                            <img src="https://ik.imagekit.io/99x/startup/revised/Image_Y-Pmvoz83.png" style={{width:'100%'}} />
                        </div>
                    </div>
                </div>
            </section>


            <section className="fluid everything-you-need">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/Frame_971_9IOhOlUYn.png"/>
                        </div>
                        <div className="col-md-6">
                            <div className="block">
                                <h2>Everything your people and business need</h2>
                                <p>Say goodbye to the limitations of working with only one team. Do it all, get fresh perspectives, and drive excellent results effortlessly. From design to development to marketing, we’ve got the experts and tools to help pave the path for your business growth for the long haul. </p>
                            </div>
                            <div className="block">
                                <h2>Expereience strategic leadership</h2>
                                <p>Leverage our industry knowledge from 20+ Industries with your vision and drive innovation at scale. Our experienced leadership takes complete ownership of your projects, right from planning to execution to optimization to delivery - we'll take care of it all. </p>
                            </div>
                            <div className="block">
                                <h2>Scale your workflow</h2>
                                <p>A large, dispersed company means managing multiple teams and their unique skill sets. 99x gives you the flexibility to expand your teams, create better solutions faster, and seamlessly integrate 
the tools, platforms, and workflows your team uses. </p>
                            </div>
                            <div className="block">
                                <h2>Get everyone on the same page</h2>
                                <p>Give your team the flexibility to instantly collaborate with people across the globe, build faster, and drive results. Bring and integrate your data, tools, and platforms across all departments in all locations into one platform, with zero headaches, smoother executions, more results at scale.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white pv-30">
                <LikeAnEcosystem/>
            </section>

            <section className="bg-white pv-30">
                <WhyWorkWithUs/>
            </section>

            <section className="bg-white pv-30">
                <TrustedBy1000Customers title="Join global brands from every industry"/>
            </section>

            <CustomerTestinomial light/>

            <StyledSection color={'var(--color-secondary)'}>
                
                <SH3>
                    See how 99x can<br/> fit your needs
                </SH3>
                
                <NavLink to="/contact">
                    <StyledButton>
                        Talk to us
                    </StyledButton>
                </NavLink>

            </StyledSection>


        </div>);
    }
}