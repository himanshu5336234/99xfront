import React from "react";
import './style.scss';

import { ToastContainer, toast } from 'react-toastify';

import Countries from "./countries.json"

const AfterLogin = () =>{

    if(localStorage.getItem("after_login")){
    
        let new_location = localStorage.getItem("after_login");
        localStorage.removeItem("after_login")

        window.top.location = new_location;
    
    }else{
        
        window.top.location = "/";

    }
}

export default class extends React.Component{

    constructor(props){
        super(props)
        this.fx = props.fx
        this.state = {
            email:'',
            resendIn: 30,
            resendCodeMessage:'Re-send Code'
        }

        this.resendOtp = this.resendOtp.bind(this)
        this.startResendCodeInterval = this.startResendCodeInterval.bind(this)

    }

    componentDidMount(){

        // 

    }

    startResendCodeInterval(){
        let _this = this
        this.resentInterval = setInterval(()=>{

            if(this.state.resendIn > 0){
                _this.setState({resendIn: _this.state.resendIn-1})
            }else{
                clearInterval(_this.resentInterval)
            }

        },1000)
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

        this.setState({email: email.value})
       
        let initPayload = {
            email: email.value
        }

        if(this.props.userMode && this.props.userMode == "SELLER") initPayload['mode'] = 'SELLER'

        this.fx.initLogin(initPayload).then(res => {

            if(res.success){

                continueBtn.value = "Continue";
                if(res.data.user_exists){
                    this.NextStepLogin();
                }else{
                    this.startResendCodeInterval();
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
            localStorage.setItem("token", d.data.token);
            localStorage.setItem("user_type", d.data.user_type);
            // alert(d.data.token)
            
            if(typeof this.props.onSuccess === "function")
                this.props.onSuccess()
            else{
                AfterLogin();
            }

        }).catch(e=>{

            loginAlert.innerHTML = e.message;
            loginAlert.classList.remove("hidden");
            

        }).finally(()=>{
            loginBtn.removeAttribute("disabled");
        })

    }

    Signup(){

        var Email = document.querySelector("#signupEmail");
        var Code = document.querySelector("#signupCode");
        var Password = document.querySelector("#signupPassword");
        var Name = document.querySelector("#signupName");
        var Username = document.querySelector("#username");

        var mobile = {
            countryCode: document.querySelector("#phoneCountryCode").value, 
            number: document.querySelector("#phoneNumber").value
        }

        const SignupPayload = {
            email: Email.value, 
            name: Name.value,
            password: Password.value,
            code: Code.value,
            mobile: mobile
        };

        if(Username) SignupPayload.username = Username.value;


        var signupBtn = document.querySelector(".btn-signup");
        signupBtn.value = "Please Wait...";
        signupBtn.setAttribute("disabled","disabled");

        var signupAlert = document.querySelector('.signup-alert');

        this.fx.createUser( SignupPayload ).then(d=>{
            
            localStorage.setItem("user-slug", d.data.user.id);
            localStorage.setItem("user-email", d.data.user.email);
            localStorage.setItem("token", d.data.token);
            localStorage.setItem("w3_auth", d.data.token);
            localStorage.setItem("user_type", d.data.user_type);
            this.props.onSuccess ? this.props.onSuccess():(AfterLogin());

        }).catch(e=>{

            signupAlert.innerHTML = e.message;
            signupAlert.classList.remove("hidden");

        }).finally(()=>{
            signupBtn.removeAttribute("disabled");  
        })

    }

    resendOtp(){

        this.setState({
            resendCodeMessage:'Sending Code...'
        })
        this.fx.initLogin(this.state.email).then(res => {

            console.log(res)

            if(res.success){

                this.setState({resendIn:60})
                this.startResendCodeInterval();

            }else{

                //alert(res.message);
                //continueBtn.value = "Continue";
                
            }
        })
        .catch(e=>{
            console.error(e);
            toast.error(e.message);
        })
        .finally(()=>{});
    }
      
    render(){
        console.log("Component", "OnBoardComponent");
        return (
            <>
                <div className="onboard-component">

                    <div className={`landing-onboarding-section ${this.props.mode === 'signup' ? 'hidden':''}`}>

                            <div className="onboard-title">
                                <h2>Let’s Get Started!</h2>
                                <p>We’re super excited to have you here. The best work for your business awaits you on the other side. </p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control w3dev-input" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <button type="submit" className="btn btn-primary w3dev-btn" id="continue" onClick={() => {console.log("hello");this.continueWithEmail()}}>Continue with Email</button>

                            
                    </div>

                    <div className={`signup-section-block ${this.props.mode === 'signup' ? '':'hidden'}`}>

                            <h2>Signup to 99xStartup</h2>
                            <div class="alert alert-danger hidden signup-alert" role="alert">
                                This is a danger alert—check it out!
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control w3dev-input" 
                                    id="signupEmail" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email" 
                                    disabled={this.props.mode === 'signup' ? false:true} 
                                />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>


                            <div className="form-group">
                                <label htmlFor="username">Confirmation Code</label>
                                <input type="username" className="form-control w3dev-input" id="signupCode" aria-describedby="emailHelp" placeholder="XXXXXX" />
                                <small id="emailHelp" className="form-text text-muted">We have sent a Confirmation code to your email. Not Received? 
                                    <br/>
                                    {this.state.resendIn > 0 ?
                                        <>Re-send code in {this.state.resendIn} seconds.</>
                                        :
                                        <>
                                            <span 
                                            className="resend-code-btn"
                                            onClick={this.resendOtp}
                                            >
                                                {this.state.resendCodeMessage}
                                            </span>
                                        </>
                                    }
                                </small>
                            </div>
                            

                            <div className="form-group">
                                <label htmlFor="signupName">Full Name</label>
                                <input type="text" className="form-control w3dev-input" id="signupName" aria-describedby="emailHelp" placeholder="Your Full Name" />
                            </div>

                            <div className="mobile-field">

                                {/* <label htmlFor="exampleInputEmail1">Phone Number</label> */}
                                {/* <br/> */}
                                <label htmlFor="username">Mobile</label>
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
                            
                            <div className="form-group">
                                <label htmlFor="passwordSignup">Set Password</label>
                                <input type="password" className="form-control w3dev-input" id="signupPassword" placeholder="New Password" />
                            </div>
                            
                            {/* <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}

                            <button type="submit" className="btn btn-primary w3dev-btn btn-signup" onClick={()=>this.Signup()}>Sign Up</button>

                            <div className="form-group">
                                <small id="emailHelp" className="form-text text-muted">
                                    By clicking the "Sign Up" button, you are creating a 99xStartup account, and you agree to 99X's <a href="#" className="muted-link">Terms of Use</a> and <a href="#" className="muted-link">Privacy Policy</a>
                                </small>
                            </div>

                    </div>

                    <div className="login-section hidden">

                        <div className="login-header">
                            <h2>Good to see you again!</h2>
                            <p>Let’s create something kickass today. Continue with your Google account or email address you use to sign in. </p>
                        </div>

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