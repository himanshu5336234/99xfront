import React from "react"
import CategoryHomeBanner from "./_components/HomeBanner"
import CategoryMainFeatures from "./_components/MainFeatures"
import CategoryEverythingYouNeed from "./_components/EverythingYouNeed"

import "./style.scss"
import CategorySubscriptionPlan from "./_components/SubscriptionPlan"
import WhyWorkWithUs from "../../components/WhyWorkWithUs"
import LikeAnEcosystem from "../../components/_sections/LikeAnEcosystem"
import StillHaveQuestions from "../../components/stilHaveQuestion"
import CategoryStillNotConvinced from "./_components/StillNotConvinced"
import CategoryTools from "./_components/CategoryTools"

import SubscriptionPlanData from "../../data/subscription_plans"
export default function ContentAndCopywritingPage(props){

    return (
        <>
            <CategoryHomeBanner
                banner="https://ik.imagekit.io/99x/startup/category/content_marketing/HeroImage_FMJwEqAd16.png"
                title={<>99x will be your <span className='highlight'>Content Studio</span></>}
                subtitle="Multi-Purpose Copywriters for your business"
                description="Why hire a Copywriter when you have us? A Multi-disciplinary Copywriter is at your fingertips. Inspire your audience and keep them engaged with great content. "
            />

            <CategoryMainFeatures
                title={<>Communicate meaningfully with great copywriting.</>}
                subtitle="Everything you need from Website Copies to Social Media Captions to Official Communications"
                features={[
                    {
                        title:'Digital Marketing & Social Media Copies',
                        subtitle:'Creative & Professional Ad Copies for Instagram, Facebook, Twitter, LinkedIn + Social Media Captions, LinkedIn Posts & everything in between.',
                        icon:'https://ik.imagekit.io/99x/startup/category/copywriting/Frame_438_swP_v6si-U.png'
                    },
                    {
                        title:'Content for Internal Communications',
                        subtitle:'Keep everyone in your company on the same page with amazing copies for your Emailers, Notifications, Internal circulation, Stakeholders & more.',
                        icon:'https://ik.imagekit.io/99x/startup/category/copywriting/ContentWriter_yOd496CbvK.png'
                    },
                    {
                        title:'Content for External Communications',
                        subtitle:'Inspire your audiences with engaging interesting and relevant Website content Mobile App, Events, Presentations, Conferences, Product Guides, FAQs.',
                        icon:'https://ik.imagekit.io/99x/startup/category/copywriting/SocialMediaAds_ItkTTUMwBX.png'
                    }
                ]
                }
            />


            <CategoryTools
                src="https://ik.imagekit.io/99x/startup/category/content_marketing/LogoStack_MHdoOXHWU.png"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="520px"
                minHeight="570px"
                labelHeight={[
                    200,
                    520,
                    230,
                    168,
                    569,
                    300
                ]}
                title="Flexible Article & Blog Plans that grow with you"
                subtitle="With one platform everyone sees the whole picture. All for one flat rate. What’s not to love about us"
                plans={
                    SubscriptionPlanData.copywriting
                }
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions
            faqs={[
                {
                    question:'How do I decide which plan to choose?',
                    answer:'Choose the all in one plan if you like everything we offer'
                },
                {
                    question:'How do I switch between Plans?',
                    answer:'You can choose a plan of your choice from this very page. If you have already chosen a plan, please feel free to switch between plans in your Client Dashboard, under the orders section. '
                },
                {
                    question:'What is your refund policy?',
                    answer:'All our subscriptions come with a 7 Day Free Trial to ensure maximum customer satisfaction. If at anytime, you want to cancel the subscription during this period, please feel free to go to the Client Dashboard, under the orders section, visit the corresponding order page & cancel the subscription. The refunds are initiated instantly via reputed Payment Partners such as Stripe, Paypal & Razorpay. Crediting to bank account depends on the Payment Method, Bank & regulations for the country.'
                },
                {
                    question:'Does 99x offer a Free Trial?',
                    answer:'Absolutely. All our subscriptions come with a 7 Day Free Trial to ensure we establish Trust & Customer Satisfaction.    '
                },
                {
                    question:'What is your Cancellation Policy?',
                    answer:'We offer a full money-back guarantee for all subscriptions made on our website. If you desire to discontinue the service that you have subscribed from us, you can get your money back no questions asked. We encourage our customers to try the service in the first week after their purchase to ensure it fits your needs. You are eligible for a full reimbursement within 7 calendar days of your free trial window. Cancellation of a one-time service order can be done within 3 hours of placing the order. Discontinuation of a service subscription / Cancelling of a one-time service order needs to be initiated by the user in the order management section. Refund process is initiated immediately once the user requests a refund. The time taken for the completion of the refund process would depend on the mode of payment and the Payment service provider.'
                },
                {
                    question:'How can I collaborate with the 99x Content Team?',
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
            ]}
            />
            
            <CategoryStillNotConvinced/>
        </> 
    )

}