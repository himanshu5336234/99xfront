import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { apiRequest } from "../../../api";

import "../style.scss";
import FAQ from "../../../components/faq";
import RatingViewBar from "../../../components/ratingViewBar";
import FeaturedCategory from "../../../components/featuredCategory";

import ServicePricing from "../pricing";
import OneTimeProductData from "../../../data/onetime_plans";
import W3CarouselOnDemand from "../../../components/W3CarouselOnDemand";

const reviewImage = require("../../../assets/images/main/review.png");
const countryImage = require("../../../assets/images/main/Emoji.png");

const CustomerReviews = [
  {
    name: "Vipul Rao",
    profile_image:
      "https://ik.imagekit.io/99x/startup/_onetime_service/_customer_review/Ellipse_9_QyKg_i-WXm.png",
    review:
      "They communicate well and get really involved in your pitch with doing research and providing feedback where they see fit. Super helpful and care about the success of your business.",
    review_star: "4.5",
    country: {
      flag_icon: countryImage,
      name: "United States",
    },
    posted_on: "A week ago",
  },
  {
    name: "Victorine Lapointe",
    profile_image:
      "https://ik.imagekit.io/99x/startup/_onetime_service/_customer_review/Ellipse_9_1__cNrNnNLe7.png",
    review:
      "Our final project is awesome! They over-delivered and out-performed anything I even expected. If you want to bring your vision to life this is the partner you need on your team!",
    review_star: "5",
    country: {
      flag_icon:
        "https://ik.imagekit.io/99x/startup/_onetime_service/_customer_review/Emoji_hx5Nl5U2c.png",
      name: "United Kingdom",
    },
    posted_on: "2 months ago",
  },
  {
    name: "Travis Page",
    profile_image: "",
    review:
      "After sending them the content and communicating the vibe we were looking for they came back with a stellar deck. The team was super receptive to revisions and turned around ideas quickly. I definitely recommend working with 99x!",
    review_star: "4",
    country: {
      flag_icon: countryImage,
      name: "United States",
    },
    posted_on: "3 months ago",
  },
  {
    name: "Rebeca Castilla",
    profile_image: "",
    review:
      "They are very up front and clear with communication. Do their best for the first draft with the information you provided, will also do their research on the market too. From first draft on, the deck visuals and wordings get better and better. They will go extra miles to get it right. Highly recommended to have 99xhelp you with your deck!!!",
    review_star: "5",
    country: {
      flag_icon:
        "https://ik.imagekit.io/99x/startup/_onetime_service/_customer_review/Emoji_hx5Nl5U2c.png",
      name: "United Kingdom",
    },
    posted_on: "5 months ago",
  },
];

class OnDemandLogoDesign extends React.Component {
  constructor() {
    super();
    this.state = {
      product: OneTimeProductData.logo_design,
      service: null,
      loading: false,
      activeTab: "basic",
      cart: {
        price: 0,
      },
      recurring: null,
      stock: 0,
    };
  }

  addToCartAndContinue(cart, callback) {
    apiRequest({
      method: "POST",
      url: "/cart",
      data: cart,
    }).then((d) => {
      if (d.success) {
        localStorage.setItem("w3_cart", d["w3_cart"]);
        localStorage.setItem("cartId", d.cartId);
        callback(null, d);
      }
    });
  }

  render() {
    return (
      <div className="fluid ondemand-product">
        <section className="fluid">
          <div className="container single-service-page">
            <div className="row">
              <div className="bread-crumb">
                <span>Launch & Kickoff</span>
                <span>
                  <img src="https://ik.imagekit.io/99x/startup/RightArrow_Up-Rq55kR.svg" />
                </span>
                <span>Logo Design</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                <div className="fluid d-flex flex-column align-items-start">
                  {/* <button className="custom-button blue active family-PTsans d-flex align-items-center categroy-button">
                                        <i className="fa fa-star" aria-hidden="true"></i> Articles & Blogs
                                    </button> */}
                  <div className="fluid">
                    <div className="product-tag-chips">
                      <div className="product-title">Logo Design</div>
                      <div className="product-type">One Time Service</div>
                    </div>
                    <h1 className="font-24 weight-700 service-title">
                      {this.state.product.title || null}
                    </h1>
                    <p>
                      <i
                        className="fa fa-star color-yellow font-12"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star color-yellow font-12"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star color-yellow font-12"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star color-yellow font-12"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-star color-yellow font-12"
                        aria-hidden="true"
                      ></i>
                      <span className="font-12 ph-15">
                        ({this.state.product.reviews_count} Reviews)
                      </span>
                    </p>
                  </div>
                  <div className="image-container">
                    <W3CarouselOnDemand images={this.state.product.images} />
                  </div>

                  <div className="mobile-only mobile-pricing">
                    <ServicePricing
                      stock={0}
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
                          <h2 className="font-20 weight-700 color-aqua">
                            FAQs
                          </h2>
                          <FAQ />
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="fluid pv-20 mb-30 cust-review">
                          <div className="fluid d-flex flex-row justify-content-between align-items-center">
                            <div className="d-flex">
                              <h2 className="font-18 weight-700 margin-none">
                                621 Reviews
                              </h2>
                              <span className="ph-15">
                                <i
                                  className="fa fa-star star-yellow font-16"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fa fa-star star-yellow font-16"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fa fa-star star-yellow font-16"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fa fa-star star-yellow font-16"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fa fa-star star-yellow font-16"
                                  aria-hidden="true"
                                ></i>
                                <span className="font-16 ph-15 weight-700 star-yellow">
                                  5.0
                                </span>
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
                              <RatingViewBar
                                review={25}
                                totalReview={30}
                                label={5}
                              />
                              <RatingViewBar
                                review={5}
                                totalReview={30}
                                label={4}
                              />
                              <RatingViewBar
                                review={0}
                                totalReview={30}
                                label={3}
                              />
                              <RatingViewBar
                                review={0}
                                totalReview={30}
                                label={2}
                              />
                              <RatingViewBar
                                review={0}
                                totalReview={30}
                                label={1}
                              />
                            </div>
                            <div className="col-12 col-sm-12 col-lg-6">
                              <span className="font-14">Rating Breakdown</span>
                              <div className="fluid d-flex justify-content-between mt-10">
                                <span className="font-12">
                                  Quick Turnaround
                                </span>
                                <span className="font-12">
                                  5{" "}
                                  <i
                                    className="fa fa-star star-yellow font-12"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <div className="fluid d-flex justify-content-between mt-10">
                                <span className="font-12">Content Quality</span>
                                <span className="font-12">
                                  5{" "}
                                  <i
                                    className="fa fa-star star-yellow font-12"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <div className="fluid d-flex justify-content-between mt-10">
                                <span className="font-12">Support</span>
                                <span className="font-12">
                                  5{" "}
                                  <i
                                    className="fa fa-star star-yellow font-12"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="product-review border-top pv-20">
                          {CustomerReviews.map((review, index) => (
                            <>
                              <div className="fluid d-flex flex-row">
                                <span>
                                  <img
                                    src={reviewImage}
                                    className="review-profile-img"
                                  />
                                </span>
                                <div className="fluid d-flex flex-column">
                                  <p className="font-16 margin-none">
                                    {review.name}
                                    <span className="ph-15">
                                      <i
                                        className="fa fa-star star-yellow font-12"
                                        aria-hidden="true"
                                      ></i>
                                      {review.review_star}
                                    </span>
                                  </p>
                                  <div className="fluid font-12 d-flex align-items-center color-grey">
                                    <img
                                      src={review.country.flag_icon}
                                      className="country-icon"
                                    />
                                    {review.country.name}
                                  </div>
                                </div>
                              </div>
                              <div className="fluid">
                                <p className="font-14 review-text">
                                  {review.review}
                                </p>
                                <span className="font-12 review-time color-grey">
                                  <i className="icons icon-clock font-12 color-grey"></i>{" "}
                                  {review.posted_on}
                                </span>
                              </div>
                              <hr />
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="fluid pv-20">
                    <div className="tags"></div>
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
              <div className="col-12 col-sm-12 col-md-12 col-lg-6"></div>
            </div>
          </div>
        </section>
        <FeaturedCategory />
      </div>
    );
  }
}

const ProductRouter = withRouter(OnDemandLogoDesign);

const mapStateToProps = (state) => ({
  catServiceList: state.CategoryServiceList,
});

const mapDispatchToProps = (dispatch) => ({
  headline: "99X Startups",
  service: " ",

  cart: {
    serviceId: "",
    price: {
      isCurrencyPrefix: "",
      currencySymbol: "",
      currency: "",
      amount: 0,
      unit: "per creative",
    },
    items: [],
    cartButtonLoading: false,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductRouter);
