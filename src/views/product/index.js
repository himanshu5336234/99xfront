import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';
import FAQ from '../../components/faq';
import RatingViewBar from '../../components/ratingViewBar';
import FeaturedCategory from '../../components/featuredCategory';

import {apiRequest} from "../../api"
import { connect } from 'react-redux';

import ServicePricing from './pricing';
import OneTimeProductData from '../../data/onetime_plans'
import W3Carousel from '../../components/W3Carousel';
import W3CarouselOnDemand from '../../components/W3CarouselOnDemand';

const productImage = require('../../assets/images/main/product.png');
const productVideoImage = require('../../assets/images/main/product-video.png');
const reviewImage = require('../../assets/images/main/review.png');
const countryImage = require('../../assets/images/main/Emoji.png');

const SlugMap = {
    'pitch-deck':'pitch_deck',
    'logo-design':'logo_design',
    'stationary':'stationary',
    'videos':'videos'
};

const CustomerReviews = [
    {
        name:'Martina Ross',
        profile_image:'https://ik.imagekit.io/99x/startup/_onetime_service/_customer_review/Ellipse_9_QyKg_i-WXm.png',
        review:'',
        review_star:'',
        country:{
            flag_icon:countryImage,
            name:'United States'
        },
        posted_on:'A week ago'
    },
    {
        name:'Polly Shelby',
        profile_image:'https://ik.imagekit.io/99x/startup/_onetime_service/_customer_review/Ellipse_9_1__cNrNnNLe7.png',
        review:'',
        review_star:'',
        country:{
            flag_icon:'https://ik.imagekit.io/99x/startup/_onetime_service/_customer_review/Emoji_hx5Nl5U2c.png',
            name:'United Kingdom'
        },
        posted_on:'2 months ago'
    },
    // {
    //     name:'',
    //     profile_image:'',
    //     review:'',
    //     review_star:'',
    //     country:{
    //         flag_icon:'',
    //         name:''
    //     },
    //     posted_on:''
    // },
]

class Product extends React.Component{
    
    constructor(){

        super();
        this.state = {
            product: OneTimeProductData.pitch_deck,
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
        this.unlisten = this.props.history.listen((location, action)=>{

            console.log("on route change ", location, action)
            let NewSlug = location.pathname.replace("/services/","");
            this.setState({
                product: OneTimeProductData[SlugMap[NewSlug]]
            })
        })

        if(SlugMap[ServiceSlug]) this.setState({
            product: OneTimeProductData[SlugMap[ServiceSlug]]
        })
        else
            window.top.location = "/not-found"
        // this.fetchService(ServiceSlug);
    
    }
    
    componentWillUnmount(){
        this.unlisten()
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
        return (
        <div className="fluid pv-30 ondemand-product">
            <section className="fluid pv-30">
                <div className="container single-service-page">
                    <div className="row">

                        <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                            <div className="fluid d-flex flex-column align-items-start">
                                {/* <button className="custom-button blue active family-PTsans d-flex align-items-center categroy-button">
                                    <i className="fa fa-star" aria-hidden="true"></i> Articles & Blogs
                                </button> */}
                                <div className="fluid">
                                    <h1 className="font-24 weight-700 service-title">
                                        {this.state.product.title || null}
                                    </h1>
                                    <p>
                                        <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                        <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                        <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                        <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                        <i className="fa fa-star color-yellow font-12" aria-hidden="true"></i>
                                        <span className="font-12 ph-15">({this.state.product.reviews_count} Reviews)</span>
                                    </p>
                                </div>
                                <div className="image-container">
                                    <W3CarouselOnDemand
                                    images={this.state.product.images}
                                    />
                                </div>

                                <div className="mobile-only mobile-pricing">
                                    <ServicePricing
                                        recurring={true}
                                        service={this.state.product}
                                        plans={this.state.product.plans}
                                        checkout={this.addToCartAndContinue}
                                    />
                                </div>
                                
                                <div className="fluid pv-20">

                                    <div className="nav-container">
                                        <ul>
                                            <li className="active">
                                                <a href="#">Description</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="#">Reviews</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="nav-content">
                                        
                                        <p className="text-justify family-Inter">
                                            {this.state.product.description}
                                        </p>

                                        <div className="faqs">
                                            
                                            <div className="fluid pv-20 mb-30">
                                                <h2 className="font-20 weight-700 color-aqua">FAQs</h2>
                                                <FAQ />
                                            </div>

                                        </div>
                                        <div className="reviews">

                                            <div className="fluid pv-20 mb-30 cust-review">
                                                <div className="fluid d-flex flex-row justify-content-between align-items-center">
                                                    <div className="d-flex">
                                                        <h2 className="font-18 weight-700 margin-none">621 Reviews</h2>
                                                        <span className="ph-15">
                                                            <i className="fa fa-star star-yellow font-16" aria-hidden="true"></i>
                                                            <i className="fa fa-star star-yellow font-16" aria-hidden="true"></i>
                                                            <i className="fa fa-star star-yellow font-16" aria-hidden="true"></i>
                                                            <i className="fa fa-star star-yellow font-16" aria-hidden="true"></i>
                                                            <i className="fa fa-star star-yellow font-16" aria-hidden="true"></i>
                                                            <span className="font-16 ph-15 weight-700 star-yellow">5.0</span>
                                                        </span>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <span className="ph-15 font-14">Sort By:</span>
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
                                                        <span className="font-14">Rating Breakdown</span>
                                                        <div className="fluid d-flex justify-content-between mt-10">
                                                            <span className="font-12">Quick Turnaround</span>
                                                            <span className="font-12">
                                                                5 <i className="fa fa-star star-yellow font-12" aria-hidden="true"></i>
                                                            </span>
                                                        </div>
                                                        <div className="fluid d-flex justify-content-between mt-10">
                                                            <span className="font-12">Content Quality</span>
                                                            <span className="font-12">
                                                                5 <i className="fa fa-star star-yellow font-12" aria-hidden="true"></i>
                                                            </span>
                                                        </div>
                                                        <div className="fluid d-flex justify-content-between mt-10">
                                                            <span className="font-12">Support</span>
                                                            <span className="font-12">
                                                                5 <i className="fa fa-star star-yellow font-12" aria-hidden="true"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-review border-top pv-20">
                                                {CustomerReviews.map((review,index)=>(
                                                    <>
                                                        <div className="fluid d-flex flex-row">
                                                            <span>
                                                                <img src={reviewImage} className="review-profile-img"/>
                                                            </span>
                                                            <div className="fluid d-flex flex-column">
                                                                <p className="font-16 margin-none">
                                                                    Mike Ross
                                                                    <span className="ph-15">
                                                                        <i className="fa fa-star star-yellow font-12" aria-hidden="true"></i> 5
                                                                    </span>
                                                                </p>
                                                                <div className="fluid font-12 d-flex align-items-center color-grey">
                                                                    <img src={countryImage} className="country-icon"/>
                                                                    United States
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="fluid">
                                                            <p className="font-14 review-text">
                                                                99x made us a fabulous venture deck that presents our company and the services we provide. They can tailor the deck to fit your aesthetic styles. Communication had been very smooth, with speedy replies and on-point explanations. We had some misunderstanding initially, but 99x team handled it well and turned over revisions within a day or two. We definitely trust 99x, and we recommend them to anyone who needs to create a professionally made presentation deck.
                                                            </p>
                                                            <span className="font-12 review-time color-grey">
                                                                <i className="icons icon-clock font-12 color-grey"></i> 1 week ago
                                                            </span>
                                                        </div>
                                                        <hr/>
                                                    </>
                                                ))}
                                                

                                            </div>
                                            
                                        </div>

                                    </div>

                                   
                                </div>

                                <div className="fluid pv-20">
                                    <div className="tags">

                                    </div>
                                </div>
                            </div>

                            

                            

                        </div>

                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 desktop-only">
                            <ServicePricing
                                recurring={true}
                                service={this.state.product}
                                plans={this.state.product.plans}
                                checkout={this.addToCartAndContinue}
                            />
                        </div>
                        

                       
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            
                         
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