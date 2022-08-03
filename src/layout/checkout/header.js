import React from 'react';
import { NavLink } from "react-router-dom";
import './style.scss';

import { apiRequest } from "../../api"
import SiteService from "../../service/site.service"

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            toggleNavBar: document.body.clientWidth > 992 ? true : false
        };
    }

    toggleNav = () => {
        this.setState({toggleNavBar: !this.state.toggleNavBar});
    }

    render(){
        console.log(document.body.clientWidth);

        const StepNumber = window.location.pathname == "/checkout/payment" ? 2:1;

        const getDefaultCurrency = () =>{
            return new Promise((resolve, reject)=>{
                let PathUrl = `/profile`;
                PathUrl += localStorage.getItem("w3_user") ? '?w3_user=' + localStorage.getItem("w3_user"):""
                apiRequest({
                    method:"GET",
                    url: PathUrl
                }).then(d=>{
                    if(d.success) resolve( d.data.currency )
                    reject(d.message)
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
            })
        }
        return (
        <>
        <header className="fluid pv-10 relative">
            <div className="container">
                
             
                <div className="fluid d-flex flex-row custom-main-nav-wrapper pv-10">
                    <div className="logo">
                        <NavLink exact to="/">
                            <img src={SiteService.getActiveSiteSettings().LOGO_URL} className="img-fluid"/>
                        </NavLink>
                    </div>
                  
                    <div className="order-steps">
                        <ul>
                            <li className={`${StepNumber == 1 ? 'active':''} ${StepNumber == 2 ? 'active complete':''}`}>
                                <div className="menu-icon">
                                    {StepNumber == 2 ? '':1}
                                </div>
                                Order Details
                            </li>
                            <li className={`${StepNumber == 2 ? 'active':''}`}>
                                <div className="menu-icon">
                                    2
                                </div>
                                Confirm & Pay
                            </li>
                            <li>
                                <div className="menu-icon">
                                    3
                                </div>
                                Submit Requirements
                            </li>
                        </ul>
                    </div>

                    <div className="user-profile">

                    </div>
               
                </div>
            </div>
        </header>
        </>
    );
    }
}

export default Header;