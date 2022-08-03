import React from "react";

import './style.scss';

import { ToastContainer, toast } from 'react-toastify';
import Countries from "./countries.json"
import { NavLink } from "react-router-dom";

export default class extends React.Component{

    constructor(props){
        super(props)
        this.fx = props.fx
    }

    componentDidMount(){


    }

    continueWithEmail(){

        var continueBtn = document.querySelector("#continue");
        continueBtn.value = "Please Wait...";
        continueBtn.setAttribute("disabled","disabled");

        console.log("CONTINUE_WITH_EMAIL");
        var email = document.querySelector("#email");
        document.querySelector("#signupEmail").value = email.value;
        document.querySelector("#loginEmail").value = email.value;
        //alert(email.value);

       
        this.fx.initLogin(email.value).then(res => {

            if(res.success){

                continueBtn.value = "Continue";
                if(res.data.user_exists){
                    this.NextStepLogin();
                }else{
                    this.NextStepSignUp();
                }

            }else{

                alert(res.message);
                continueBtn.value = "Continue";
                
            }
        })
        .catch(e=>{
            console.error(e);
            toast.error(e.message);
        })
        .finally(()=>continueBtn.removeAttribute("disabled"));
        //this.NextStepSignUp();
        
    }

    NextStepSignUp(){
        
        document.querySelector(".landing-onboarding-section").classList.add("hidden");
        document.querySelector(".signup-section-block").classList.remove("hidden");
        
    }

    NextStepLogin(){
        
        document.querySelector(".landing-onboarding-section").classList.add("hidden");
        document.querySelector(".login-section").classList.remove("hidden");
        
    }

    Login(){

        var Email = document.querySelector("#loginEmail");
        var Password = document.querySelector("#loginPassword");

        var loginBtn = document.querySelector(".btn-login");
        loginBtn.value = "Please Wait...";
        loginBtn.setAttribute("disabled","disabled");

        var loginAlert = document.querySelector('.login-alert');
        
        this.fx.loginUser({email: Email.value, password: Password.value}).then(d=>{
            
            localStorage.setItem("user-slug", d.data.user.id);
            localStorage.setItem("user-email", d.data.user.email);
            localStorage.setItem("w3_auth", d.data.token);
            // alert(d.data.token)
            
            if(typeof this.props.onSuccess === "function")
                this.props.onSuccess()
            else
                window.top.location = "/";

        }).catch(e=>{

            loginAlert.innerHTML = e.message;
            loginAlert.classList.remove("hidden");
            

        }).finally(()=>{
            loginBtn.removeAttribute("disabled");
        })

    }

    // Signup without Code and Password
    Signup(){

        var Email = document.querySelector("#signupEmail");
        var Code = document.querySelector("#signupCode");
        var Password = document.querySelector("#signupPassword");
        var Name = document.querySelector("#signupName");
        var Username = document.querySelector("#username");

        var phoneCountryCode = document.querySelector("#phoneCountryCode");
        var phoneNumber = document.querySelector("#phoneNumber");

        const SignupPayload = {
            email: Email.value, 
            name: Name.value,
            phone: {
                countryCode: phoneCountryCode.value, 
                number: phoneNumber.value
            }
        };

        if(Username) SignupPayload.username = Username.value;


        var signupBtn = document.querySelector(".btn-signup");
        signupBtn.value = "Please Wait...";
        signupBtn.setAttribute("disabled","disabled");

        var signupAlert = document.querySelector('.signup-alert');

        this.fx.createUser( SignupPayload ).then(d=>{
            
            localStorage.setItem("user-email", Email.value);
            this.props.onSuccess ? this.props.onSuccess():(window.top.location = "/");

        }).catch(e=>{

            signupAlert.innerHTML = e.message;
            signupAlert.classList.remove("hidden");

        }).finally(()=>{
            signupBtn.removeAttribute("disabled");  
        })

    }

      
    render(){
        console.log("Component", "OnBoardComponent");
        return (
            <>
                <div className="onboard-component">

                    <div className="onboard-title">
                        <h2>Let’s Get Started!</h2>
                        <p>We’re super excited to have you here. The best work for your business awaits you on the other side. </p>
                    </div>


                    <div className={`signup-section-block`}>

                            <div class="alert alert-danger hidden signup-alert" role="alert">
                                This is a danger alert—check it out!
                            </div>

                            <div className="form-group">
                                {/* <label htmlFor="username">Full Name</label> */}
                                <input type="username" className="form-control w3dev-input" id="signupName" aria-describedby="emailHelp" placeholder="Tony Stark" />
                            </div>

                            <div className="form-group">
                                {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                                <input 
                                    type="email" 
                                    className="form-control w3dev-input" 
                                    id="signupEmail" 
                                    aria-describedby="emailHelp" 
                                    placeholder="name@work-email.com" 
                                />
                                {/* <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small> */}
                            </div>
                            
                            
                            <div className="mobile-field">

                                {/* <label htmlFor="exampleInputEmail1">Phone Number</label> */}
                                {/* <br/> */}
                                <div className="input-container">

                                    <div className="country-selector">
                                        <select style={{maxWidth:'120px'}} id="phoneCountryCode">
                                            {Countries.map((c,i)=>(
                                                <option value={c.code} selected={`${c.name === 'India' ?  'selected':''}`}>{c.name} ({c.code})</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="phone-input">
                                        <input 
                                            type="number" 
                                            className="form-control w3dev-input" 
                                            id="phoneNumber" 
                                            placeholder="Number" 
                                        />
                                    </div>
                                </div>

                            </div>
                            

                            {/* <div className="form-group">
                                <label htmlFor="username">Set Username</label>
                                <input type="username" className="form-control w3dev-input" id="username" aria-describedby="emailHelp" placeholder="Enter a unique username" />
                            </div> */}
                            
                            {/* <div className="form-group">
                                <label htmlFor="passwordSignup">Set Password</label>
                                <input type="password" className="form-control w3dev-input" id="signupPassword" placeholder="New Password" />
                            </div> */}
                            
                            {/* <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}

                            <button type="submit" className="btn btn-primary w3dev-btn btn-signup" onClick={()=>this.Signup()}>
                                Continue
                            </button>

                            <div className="form-group text-center">
                                <small className="text-muted">
                                    We’ll email you a magic code for a password-free sign up. 
                                </small>
                              
                            </div>

                            <div className="text-center mv-30 already-block">
                                <span>
                                    Already have an account? <NavLink to="/ab/account-security/login">Sign In</NavLink>
                                </span>
                            </div>

                            <div className="text-center">
                                <small id="emailHelp" className="form-text text-muted font-12">
                                    By clicking the "Sign Up" button, you are creating a 99xStartup account, and you agree to 99X's <a href="#" className="muted-link">Terms of Use</a> and <a href="#" className="muted-link">Privacy Policy</a>
                                </small>
                            </div>


                    </div>

                    <div className="code-section hidden">

                        <h2>Login to 99xStartup</h2>
                        <div class="alert alert-danger hidden login-alert" role="alert">
                            This is a danger alert—check it out!
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control w3dev-input" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted hidden"></small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="passwordLogin">Password</label>
                            <input type="password" className="form-control w3dev-input" id="loginPassword" placeholder="Password" />
                            <small id="emailHelp" className="form-text text-muted hidden"></small>
                        </div>
                            
                        <button type="submit" className="btn btn-primary w3dev-btn btn-login" onClick={()=>this.Login()}>Log In</button>
                        <br/>
                        {/* OR
                        <br/>
                        <button type="submit" className="btn btn-primary w3dev-btn-outline">Send One Time Code</button> */}

                    </div>

                </div>
                <ToastContainer 
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </>
        );
    }
}