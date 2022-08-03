import React from 'react';
import {  withRouter } from 'react-router-dom';

import './style.scss';
import FAQ from '../../components/faq';
import RatingViewBar from '../../components/ratingViewBar';
import FeaturedCategory from '../../components/featuredCategory';

import {apiRequest} from "../../api"
import { connect } from 'react-redux';

import ServicePricing from './pricing';
import OneTimeProductData from '../../data/onetime_plans'

const productImage = require('../../assets/images/main/product.png');
const productVideoImage = require('../../assets/images/main/product-video.png');
const reviewImage = require('../../assets/images/main/review.png');
const countryImage = require('../../assets/images/main/Emoji.png');

class Product extends React.Component{
    

    constructor(){

        super();
        this.state = {
            service: null,
            loading: false,
            activeTab: 'basic',
            cart:{
                price:0
            },
            recurring: null
        };

        

    }

    fetchService(slug){

        apiRequest({
            method:"GET",
            url:`service/${slug}`
        }).then(d=>{

            if(d.code === 404) window.top.location = "/not-found";
            console.log("API RES", d);

            let Service = d;
            let statePayload = {
                service: Service,
                cart:{
                  price:{},
                  serviceId: Service.id,
                  serviceType: '',
                  items:[],
                  cartButtonLoading: false,
                },
                recurring: false
              };
          
              if(Service.serviceType == "SUBSCRIPTION"){
          
                statePayload.cart.price.amount = Service.startingPrice;
                statePayload.cart.price.currency = Service.startingPriceUnit;
                statePayload.cart.price.unit = Service.startingPriceSuffix;
                statePayload.recurring = true;

              }else if(Service.serviceType == "FIXED"){
                
                statePayload.cart.price = {
                    isCurrencyPrefix: Service.microService[0].price.isCurrencyPrefix,
                    currencySymbol:  Service.microService[0].price.currencySymbol,
                    currency:  Service.microService[0].price.currency,
                    amount: 0,
                    unit: 'per creative',
                };

              }
              
              statePayload.cart.serviceType = Service.serviceType;
              this.setState(statePayload);

              console.log("STATE", this.state)

        })
    }

    componentDidMount(){

        const ServiceSlug = this.props.match.params.id;
        // this.fetchService(ServiceSlug);
    
    }

    toggleTab = (_tab) => {
        this.setState({activeTab: _tab});
    }

    
    addToCartAndContinue(cart, callback){
        
        apiRequest({
            method:'POST',
            url:'/cart',
            data: cart
        }).then(d=>{
            
            if(d.success){
                
                localStorage.setItem("w3_cart", d['w3_cart']);
                localStorage.setItem("cartId", d.cartId);
                callback(null, d);

            }
            console.log("Add to Cart", d);
            // 
        })


    }

    render(){
        return (<div className="fluid pv-30">
            <section className="fluid pv-30">
                <div className="container single-service-page">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="fluid d-flex flex-column align-items-start">
                                <button className="custom-button blue active family-PTsans d-flex align-items-center categroy-button">
                                    <i className="fa fa-star" aria-hidden="true"></i> Articles & Blogs
                                </button>
                                <div className="fluid">
                                    <h1 className="font-24 weight-700 service-title">
                                        {this.state.service ? this.state.service.title:null}
                                    </h1>
                                    <p>
                                        <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                        <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                        <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                        <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                        <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                        <span className="font-12 ph-15">(97 Reviews)</span>
                                    </p>
                                </div>
                                <img src={productImage} className="img-fluid fluid"/>
                                <div className="fluid pv-20">
                                    <h2 className="font-20 weight-700 family-Inter">Description:</h2>
                                    <p className="text-justify family-Inter">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <ul className="d-flex flex-row flex-wrap">

                                        {
                                            ['Vetted Industry Specific','Dedicated Account Manager','Vetted Industry Specific','Vetted Industry Specific'].map((ad,i)=>(
                                                <li className="mb-15 col-12 col-sm-6 d-flex flex-row">
                                                    <span><i className="fa fa-check custom-round-check" aria-hidden="true"></i></span>
                                                    <span className="family-Inter">Vetted Industry Specific</span>
                                                </li>
                                            ))
                                        }
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {this.state.service !== null ?
                            <ServicePricing
                                recurring={true}
                                service={this.state.service}
                                checkout={this.addToCartAndContinue}
                            />
                            :null
                        }
                        

                       
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="fluid pv-20 mb-30">
                                <h2 className="font-20 weight-700">How it works:</h2>
                                <img src={productVideoImage} className="img-fluid fluid"/>
                            </div>
                            <div className="fluid pv-20">
                                <h2 className="font-20 weight-700">So, why us?</h2>
                                <div className="row d-flex flex-row mt-20">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-10">
                                        <h3 className="font-20 weight-700">
                                            <i className="fa fa-star font-16" aria-hidden="true"></i>
                                            <span className="ph-15">4.8/5 rating</span>
                                        </h3>
                                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-10">
                                        <h3 className="font-20 weight-700">
                                            <i className="fa fa-star font-16" aria-hidden="true"></i>
                                            <span className="ph-15">4.8/5 rating</span>
                                        </h3>
                                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-10">
                                        <h3 className="font-20 weight-700">
                                            <i className="fa fa-star font-16" aria-hidden="true"></i>
                                            <span className="ph-15">4.8/5 rating</span>
                                        </h3>
                                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="fluid pv-20 mb-30">
                                <h2 className="font-20 weight-700 color-aqua">FAX</h2>
                                <FAQ />
                            </div>
                            <div className="fluid pv-20 mb-30">
                                <div className="fluid d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex">
                                        <h2 className="font-20 weight-700 margin-none">25 Reviews</h2>
                                        <span className="ph-15">
                                            <i className="fa fa-star color-aqua font-16" aria-hidden="true"></i>
                                            <i className="fa fa-star color-aqua font-16" aria-hidden="true"></i>
                                            <i className="fa fa-star color-aqua font-16" aria-hidden="true"></i>
                                            <i className="fa fa-star color-aqua font-16" aria-hidden="true"></i>
                                            <i className="fa fa-star color-aqua font-16" aria-hidden="true"></i>
                                            <span className="font-16 ph-15 weight-700 family-PTsans color-aqua">5.0</span>
                                        </span>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <span className="ph-15">Sort By:</span>
                                        <div className="form-group flex-fill margin-none">
                                            <select className="form-control font-16">
                                                <option value="">Most Relevent</option>
                                                <option value="">Most Relevent</option>
                                                <option value="">Most Relevent</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-20">
                                    <div className="col-12 col-sm-12 col-lg-6">
                                        <RatingViewBar review={25} totalReview={30} label={5}/>
                                        <RatingViewBar review={5} totalReview={30} label={4}/>
                                        <RatingViewBar review={0} totalReview={30} label={3}/>
                                        <RatingViewBar review={0} totalReview={30} label={2}/>
                                        <RatingViewBar review={0} totalReview={30} label={1}/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-lg-6">
                                        <span className="font-18 family-PTsans weight-700">Rating Breakdown</span>
                                        <div className="fluid d-flex justify-content-between mt-10">
                                            <span className="font-14 family-PTsans weight-700">Quick Turnaround</span>
                                            <span className="font-14 family-PTsans weight-700">
                                                5 <i className="fa fa-star color-aqua font-12" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div className="fluid d-flex justify-content-between mt-10">
                                            <span className="font-14 family-PTsans weight-700">Content Quality</span>
                                            <span className="font-14 family-PTsans weight-700">
                                                5 <i className="fa fa-star color-aqua font-12" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div className="fluid d-flex justify-content-between mt-10">
                                            <span className="font-14 family-PTsans weight-700">Support</span>
                                            <span className="font-14 family-PTsans weight-700">
                                                5 <i className="fa fa-star color-aqua font-12" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fluid pv-20 mb-30">
                                <div className="product-review border-top pv-20">
                                    <div className="fluid d-flex flex-row">
                                        <span>
                                            <img src={reviewImage} className="review-profile-img"/>
                                        </span>
                                        <div className="fluid d-flex flex-column">
                                            <p className="weight-700 family-PTsans margin-none">
                                                Mike Ross
                                                <span className="ph-15">
                                                    <i className="fa fa-star color-aqua font-12" aria-hidden="true"></i> 5
                                                </span>
                                            </p>
                                            <div className="fluid font-12 d-flex align-items-center">
                                                <img src={countryImage} className="country-icon"/>
                                                United State
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fluid">
                                        <p className="margin-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <span className="margin-none font-12">
                                            <i className="icons icon-clock font-12"></i> 1 week ago
                                        </span>
                                    </div>
                                </div>
                                <div className="product-review border-top pv-20">
                                    <div className="fluid d-flex flex-row">
                                        <span>
                                            <img src={reviewImage} className="review-profile-img"/>
                                        </span>
                                        <div className="fluid d-flex flex-column">
                                            <p className="weight-700 family-PTsans margin-none">
                                                Mike Ross
                                                <span className="ph-15">
                                                    <i className="fa fa-star color-aqua font-12" aria-hidden="true"></i> 5
                                                </span>
                                            </p>
                                            <div className="fluid font-12 d-flex align-items-center">
                                                <img src={countryImage} className="country-icon"/>
                                                United State
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fluid">
                                        <p className="margin-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <span className="margin-none font-12">
                                            <i className="icons icon-clock font-12"></i> 1 week ago
                                        </span>
                                    </div>
                                </div>
                                <div className="product-review border-top border-bottom pv-20">
                                    <div className="fluid d-flex flex-row">
                                        <span>
                                            <img src={reviewImage} className="review-profile-img"/>
                                        </span>
                                        <div className="fluid d-flex flex-column">
                                            <p className="weight-700 family-PTsans margin-none">
                                                Mike Ross
                                                <span className="ph-15">
                                                    <i className="fa fa-star color-aqua font-12" aria-hidden="true"></i> 5
                                                </span>
                                            </p>
                                            <div className="fluid font-12 d-flex align-items-center">
                                                <img src={countryImage} className="country-icon"/>
                                                United State
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fluid">
                                        <p className="margin-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <span className="margin-none font-12">
                                            <i className="icons icon-clock font-12"></i> 1 week ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FeaturedCategory />
        </div>);
    }
}


const ProductRouter = withRouter(Product)

const mapStateToProps = state => ({
    catServiceList: state.CategoryServiceList
});

const mapDispatchToProps = dispatch => ({ 
    headline: "99X Startups",
    service: " ",
    
    cart:{
      serviceId: "",
      price:{
        isCurrencyPrefix: "",
        currencySymbol: "",
        currency:  "",
        amount: 0,
        unit: 'per creative',
      },
      items:[],
      cartButtonLoading: false
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductRouter)