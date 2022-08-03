import React, { useState } from "react"
import GreatCompany from "../../components/greatCompany"
import JumbleBlock from "../../components/jumbleBlock";
import StillHaveQuestions from "../../components/stilHaveQuestion"
import { apiRequest } from "../../api"


import "./style.scss";
const PlayButton = require("../../assets/images/play-button.png")
const VideoBg = require("../../assets/images/VideoBackground.png")

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function GetADemo(props){
    
    let [error, showError] = useState(null)
    let [success, showSuccess] = useState(null)

    const SubmitForm = () => {
        let fname = document.querySelector("#fname")
        let lname = document.querySelector("#lname")
        let email = document.querySelector("#email")
        let phone = document.querySelector("#phone")
        let jobtitle = document.querySelector("#jobtitle")
        let submitBtn = document.querySelector("button.form-submit")

        let fi = [fname, lname, email, phone, jobtitle]
        fi.forEach(e=>{
            if(e.value.length <= 2)  return showError("All Fields are Required")
        })

        if(!validateEmail(email.value)) return showError("Please enter a valid email")

        if(phone.length < 10) return showError("Enter a valid Phone")

        submitBtn.innerHTML = "Please Wait..."
        submitBtn.disabled = "disabled"


        apiRequest({
            method:"POST",
            url:'crm/demo',
            data:{
                first_name:fname.value,
                last_name:lname.value,
                email:email.value,
                phone:phone.value,
                job_title: jobtitle.value
            }
        }).then(d=>{
            submitBtn.innerHTML  = "Done"
            showSuccess(d['message'] || "Response Received")
        })
        
    }

    return (
        <div className="get-a-demo">



            <section>
                <div className="container m-30">

                    <div className="row" style={{minHeight:"350px"}}>

                        <div className="col-xs-12 col-md-7 h-100 left" style={{padding:'50px 5px'}}> 
                            <div className="left-container">
                                <h2 className="weight-500">
                                    It's Demo Time!
                                </h2>
                                <p>
                                    Let us take you on a journey, where we help you build and scale your vision, engage meaningfully, and build long-lasting relationships with your audience. Leave your details, so we connect with the right people, to help you grow. 
                                </p>
                            </div>
                            <img src="https://ik.imagekit.io/99x/startup/revised/shutterstock_1751484266_1_UABEdWE2e.png" className="extended-img"/>
                        </div>

                        <div className="col-xs-12 col-md-5 right">
                            <div className="right-container">
                                <h3>Tell us a bit about yourself, and we'll tell you a lot more about us.</h3>
                                <div className="form">
                                    <div className="form-group c6">
                                        <label>First Name</label>
                                        <input type="text" id="fname"/>
                                    </div>
                                    <div className="form-group c6">
                                        <label>Last Name</label>
                                        <input type="text" id="lname" />
                                    </div>
                                    <div className="form-group c12">
                                        <label>Work Email</label>
                                        <input type="email" id="email" />
                                    </div>
                                    <div className="form-group c12">
                                        <label>Phone number</label>
                                        <input type="text" id="phone"/>
                                    </div>
                                    <div className="form-group c12">
                                        <label>Job Title</label>
                                        <input type="text" id="jobtitle" />
                                    </div>
                                    {error ? 
                                    <div className="form-group c12 error">
                                        <span>{error}</span>
                                    </div>
                                    :null}

                                    {success ? 
                                    <div className="form-group c12 success">
                                        <span>{success}</span>
                                    </div>
                                    :null}

                                    <div className="form-group c12">
                                        <button 
                                        className="form-submit"
                                        onClick={()=>SubmitForm()}>
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <center>
                                <img src="https://ik.imagekit.io/99x/startup/revised/Group_1252_Od2Kx2-bi.png"/>
                            </center>
                        </div>
                    </div>
                </div>
            </section>
          
        </div>
    )
}