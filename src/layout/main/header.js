import React from 'react';
import { NavLink } from "react-router-dom";
import X99Header from '../../components/x99Header';
import CurrencyContext from "../../context/currency.context"
import './style.scss';

import { apiRequest } from "../../api"
import W3SuperMenu from '../../components/W3SuperMenu';

import SiteService from "../../service/site.service"


class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            toggleNavBar: document.body.clientWidth > 992 ? true : false
        };
    }
    
    static appCurrency = CurrencyContext

    toggleNav = () => {
        this.setState({toggleNavBar: !this.state.toggleNavBar});
    }

    render(){
        console.log(document.body.clientWidth);

        const getDefaultCurrency = () =>{
            return new Promise((resolve, reject)=>{
                let PathUrl = `/profile`;
                PathUrl += localStorage.getItem("w3_user") ? '?w3_user=' + localStorage.getItem("w3_user"):""
                apiRequest({
                    method:"GET",
                    url: PathUrl
                }).then(d=>{
                    if(d.success){
                        if(d.data && d.data.currency_multiplier_usd){
                            let currency_multiplier_usd =  d.data.currency_multiplier_usd;
                            if(!Object.is(NaN, parseInt(currency_multiplier_usd))) localStorage.setItem("user_currency_multiplier", d.data.currency_multiplier_usd)
                            else localStorage.setItem("user_currency_multiplier", 1)
                        }
                        //alert(d.data.currency_multiplier_usd)
                        resolve({
                            currency: d.data.currency  ,
                            currency_multiplier_usd: d.data?.currency_multiplier_usd
                        })
                    }else{
                        reject(d.message)
                    }
                }).catch(e=>{
                    reject(e);
                })
            })
        }

        const setUserCurrency = (currencyAbbr) => {

            let PathUrl = `/profile`;
            PathUrl += localStorage.getItem("w3_user") ? '?w3_user=' + localStorage.getItem("w3_user"):""
            
            return apiRequest({
                method:"POST",
                url: PathUrl,
                data:{
                    currency: currencyAbbr
                }
            }).then(r=>{
                if(r.data && r.data.w3_user){
                    localStorage.setItem("w3_user", r.data.w3_user);
                }
                return r
            })
        }
        return (
        <>
        <X99Header/>
        <header className="fluid pv-10 relative">
            <div className="container">
                
                {/* <div className="fluid d-flex flex-row justify-content-end">
                    <nav className="custom-nav">
                        <ul className="d-flex flex-row">
                            <li>
                                <NavLink exact to="/">Success Stories</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/">Why 99x SEO</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/">99x Content</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/">99x Startup</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/">99x Design</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/">99x Social</NavLink>
                            </li>
                            <li>
                                <NavLink className="dropDown" exact to="/">
                                    En <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div> */}
                <div className="fluid d-flex flex-row custom-main-nav-wrapper pv-10">
                    {/* <div className="logo">
                        <NavLink exact to="/">
                            <img src={SiteService.getActiveSiteSettings().LOGO_URL} className="img-fluid"/>
                        </NavLink>
                    </div> */}
                    <CurrencyContext.Consumer>
                        {
                            ({currency, setCurrency}) => (
                                <>
                                {/* <h1>Currency: {currency.iso3}</h1> */}
                                <W3SuperMenu
                                    fx={{
                                        getDefaultCurrency:getDefaultCurrency,
                                        setUserCurrency: setUserCurrency,
                                        setAppCurrency: (c) => {
                                            setCurrency(c)
                                        }
                                    }}
                                />
                                </>
                            )
                        }
                        
                    </CurrencyContext.Consumer>
                    
                    {/* <nav className={this.state.toggleNavBar ? "custom-main-nav active" : "custom-main-nav"}>
                        <ul>
                            <li>
                                <NavLink exact to="/how-it-works">How it Works?</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/pricing/subscription">All-in-one Subscription</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/pricing/on-demand">On-Demand Services</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/our-work">Our Work</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/all-access-pass">All Access Pass</NavLink>
                            </li>
                        </ul>
                    </nav> */}
                    
                    {/* <div className="d-flex">

                        <button className="nav-toggler" onClick={this.toggleNav}>
                            <i className="fa fa-bars color-text" aria-hidden="true"></i>
                        </button>
                        
                    </div> */}
                </div>
            </div>
        </header>
        </>
    );
    }
}

export default Header;