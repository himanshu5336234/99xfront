import React, { useEffect } from "react";
import OnboardComponent from "../../../../components/onboard-component";
import "./style.scss";
import qs from "querystring"
import { apiRequest } from '../../../../api';
import { withRouter } from "react-router-dom";
import Signup from "../../../../components/onboard-component/Signup";

const CreateAccount = (props) => {

    useEffect(()=>{
        
        const params = qs.parse(props.location.search ? props.location.search.replace("?",""):"");
        if(params.email){
            document.querySelector("#email").value = params.email;
        }
        
    },[props])
    

    const initLogin = (email) => {
        
            return apiRequest({
                url:"/auth/init",
                method:"POST",
                data:{
                    email
                }
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
        
    }

    return(
        <>
            <div className="layout-main-container">
                <section className="signup-section">
                <div className="signup-container">
                    <div className="signup-block signup-head">
                    
                    </div>
                    <div className="signup-block signup-form">
                    <div className="">
                        <div className="">
                        
                        <Signup
                            fx={{
                                initLogin,
                                loginUser,
                                createUser
                            }}
                        />
                        {/* <OnboardComponent
                            mode="signup"
                            fx={{
                                initLogin,
                                loginUser,
                                createUser
                            }}
                            onSuccess={loginSuccess}
                        ></OnboardComponent> */}

                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        </>
    )
}

export default withRouter(CreateAccount)