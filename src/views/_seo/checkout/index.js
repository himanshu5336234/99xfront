import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './style.scss';
import W3Modal from '../../../components/w3modal/W3Modal';
import OnboardComponent from '../../../components/onboard-component'

import GoogleLogin from 'react-google-login';

import {apiRequest} from "../../../api"
import W3Counter from '../../../components/w3counter/W3Counter';

import SubscriptionPlanData from "../../../data/subscription_plans"
import OnDemandData from "../../../data/onetime_plans"


class Checkout extends React.Component{

    constructor(){
        super()
        this.state = {
            activeTab: 'basic',
            loading: false,
            showModal: false,
            stripe: null,
            googleLoginText:"Continue with Google",
            cart: null,
            showPlanTypeSelector: true,
            isCartUpdated: false,
            key_features: [],
            resources: []
        };

        this.handleModalChange = this.handleModalChange.bind(this); 
        this.responseGoogle = this.responseGoogle.bind(this);
        this.switchServiceTier = this.switchServiceTier.bind(this);
    }

    async componentDidMount(){
        
        const cartData = await apiRequest({
            method:'GET',
            url:'/cart',
            includeUser: true
        });

        console.log("Cart Data", cartData);
        
        let cart = cartData.data[0] || null;
        cart.service = {...cart.service, quantity: 1}

        if(cart.service.serviceType == "SUBSCRIPTION" ){
            let SubscriptionPlanDataArray = [];
            let SubscriptionPlanDataKeys = Object.keys(SubscriptionPlanData);

            for(let i=0; i < SubscriptionPlanDataKeys.length; i++){
                let Services = SubscriptionPlanData[SubscriptionPlanDataKeys[i]];
                for(let j = 0; j < Services.length; j++) SubscriptionPlanDataArray.push(Services[j])
            }

            let KeyF = SubscriptionPlanDataArray.filter(s => s.id === cart.service.id)

            let statePayload = {
                cart,
                key_features:  KeyF[0].key_features,
                resources: KeyF[0].resource || null
            };

            if(cart.service.title.indexOf("All Access") != -1) statePayload.showPlanTypeSelector = false

            this.setState(statePayload)
        }else{
            this.setState({
                cart,
            })
        }
     

    }
    continueToPayment(){
        window.top.location = "/checkout/payment";
    }

    toggleTab = (_tab) => {
        this.setState({activeTab: _tab});
    }

    openModal(e){
    
        if(!localStorage.getItem('w3_auth')){
    
          e.target.innerHTML = "Please Wait...";
          e.target.style.background = "linear-gradient(to right,#4893a8,#17b6e3 100%)";
          
          this.setState({
            showModal: true  
          });
    
        }else{
            if(this.state.isCartUpdated){
                
                let quantity = this.state.cart.service.quantity || 1;
                let servicePlan = this.state.cart.servicePlan;
                let serviceId = this.state.cart.service.id;
                

                let cartObject = {
                    items:[{id:'600e8d73b86ef735d8119808',serviceId, item:['Pitch Deck']}], 
                    quantity, 
                    servicePlan, 
                    serviceId
                };
           

                apiRequest({
                    method:'POST',
                    url:'/cart',
                    data: cartObject
                }).then(d=>{
                    
                    if(d.success){
                        
                        localStorage.setItem("w3_cart", d['w3_cart']);
                        localStorage.setItem("cartId", d.cartId);
                        this.props.history.push('/checkout/payment');
        
                    }
                
                })

            }
            else return window.top.location = "/checkout/payment";
        }
    }

    switchServiceTier(e){
        
        const tierName = e.target.value;
        console.log("Tier", tierName);
        console.log("Service", this.state.cart.service);

        this.setState({
            isCartUpdated: true,
            cart:{
                ...this.state.cart,
                price: {
                    ...this.state.cart.price,
                    amount:this.state.cart.service.features[tierName].price.amount*this.state.cart.service.quantity,
                },
                servicePlan: tierName
            }
        })
        
    }

    handleModalChange(modalProps){
        console.log("Modal Change", modalProps);
        // this.setState({
        //   loading: false
        // })
        // this.setState(prevState => {
        //   return {
        //     ...prevState,
        //     loading: false
        //   }
        // });
    
    }

    async responseGoogle(response){
    
        console.log(response);
        // parseCookies()
        
        let token = response.tokenId;
        
        if(token){
          
          let response = await apiRequest({
              method:'GET',
              url:`auth/google-login?token=${token}`,
              includeUser: true
          })

          if(response.success){

              console.log(response);
    
              localStorage.setItem("user-slug", response.data.user.id);
              localStorage.setItem("user-email", response.data.user.email);
              this.setState(prevState=>{
                return {
                  ...prevState, 
                  googleLoginText:"Please Wait..."
                }
              });
    
              this.continueToPayment();
    
              //window.location.reload();
    
          }
    
        }   
    
    }

    render(){
        
        if(this.state.cart){
        
            let BannerImage = null;
            let selectedService = null;
           
            // OnDemand Service
            if(this.state.cart.service.serviceType != "SUBSCRIPTION"){
                let selectedServiceIndex = Object.keys(OnDemandData).filter(e=>{
                    return OnDemandData[e].id == this.state.cart.service.id
                })

                selectedService = OnDemandData[selectedServiceIndex[0]]

                BannerImage = selectedService.icons.d228x202 || this.state.cart.service?.banners[0]
            }

        return (
        
        <div className="fluid">

            <section className="fluid">

           

            </section>
            <section className="fluid checkout-container">
                <div className="container">
                    <div className="row">

                        {/* For OnDemand Checkout */}
                        {this.state.cart.service.serviceType != "SUBSCRIPTION" ?
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 on-demand-details">

                            <div className="product-details">
                                <img src={BannerImage} className="product-image"/>
                                <div className="product-meta">
                                    
                                    {
                                        this.state.cart ? 
                                        <>
                                            <div className="product-tag-chips">
                                                { this.state.cart.service.serviceType == "FIXED" ? <div className="product-title">{this.state.cart.service.title}</div>:null}
                                                <div className="product-type">
                                                    {this.state.cart.service.serviceType == "FIXED" ? 'One Time Service':'Monthly Subscription'}
                                                </div>
                                            </div>

                                            <div className="fluid d-flex flex-column flex-sm-column flex-md-row justify-content-between hidden">
                                                <h2 className="font-20 weight-700">
                                                    {
                                                        this.state.cart.service.title
                                                    }
                                                </h2>
                                                
                                                
                                            </div>

                                            <p className="text-justify">
                                                {
                                                     this.state.cart.service.subtitle
                                                } 
                                            </p>

                                            <p className="checkout-service-stars">
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                                <span className="rating-count"> </span>
                                                <span className="review-count">({selectedService.reviews_count} Reviews)</span>
                                            </p>

                                        </>:null
                                    }
                                </div>
                            </div>
                            <div className="product-description">
                                <div>
                                    <p style={{paddingTop: '10px',borderTop: '1px solid #B0B0B0'}}>
                                        {this.state.cart && this.state.cart.service.features[this.state.cart.servicePlan].subtitle}
                                    </p>
                                    
                                    <div className="fluid d-flex flex-row flex-wrap mb-20 mt-20">
                                        <div className="">
                                            {/* <i className="icons icon-clock font-14"></i> */}
                                            <img className="icon" src="https://ik.imagekit.io/99x/startup/Group_79_1yEB9KIyW.svg"/>
                                            <span className="ph-10 font-16">{this.state.cart && this.state.cart.service.features[this.state.cart.servicePlan]?.delivery_in?.value} delivery</span>
                                        </div>
                                        <div className="">
                                            {/* <i className="icons icon-refresh font-14"></i> */}
                                            <img className="icon" src="https://ik.imagekit.io/99x/startup/Group_45_g8ES5MTo3D.svg"/>
                                            <span className="ph-10 font-16">{this.state.cart && this.state.cart.service.features[this.state.cart.servicePlan]?.revisions} Revisions</span>
                                        </div>
                                    </div>

                                    <ul className="d-flex flex-row flex-wrap">
                                        
                                        {this.state.cart && this.state.cart.service.features[this.state.cart.servicePlan].list.map((l,i)=>(
                                            <li className="mb-15 col-12 col-sm-12 d-flex flex-row">
                                                <span><i className="fa fa-check custom-check" aria-hidden="true"></i></span>
                                                <span>{l}</span>
                                            </li>
                                        ))}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 subscription-details">

                            <div className="product-details">
                                <div className="product-meta">
                                    
                                    {
                                        this.state.cart ? 
                                        <>
                                            <div className="product-tag-chips">
                                                { this.state.cart.service.serviceType == "FIXED" ? <div className="product-title">{this.state.cart.service.title}</div>:null}
                                                <div className="product-type">
                                                    {this.state.cart.service.serviceType == "FIXED" ? 'One Time Service':'Monthly Subscription'}
                                                </div>
                                            </div>

                                            <div className="fluid d-flex flex-column flex-sm-column flex-md-row justify-content-between">
                                                <h2 className="service-title">
                                                    {
                                                        this.state.cart.service.title
                                                    }
                                                </h2>
                                                
                                                
                                            </div>
                                            {/* <p className="text-justify">
                                                <ul>
                                                    <li>Bill Monthly</li>
                                                    <li>Bill Quaterly</li>
                                                </ul>
                                            </p> */}

                                            <div className="plan-tenure">

                                                <label for="ptMonthly">
                                                    <input type="radio" name="paymentMethodRadio" id="ptMonthly"  className="w3radio" checked="true"/>
                                                    <span className="w3custom-radio"></span>
                                                    <span className="pm-text">Bill Monthly</span>
                                                </label>

                                                {/* <label for="ptQuaterly">
                                                    <input type="radio" name="paymentMethodRadio" id="ptQuaterly"  className="w3radio" />
                                                    <span className="w3custom-radio"></span>
                                                    <span className="pm-text">Bill Quaterly</span>
                                                    <span className="offer-btn">Save 30%</span>
                                                </label> */}

                                            </div>
                                            
                                            <h3>Key Features</h3>
                                            <p className="key-features">
                                                <ul>
                                                    {this.state.key_features.map((f,i)=>(
                                                        <li key={i}>
                                                            {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </p>
                                                
                                            {this.state.resources ? 
                                                <>
                                                    <h3>Resource Assigned</h3>
                                                    <p className="resources">
                                                        <ul>
                                                                {this.state.resources.map((r,i)=>(
                                                                    <li key={i}>
                                                                        <img src={r.icon}/><br/>
                                                                        <span>{r.title}</span>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    </p>
                                                </>
                                            :null}
                                        </>:null
                                    }
                                </div>
                            </div>
                            <div className="product-description">
                                <div>
                                    {/* <p>
                                    
                                    </p> */}
                                    <ul className="d-flex flex-row flex-wrap">
                                        
                                        {this.state.cart && this.state.cart.service.features[this.state.cart.servicePlan].list.map((l,i)=>(
                                            <li className="mb-15 col-12 col-sm-12 d-flex flex-row">
                                                <span><i className="fa fa-check custom-check" aria-hidden="true"></i></span>
                                                <span>{l}</span>
                                            </li>
                                        ))}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        }

                        {this.state.cart ? 
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">

                            <div className="custom-tab-1 page_checkout">
                                <div className="fluid">
                                    <h2 className="weight-700 family-Inter font-18">
                                    {this.state.cart.service.serviceType != "SUBSCRIPTION" ? 'Your':null} 
                                    Order Summary</h2>

                                    {/* Checkut for Subscription */}
                                    <ul className={`fluid mb-15 ${this.state.cart.service.serviceType == "SUBSCRIPTION" ? 'border-bottom':'hidden'}`}>
                                        
                                        {this.state.showPlanTypeSelector &&
                                            <li className="fluid d-flex flex-row justify-content-between pv-10 control-quantity align-items-center">
                                                <span className="plan-label">
                                                    Plan Type: 
                                                </span>
                                                <select 
                                                onChange={(e)=>{
                                                    this.switchServiceTier(e);
                                                }}
                                                className="product-tier"
                                                value={this.state.cart.servicePlan}
                                                >
                                                    <option value="Standard">Essential</option>
                                                    <option value="Premium">Premier</option>
                                                    <option value="Enterprise">Prime</option>
                                                </select>
                                            </li>
                                        }

                                        <li>
                                            <p>Suitable for SMEs and small businesses to manage their Digital Marketing Frugally. </p>
                                        </li>
                                    </ul>

                                    {/* Checkout for OnDemand Service */}
                                    <ul className={`fluid mb-15 ${this.state.cart.service.serviceType != "SUBSCRIPTION" ? '':'hidden'}`}>
                                        <li className="fluid d-flex flex-row justify-content-between pv-10 control-quantity border-bottom ">
                                            <select 
                                            onChange={(e)=>{
                                                this.switchServiceTier(e);
                                            }}
                                            className="product-tier"
                                            value={this.state.cart.servicePlan}
                                            >
                                                <option value="Standard">Essential</option>
                                                <option value="Premium">Premier</option>
                                                <option value="Enterprise">Prime</option>
                                            </select>
                                            <span className="counter">
                                                <W3Counter
                                                minValue={1}
                                                initialValue={this.state.cart.serviceQuantity}
                                                onCounterChange={(d)=>{
                                                    console.log(d.counter);
                                                    console.log(this.state.cart)

                                                    this.setState({
                                                        isCartUpdated: true,
                                                        cart:{
                                                            ...this.state.cart, 
                                                            price:{
                                                                ...this.state.cart.price, 
                                                                amount: this.state.cart.service.features[this.state.cart.servicePlan].price.amount*d.counter
                                                            },
                                                            service:{
                                                                ...this.state.cart.service, 
                                                                quantity: d.counter
                                                            }
                                                        }
                                                    })

                                                }}
                                                />
                                            </span>
                                        </li>
                                    </ul>
                                    <ul className="fluid mb-15">
                                        <li className="fluid d-flex flex-row justify-content-between pv-10">
                                            <span>Subtotal</span>
                                            <span>
                                                { this.state.cart.price.currencySymbol }
                                                { parseFloat((this.state.cart.price.amount)/100).toFixed(2) }
                                            </span>
                                        </li>
                                        <li className="fluid d-flex flex-row justify-content-between border-bottom pv-10">
                                            <span>
                                                Service Fee
                                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                                            </span>
                                            <span>
                                                { this.state.cart.price.currencySymbol }
                                                0
                                            </span>
                                        </li>
                                        <li className="fluid d-flex flex-row justify-content-between pv-10">
                                            <span className="weight-700 family-Inter">Total</span>
                                            <span className="weight-700 family-Inter">
                                                { this.state.cart.price.currencySymbol }
                                                { parseFloat(this.state.cart.price.amount/100).toFixed(2) }
                                            </span>
                                        </li>
                                        {this.state.cart.service.serviceType != "SUBSCRIPTION" ?
                                        <li className="fluid d-flex flex-row justify-content-between pv-10">
                                            <span className="weight-400">Delivery Time</span>
                                            <span className="weight-400">
                                                4 Days
                                            </span>
                                        </li>
                                        :null}
                                    </ul>
                                    <button 
                                    onClick={
                                        (e) =>{
                                            this.openModal(e)
                                        }
                                    }
                                    className="checkout-btn featured aqua active flex-fill justify-content-center font-20">
                                         {
                                         this.state.loading ?
                                            'Please wait...'
                                            :
                                            this.state.cart.service.serviceType == "SUBSCRIPTION" ? 'Continue':'Place Order'

                                         }
                                    </button>
                                   
                                    <NavLink exact to={'/checkout'} className="custom-link family-Inter weight-700 justify-content-center disabled">
                                        You won't be charged yet
                                    </NavLink>
                                </div>
                            </div>

                            <div style={{width:'100%', textAlign:'center', margin:'10px auto'}}>
                                <img style={{margin:'auto'}} src={'https://ik.imagekit.io/99x/startup/Group_1536_mxf2BpLoA.png'} />
                            </div>

                        </div>
                        :null}
                    </div>
                </div>
            </section>

            <center>


                            <W3Modal
                            show={this.state.showModal}
                            onClick={this.openModal}
                            onModalChange={this.handleModalChange}
                            backdrop="static"
                            title="Login to Continue"
                            showFooter="false"
                            >
                            
                            <div className="row w3-form">
                                <div className="col-12">

                                <OnboardComponent
                                    onSuccess={this.continueToPayment}
                                    fx={{
                                        initLogin:(email)=>{

                                            return apiRequest({
                                                url:"/auth/init",
                                                method:"POST",
                                                data:{
                                                    email
                                                }
                                            })
                                    

                                        },
                                        loginUser: (payload) =>{
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
                                        },
                                        createUser: (payload) =>{

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
                                    }}
                                ></OnboardComponent>
                                <br/>
                                <GoogleLogin
                                    className="google_signin"
                                    clientId="838243604209-spnm298push43rl9eud52bvg821qbq1c.apps.googleusercontent.com"
                                    buttonText={this.state.googleLoginText}
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    // cookiePolicy={'single_host_origin'}
                                />
                                </div>
                                
                                <div className="col-12" style={{display:'none'}}>
                                <div className="form-group">
                                    <input 
                                    type="text"
                                    placeholder="Mobile Number"
                                    />
                                </div>
                                </div>

                            </div>
                            </W3Modal>
                            
                           
            </center>


        </div>
        );
    }
        return (<>Please Wait...</>)
    }
}

export default withRouter(Checkout)