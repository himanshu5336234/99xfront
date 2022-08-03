import React from "react";

import "./PaymentMethod.scss";
  
import { Collapse } from "react-bootstrap";

import W3RazorPay from "./razorpay/razorpay";
import W3Paypal from "./paypal/paypal";
import W3Stripe from "./stripe/stripe";

const ONETIME_PAYMENT = 1;
const RECURRING_PAYMENT = 2;

const PAYMENT_MODE = {
  STRIPE: 1,
  RAZORPAY: 2, 
  PAYPAL: 3
}

export default class extends React.Component {

  constructor(){
    super()
    this.state = {
      loading: false,
      showModal: true,
      stripe: null,
      paymentMethod: 1,
      paymentMethod1: true, 
      paymentMethod2: false,
      paymentMethod3: false,
      paymentType: ONETIME_PAYMENT,
      cart:{
        id: null,
      },
      price:{
        amount: 0, 
        currency: 'USD',
      }
    }
    
  }
  
  componentDidMount(){

    
    console.log("Initializing Stripe with Key, ", this.props.init.STRIPE.PUBLISHABLE_KEY)
    this.stripe = new W3Stripe(
      this.props.init.STRIPE.PUBLISHABLE_KEY,
      "#card-element"
    );
    
    const PaypalPayload = {
      client_id:this.props.init.PAYPAL.CLIENT_ID, 
      test_mode: this.props.init.PAYPAL.TEST_MODE,
      currency: this.props.cart.price.currency, 
      amount: parseInt(this.props.cart.price.amount/100), 
      el:"#paypal-button-container"
    };

    if(this.props.recurring ){
      this.setState({paymentType:RECURRING_PAYMENT})
      PaypalPayload.recurring = true;
      PaypalPayload.plan_id = this.props.paymentMeta.paypal.pricing['Standard'].id;
    }

    console.log("PaymentMethodRecurring", this.props.recurring)
    this.paypal = new W3Paypal(PaypalPayload);
    

    if(this.props.cart.price.currency == "INR"){
      this.rp = new W3RazorPay(this.props.init.RP.KEY);
    };

    document.querySelector("#pmCard").checked = true;
    this.loadGateway()


  }



  loadGateway() {

    console.log("PRICE COMPONENT", this.props.cart.price);
  
    this.setState({
      loading: false,
      showModal: true,
      stripe: null,
      paymentMethod: 1,
      paymentMethod1: true, 
      paymentMethod2: false,
      paymentMethod3: false,
      paymentType: ONETIME_PAYMENT,
      cart:this.props.cart,
      price:{
        amount: this.props.cart.price.amount, 
        currency: this.props.cart.price.currency,
      }
    });

    if(this.props.recurring ){
      this.state.paymentType = RECURRING_PAYMENT;
    }

    this.handleModalChange = this.handleModalChange.bind(this);
    this.fx = this.props.fx;
  }

  placeOrder(){
      console.log("Placing Order");
  }

  openModal(e){
    
    e.target.innerHTML = "Please Wait...";
    e.target.style.background = "linear-gradient(to right,#4893a8,#17b6e3 100%)";
    
    this.setState({
      showModal: true  
    });

    console.log("Open Modal");

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

  selectPaymentMethod(id){

      this.setState({
          paymentMethod: id,
          paymentMethod1: (id == 1) ? true: false,
          paymentMethod2: (id == 2) ? true: false,
          paymentMethod3: (id == 3) ? true: false,
      });

      if(id == 2){
        // Generate Order ID for Razorpay Server
      }

      if(id == 3){
        document.querySelector(".btn-confirm-payment").classList.add("hidden");
        document.querySelector("div.paypal").classList.remove("hidden");
      }else{
        document.querySelector(".btn-confirm-payment").classList.remove("hidden");
        document.querySelector("div.paypal").classList.add("hidden");
      }
  }


async processPayment(){
    
    // const paymentButton = document.querySelector(".btn-confirm-payment);
    this.setState({loading: true});

    try{

        const paymentMethod = this.state.paymentMethod;
        
        // OnDemand Payment
        if(!this.props.recurring){

          // Process via Stripe
          if(paymentMethod == 1){
            
            
            const PaymentIntent = await this.fx.getStripeIntent();
            console.log("Payment Intent", PaymentIntent);

            this.stripe.OnetimePayment(PaymentIntent.data, (err, paymentMethod)=>{
              
              console.log("STRIPE ONE TIME PAYMENT", err, paymentMethod);

              if(err) return alert(err.message)
              this.props.onSuccess({
                type: this.state.paymentType,
                method: this.state.paymentMethod,
                cart: this.state.cart,
                data: PaymentIntent.data
              });
            });

          }
      
          // Process Razorpay
          if(paymentMethod == 2){
      
            this.fx.getRazorPayOrderId().then(d=>{
      
              console.log("RP",d);
              this.setState({
                loading: false
              })
              
              if(d.success){

              this.rp.OnetimePayment(
                this.state.price.amount, 
                this.state.price.currency, 
                d.data.id, 
                (d)=>{
                  this.props.onSuccess({
                    type: this.state.paymentType,
                    method: this.state.paymentMethod,
                    cart: this.state.cart,
                    data: d
                  });
                }
              );

              }else{
                alert("Unknown Error Occured, Contact Support");
              }

            })

          
      
          }
          
          // Process via Paypal
          if(paymentMethod == 3){
            
            //this.paypal.OnetimePayment();
            this.props.onSuccess({
              type: this.state.paymentType,
              method: this.state.paymentMethod,
              cart: this.state.cart,
              data: null
            });

          }

        } else if(this.props.recurring){
          // Stripe
          if(paymentMethod == 1){

            const PriceId = this.props.paymentMeta.stripe.pricing['Standard']['INR'].id; 
            let StripePm = await this.stripe.createPaymentMethod(this.props.user.name, PriceId);
            let StripePaymentMethodId = StripePm.paymentMethod.id;
      
            this.fx.subscribeViaStripe(
              StripePaymentMethodId, 
              PriceId
            ).then(d=>{
              
              console.log("Subscription Data", d);
              if(d.code && parseInt(d.code/100) == 5){
                alert(`Error: ${d.message}`)
              }else{
                this.props.onSuccess({
                  type: this.state.paymentType,
                  method: this.state.paymentMethod,
                  cart: this.state.cart,
                  data: d.data
                });
              }

            }).catch(e=>{
              
              console.error("Subscription Error", e);
              alert("Error: ", e);

            })
      
            // this.setState({loading: false});
            
          }

          if(paymentMethod == 2){

            this.fx.getRazorPaySubscriptionId().then(d=>{
      
              console.log("RP",d);
              this.setState({
                loading: false
              })
              
              if(d.success){

                this.rp.subscribe(
                  d.data.id
                ,(res)=>{

                  this.props.onSuccess({
                    type: this.state.paymentType,
                    method: this.state.paymentMethod,
                    cart: this.state.cart,
                    data: res
                  });

                });

              }else{
                alert("Unknown Error Occured, Contact Support");
              }

            })

          }
          
          // Paypal
          if(paymentMethod == 3){
            
            const PriceId = this.props.paymentMeta.paypal.pricing['Standard'].id;

          }

      }
    }catch(error){

      console.error(error)
      alert(`Error: ${error.message}`)

    }
    finally{
      this.setState({loading: false});
    }
    
} 

  render(){

    return (
      <>
          
        {/* <StripeProvider apiKey={ENV.STRIPE_API_KEY}> */}
        
          <div className="content_wrapper page_checkout_payment container">

            <div className="row">
                <div className="col-md-6">
                  <div className="">
                    
                    <h2 className="light" style={{marginBottom:'45px'}}>Payment Options</h2>

                    <ul>
                        <li>
                            <label for="pmCard" className="pm-label">
                              <div className="list-select" onClick={()=>{this.selectPaymentMethod(1);}}>
                                <input type="radio" name="paymentMethodRadio" id="pmCard"  className="w3radio"/> 
                                <span className="w3custom-radio"></span>
                                <span className="pm-text">Add Debit/Credit Card </span>
                                <span className="disabled">Powered by <img src="https://ik.imagekit.io/99x/startup/revised/Vector_aDngICUF0.png"/></span>
                              </div>
                            </label>
                            <Collapse className="payment-method-body" in={this.state.paymentMethod1}>
                              <div>
                                <div id="card-element"></div>

                                {/* <div className="collect-card">
                                  <div className="card-details">
                                    <div className="cardNumberHolder">
                                      
                                      <label>Card Number</label>
                                      <div id="card-number" ></div>

                                    </div>
                                    <div className="cardDetailsHolder"></div>
                                    <div className="firstNameHolder"></div>
                                    <div className="lastNameHolder"></div>
                                  </div>
                                </div> */}

                              </div>
                            </Collapse>
                        </li>
                        {this.state.price.currency == "INR" ? 
                          <li>
                              <label for="pmRp" className="pm-label">
                                <div className="list-select" onClick={()=>{this.selectPaymentMethod(2);}}>
                                  <input type="radio" name="paymentMethodRadio" id="pmRp"  className="w3radio"/> 
                                  <span className="w3custom-radio"></span>
                                  <span className="logo"><img src="https://ik.imagekit.io/99x/startup/revised/Group_1539_Jo7BjnBr4w.png"/></span>
                                  <span className="pm-text">Debit Card/Credit Card/NetBanking/UPI </span>
                                </div>
                              </label>
                              <Collapse className="payment-method-body" in={this.state.paymentMethod2}>
                                <div style={{padding:'15px'}}>
                                  <p>Click On Confirm Button</p>
                                </div>
                              </Collapse>
                          </li>
                          :
                          ''
                        }
                        <li>
                            <label for="pmPaypal" className="pm-label"> 
                            <div className="list-select" onClick={()=>{this.selectPaymentMethod(3);}}>
                              <input type="radio" name="paymentMethodRadio" id="pmPaypal" className="w3radio"/> 
                              <span className="w3custom-radio"></span>

                              <span className="pm-text"><img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" /></span>
                              
                            </div>
                            </label>
                            <Collapse className="payment-method-body" in={this.state.paymentMethod3}>
                                <div> </div>
                                {/* <div className="paypal">
                                    <div id="paypal-button-container"></div>
                                </div> */}
                            </Collapse>
                        </li>
                    </ul>
                    


                  </div>
                </div>
                <div className="col-md-6">
                    <div className="card summary-card">
                        {/* <h2>Summary</h2> */}
                        { this.props.children }
                        {/* <table>
                            <tbody>
                            <tr>
                                  <td>Subtotal</td>
                                  <td>
                                    { this.props.cart.price.currencySymbol }
                                    { this.props.cart.price.amount }
                                  </td>
                              </tr>
                              <tr>
                                  <td>Subtotal</td>
                                  <td>
                                    { this.props.cart.price.currencySymbol }
                                    { this.props.cart.price.amount }
                                  </td>
                              </tr>
                              <tr>
                                  <th>Total   </th>
                                  <th>
                                    { this.props.cart.price.currencySymbol }
                                    { this.props.cart.price.amount }
                                  </th>
                              </tr>
                            </tbody>
                        </table> */}

                        <div id="stripeForm" >
                          
                          <div className="paypal hidden">
                          
                              <div 
                              // style={{position:'fixed',top:'-1000px',left:'-1000px'}}
                              >
                                <div id="paypal-button-container"></div>
                              </div>
                              
                              <div className="paypal-notice hidden">
                                <p style={{marginBottom:"0px"}}><b>Coming Soon</b></p>
                                <span className="small">Please use other payment method.</span>
                              </div>
                          
                          </div>


                          <button type="submit" style={{visibility:'visible'}} className="btn-confirm-payment" onClick={()=>this.processPayment()}> 
                            { this.state.loading ? 
                              'Loading...'
                              :
                              <span>Confirm & 
                                  {
                                      this.props.recurring ? ' Subscribe':'Pay'
                                  }
                              </span>
                            }
                            
                          </button>
                          {this.props.recurring ? 
                            <div className="payment-notice">
                              7 days free trial included. <br/>
                              <span className="small"> A small amount may be charged to validate the card and will bbe reversed.</span>
                            </div>
                          :
                            <div className="payment-notice">
                              SSL Secured Payment <br/>
                              <span className="small"> You will be charged $565.94 Total amount includes currency conversion fees.</span>
                            </div>
                          }

                        </div>
                    </div>
                    <br/>
                    <br/>
                    <center>

{/*                     
                        <img src={ENV.CDN_BASE_URL + 'assets/payment_mode.png'} /> */}
                    </center>
                </div>
            </div>
            
          </div>
        
      </>
    );
  }
}
