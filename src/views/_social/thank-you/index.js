import React from "react";
import "./style.scss";
import { withRouter } from "react-router-dom";
import queryString from 'query-string';


import ENV from '../../../env.config'

class ThankYouPage extends React.Component {

  constructor(){
      super()

      this.state = {
          isSubscription: false,
          dashboard:'/user/orders'
      }
  }


  componentDidMount(){

      let w3_auth = null;
      if(localStorage.getItem("w3_auth")) w3_auth = localStorage.getItem("w3_auth");

      let params = queryString.parse(this.props.location.search)
      console.log("Params", params)

      let user_mode = 1;
      if(localStorage.getItem("user_type") && localStorage.getItem("user_type") == "2") user_mode = 2 

      this.setState({
        isSubscription: params.mode ? true:false,
        PORTAL_URL:`${ENV.PORTAL_URL}/orders/?token=${w3_auth}&user_mode=${user_mode}`,
      });

  }

  placeOrder(){
      console.log("Placing Order");
  }

  render(){

    return (
        <>
        <div className="content_wrapper page_thankyou container">

            <div className="box">

                <img src="https://ik.imagekit.io/99x/startup/pages/Group_1726_sFmUzgrbz.png" />

                <p className="order-id">
                    {this.state.isSubscription ? 'Subscription ID':'Order ID'}
                    :
                    #FO6F981AD782 
                </p>

                <p className="success-msg">
                    {this.state.isSubscription ? 'Your Subscription is Activated!':'Your Order is Placed!'}
                </p>

                <p className="success-desc">
                    Thank you so much for your order! Head over to our dashboard, submit your requirements to Kickoff your project now! We will send you an email confirmation shortly.
                </p>

                <a href={this.state.PORTAL_URL}>
                    <button>
                        Go to Dashboard
                    </button>
                </a>

            </div>

            <div className="row hidden">
                <div className="col-md-6">
                    <div className="left-card">
                        <div className="thank-you-container">
                            <div className="tick-icon">
                                <img className="tick" src={'https://99xstartups.s3.ap-south-1.amazonaws.com/assets/tick.png'}/>
                            </div>
                            <div className="thank-you-note">
                                <h2>Thank You</h2>
                                <h3>Your Order is Complete</h3>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div>
                            
                            <p>Proceed to Client Dashboard to kickstart the project</p>
                        </div>
                        {/* <Link href={this.state.dashboard} as={this.state.dashboard} to={this.state.dashboard}> */}
                        <a href={this.state.PORTAL_URL}>
                            <button>
                                Client Dashboard
                            </button>
                        </a>
                        {/* </Link> */}
                    </div>
                </div>  
                <div className="col-md-6">
                    <div className="card summary-card hidden">
                        <h2> Order Summary</h2>
                        <table>
                            <tr>
                                <td>Subtotal</td>
                                <td>1,17,000</td>
                            </tr>
                            <tr>
                                <td>Subtotal</td>
                                <td>13,000</td>
                            </tr>
                            <tr>
                                <th>Total   </th>
                                <th>1,30,000</th>
                            </tr>
                        </table>
                        
                    </div>
                    <br/>
                    <br/>
                    {/* <center>
                        <img src={ENV.CDN_BASE_URL + 'assets/payment_mode.png'} />
                    </center> */}
                </div>
            </div>
            
          
        </div>
        </>
    );
  }
}

export default withRouter(ThankYouPage)