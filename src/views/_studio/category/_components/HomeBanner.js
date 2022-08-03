import SignupBox from "components/SignupBox";
import React, { useRef, useState } from "react"

export default function CategoryHomeBanner({banner, title, subtitle, description, reverse}){
    
    let userEmail = useRef();
    let userEmailLg = useRef();

    return (
        <>
            <section className="home-banner" style={{maxWidth:"1200px",margin:"auto"}}>

                <div className="mobile-only">
                    <img src={banner}/>
                    <div className="item">
                        <h1>{title}</h1>
                        <p className="subtitle">{subtitle}</p>
                        <p>{description}</p>
                        {/* <div className="form-group">
                            <input 
                            ref={userEmail}
                            type="email" 
                            placeholder="Your Email Address"/>
                            <button 
                            className="submit"
                            onClick={()=>{
                                console.log("Hello World")
                                window.top.location = `/ab/account-security/login?email=${userEmail.current.value}`
                            }}
                            >
                                Sign Up
                            </button>
                        </div> */}
                        <SignupBox/>
                        <span className="offer">
                            Sign up today & get credits worth Rs. 2000/- 
                        </span>
                    </div>
                </div>

                <div className="row desktop-only" style={{flexDirection:reverse ? 'row-reverse':'row'}}>
                    <div className="col-12 col-sm-12 col-md-6 hero-image">
                        <img src={banner}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 white-bg">
                        <div className="white-bg-content" style={{marginLeft:reverse ? '108px':'-108px'}}>
                            <div className="item">
                                <h1>{title}</h1>
                                <p className="subtitle">{subtitle}</p>
                                <p>{description}</p>
                                {/* <div className="form-group">
                                    <input 
                                    ref={userEmailLg}
                                    type="email" 
                                    placeholder="Your Email Address"/>
                                    <button 
                                    onClick={()=>{
                                        console.log("Hello World")
                                        window.top.location = `/ab/account-security/login?email=${userEmailLg.current.value}`
                                    }}
                                    className="submit">
                                        Sign Up
                                    </button>
                                </div> */}
                                <SignupBox/>
                                <span className="offer">
                                    Sign up today & get credits worth Rs. 2000/- 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

            <section className="mv-30">
                <div className="container client-logos">
                    <img src="https://ik.imagekit.io/99x/startup/LogoGroup_tzgyaOVeP.svg"/>
                </div>
            </section>
        </>
    )

}