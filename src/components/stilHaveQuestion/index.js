import React from "react";
import "./style.scss";

const getIconUrl = (site) => {
  if(site){
    if(site == "seo") return "https://ik.imagekit.io/99x/seo/Vector_L0fwOwM9A.png"
    if(site == "design") return "https://ik.imagekit.io/99x/design/Vector_Cnmafn51VR2.png"
    if(site == "social") return "https://ik.imagekit.io/99x/social/Vector_R0mmp2H-P.svg"
  }
  return "https://ik.imagekit.io/99x/startup/Frame_36_1__Mjp9N-WV6.svg"
}

export default class StillHaveQuestions extends React.Component {
  constructor() {
    super();
    this.faqs = [
      {
        question: "How do I switch between Plans?",
        answer:
          "You can choose a plan of your choice from this very page. If you have already chosen a plan, please feel free to switch between plans in your Client Dashboard, under the orders section. ",
      },
      {
        question: "What is your refund policy?",
        answer:
          "All our subscriptions come with a 7 Day Free Trial to ensure maximum customer satisfaction. If at anytime, you want to cancel the subscription during this period, please feel free to go to the Client Dashboard, under the orders section, visit the corresponding order page & cancel the subscription. The refunds are initiated instantly via reputed Payment Partners such as Stripe, Paypal & Razorpay. Crediting to bank account depends on the Payment Method, Bank & regulations for the country.",
      },
      {
        question: "Does 99x offer a Free Trial?",
        answer:
          "Absolutely. All our subscriptions come with a 7 Day Free Trial to ensure we establish Trust & Customer Satisfaction.    ",
      },
      {
        question: "What is your Cancellation Policy?",
        answer:
          "We offer a full money-back guarantee for all subscriptions made on our website. If you desire to discontinue the service that you have subscribed from us, you can get your money back no questions asked. We encourage our customers to try the service in the first week after their purchase to ensure it fits your needs. You are eligible for a full reimbursement within 7 calendar days of your free trial window. Cancellation of a one-time service order can be done within 3 hours of placing the order. Discontinuation of a service subscription / Cancelling of a one-time service order needs to be initiated by the user in the order management section. Refund process is initiated immediately once the user requests a refund. The time taken for the completion of the refund process would depend on the mode of payment and the Payment service provider.",
      },
      {
        question: "How can I collaborate with the 99x Content Team?",
        answer:
          "As soon as you Subscribe to our service, you will be taken to our Client Dashboard. Our Design Team will immediately get in touch to discuss with you about your Requirements, Plan of Action & the next series of steps. We work with our Clients across leading collaboration Channels be it Slack, Confluence, Trello & more. You can add tasks, team members, share requirements in the Client Dashboard as well. We collaborate via Video Calls on Zoom, Google Meet, Microsoft Teams & Video Conferencing via the Client Dashboard to ensure the communication & collaboration is seamless. ",
      },
      {
        question: "How many revisions can I make for my requirements?",
        answer:
          "You can ask for as many revisions as you required. However our creators will try their best to ensure we get things right on the first go.",
      },
      {
        question: "I am not an expert, can 99x team guide me step by step?",
        answer:
          "Absolutely. We work with everybody from Mom and Pop Shops, Retail Outlets to a newly incorporated Startup to ensure we guide you every step of the way. Working with hundreds of companies across industries enables us to help you guide through a step by step plan and implement them to ensure we implement a holistic Digital Strategy for your organization",
      },
    ];
  }

  componentDidMount() {
    if (this.props.faqs && this.props.faqs.length > 0)
      this.faqs = this.props.faqs;
  }

  openAccord = (_event) => {
    if (_event) {
      let _body = _event.currentTarget.nextElementSibling;
      if (_body.style.maxHeight && parseFloat(_body.style.maxHeight) > 0) {
        _body.style.maxHeight = "0px";
        _event.currentTarget.parentNode.classList.remove("active");
      } else {
        let acc = document.getElementsByClassName("custom-accord-body");
        for (let i = 0; i < acc.length; i++) {
          acc[i].style.maxHeight = "0px";
          if (acc[i].parentNode.classList.contains("active")) {
            acc[i].parentNode.classList.toggle("active");
          }
        }
        _event.currentTarget.parentNode.classList.add("active");
        _body.style.maxHeight = _body.scrollHeight + "px";
      }
    }
  };

  render() {
    return (
      <section className="fluid pv-30">
        <div className="container pv-30">
          <h2 className="font-20 color-green">Still have questions?</h2>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-5">
              <p className="mb-30 font-36">Relax. 99x has your back.</p>
              <img
                src={getIconUrl(this.props.site || "")}
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-7">
              {this.faqs.map((f, i) => {
                return (
                  <div className="custom-accord lora">
                    <div
                      className="custom-accord-head"
                      onClick={(e) => this.openAccord(e)}
                    >
                      <span className="font-20 cursor-pointer">
                        {f.question}
                      </span>
                      <i
                        className="fa fa-chevron-down font-20"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="custom-accord-body">
                      <p className="font-16">{f.answer}</p>
                    </div>
                  </div>
                );
              })}

              {/* <div className="custom-accord">
                            <div className="custom-accord-head" onClick={(e) => this.openAccord(e)}>
                                <span className="font-20 oswaldBold">How do I pay?</span>
                                <i className="fa fa-chevron-down font-20" aria-hidden="true"></i>
                                
                            </div>
                            <div className="custom-accord-body">
                                <p className="font-16">You can pay with MobilePay or cash to your masseur in connection with the massage. Subsequently, you can receive a receipt.</p>
                            </div>
                        </div>
                        <div className="custom-accord">
                            <div className="custom-accord-head" onClick={(e) => this.openAccord(e)}>
                                <span className="font-20 oswaldBold">How do I pay?</span>
                                <i className="fa fa-chevron-down font-20" aria-hidden="true"></i>
                                
                            </div>
                            <div className="custom-accord-body">
                                <p className="font-16">You can pay with MobilePay or cash to your masseur in connection with the massage. Subsequently, you can receive a receipt.</p>
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
