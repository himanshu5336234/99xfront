import React from "react"
import SignupBox from "../SignupBox"
import "./style.scss"

export default function SignupBlock(props){
    if(props.theme && props.theme == "light")
    return (
        <>
        <section className="signup-block light">

            <div className="main-content container">
                <h2>Sign-Up & Get Free <br/>Credits worth Rs. 2000/- </h2>
                <div className="signup-box-container">
                    <SignupBox noOffer {...props}/>
                </div>
            </div>


            {/* <div className="form-group">
                <input type="email" placeholder="Your Email Address"/>
                <button className="submit">
                    Sign Up
                </button>
            </div>

            <div className="offer">
                Sign up today & get credits worth Rs. 2000/- 
            </div> */}

        </section>
        </>
    )

    return (
        <>
        <section className="signup-block">

            <div className="main-content container">
                <h2>Sign-Up & Get Free <br/>Credits worth Rs. 2000/- </h2>
                <div className="signup-box-container">
                    <SignupBox noOffer/>
                </div>
            </div>


            {/* <div className="form-group">
                <input type="email" placeholder="Your Email Address"/>
                <button className="submit">
                    Sign Up
                </button>
            </div>

            <div className="offer">
                Sign up today & get credits worth Rs. 2000/- 
            </div> */}

        </section>
        </>
    )
}