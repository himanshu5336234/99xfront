import React, { useEffect } from "react";
import OnboardComponent from "../../../../components/onboard-component";
import "./style.scss";
import qs from "querystring"
import { apiRequest } from '../../../../api';
import { withRouter } from "react-router-dom";

const LoginPage = (props) => {

    let userMode = window.location.hash == "#creatorSignup" ? 'SELLER':'BUYER'

    useEffect(()=>{
        
        const params = qs.parse(props.location.search ? props.location.search.replace("?",""):"");
        if(params.email){
            document.querySelector("#email").value = params.email;
        }
        
    },[props])
    

    const initLogin = (payload) => {
        
            return apiRequest({
                url:"/auth/init",
                method:"POST",
                data:payload
            })
    
    }

    const loginUser = (payload) => {
       
            return new Promise((resolve, reject)=>{
            
                apiRequest({
                    url:"/auth/login",
                    method:"POST",
                    data: payload
                }).then(d=>{
    
                    if(d.success){
                        resolve(d);
                    }else{
                        reject(d);
                    }
    
                }).catch(e=>{   
                    reject(e)
                })
            })

    }

    const createUser = (payload) => {
        
        return new Promise((resolve, reject)=>{
            
            apiRequest({
                url:"/auth/create",
                method:"POST",
                data:payload
            }).then(d=>{

                if(d.success){
                    resolve(d);
                }else{
                    reject(d);
                }

            }).catch(e=>{   
                reject(e)
            })
        })
    }

    const loginSuccess = () => {

        if(localStorage.getItem("after_login")){
    
            let new_location = localStorage.getItem("after_login");
            localStorage.removeItem("after_login")
    
            window.top.location = new_location;
        
        }else{
            
            window.top.location = "/";
    
        }
        
    }

    return(
        <>
            <div className="layout-main-container">
                <section className="signup-section">
                <div className="signup-container">
                    <div className={`signup-block ${userMode == 'SELLER' ? 'signup-creator':'signup-business'}`}>
                    
                    </div>
                    <div className="signup-block signup-form">
                    <div className="">
                        <div className="">
                        
                        <OnboardComponent
                            fx={{
                                initLogin,
                                loginUser,
                                createUser
                            }}
                            userMode={userMode}
                            onSuccess={loginSuccess}
                        ></OnboardComponent>

                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        </>
    )
}

export default withRouter(LoginPage)