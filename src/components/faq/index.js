import React from 'react';

import './style.scss';
const questionIcon = require("../../assets/images/main/question-icon.png");
 

export default class FAQ extends React.Component{
    constructor(){
        super();
        this.state = {
            faqs:[
                {
                    question:'How Can I cancel once the order is placed?',
                    answer:'We offer a full money-back guarantee for all subscriptions made on our website. If you desire to discontinue the service that you have subscribed from us, you can get your money back no questions asked. Cancellation of a one-time service order can be done within 3 hours of placing the order.'
                },
                {
                    question:'How can I collaborate with the 99x Team?',
                    answer:'As soon as you Subscribe to our service, you will be taken to our Client Dashboard. Our Design Team will immediately get in touch to discuss with you about your Requirements, Plan of Action & the next series of steps. We work with our Clients across leading collaboration Channels be it Slack, Confluence, Trello & more. You can add tasks, team members, share requirements in the Client Dashboard as well. We collaborate via Video Calls on Zoom, Google Meet, Microsoft Teams & Video Conferencing via the Client Dashboard to ensure the communication & collaboration is seamless. '
                },
                {
                    question:'How many revisions can I make for my requirements?',
                    answer:'You can ask for as many revisions as you required. However our creators will try their best to ensure we get things right on the first go.'
                },
                {
                    question:'I am not an expert, can 99x team guide me step by step?',
                    answer:'Absolutely. We work with everybody from Mom and Pop Shops, Retail Outlets to a newly incorporated Startup to ensure we guide you every step of the way. Working with hundreds of companies across industries enables us to help you guide through a step by step plan and implement them to ensure we implement a holistic Digital Strategy for your organization'
                },
            ] 
        }
    }

    openAccord = (_event) => {
        if(_event){
            let _body = _event.currentTarget.nextElementSibling;
            if (_body.style.maxHeight && parseFloat(_body.style.maxHeight) > 0) {
                _body.style.maxHeight = '0px';
                _event.currentTarget.parentNode.classList.remove('active');
            } else {
                let acc = document.getElementsByClassName("custom-accord-body");
                for (let i = 0; i < acc.length; i++) {
                    acc[i].style.maxHeight = '0px';
                    if(acc[i].parentNode.classList.contains('active')){
                        acc[i].parentNode.classList.toggle('active');
                    }
                }
                _event.currentTarget.parentNode.classList.add('active');
                _body.style.maxHeight = _body.scrollHeight + "px";
            }
        }
    }

    render(){
        return (<div className="fluid">
            {this.state.faqs.map((f,i)=>(
            <div className="custom-accord-1">
                <div className="custom-accord-head" onClick={(e) => this.openAccord(e)}>
                    <span className="font-16"><b>{f.question}</b></span>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className="custom-accord-body">
                    <p className="font-16">{f.answer}</p>
                </div>
            </div>
            ))}
           
            {/* <div className="custom-accord-1">
                <div className="custom-accord-head" onClick={(e) => this.openAccord(e)}>
                    <span className="font-16">How do I pay?</span>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className="custom-accord-body">
                    <p className="font-16">You can pay with MobilePay or cash to your masseur in connection with the massage. Subsequently, you can receive a receipt.</p>
                </div>
            </div>
            <div className="custom-accord-1">
                <div className="custom-accord-head" onClick={(e) => this.openAccord(e)}>
                    <span className="font-16">How do I pay?</span>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className="custom-accord-body">
                    <p className="font-16">You can pay with MobilePay or cash to your masseur in connection with the massage. Subsequently, you can receive a receipt.</p>
                </div>
            </div>
            <div className="custom-accord-1">
                <div className="custom-accord-head" onClick={(e) => this.openAccord(e)}>
                    <span className="font-16">How do I pay?</span>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className="custom-accord-body">
                    <p className="font-16">You can pay with MobilePay or cash to your masseur in connection with the massage. Subsequently, you can receive a receipt.</p>
                </div>
            </div>
            <div className="custom-accord-1">
                <div className="custom-accord-head" onClick={(e) => this.openAccord(e)}>
                    <span className="font-16">How do I pay?</span>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className="custom-accord-body">
                    <p className="font-16">You can pay with MobilePay or cash to your masseur in connection with the massage. Subsequently, you can receive a receipt.</p>
                </div>
            </div> */}

        </div>);
    }
}