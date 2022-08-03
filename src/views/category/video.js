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
export default function VideoPage(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/startup/category/video_creation/HeroImage_c_KOxMlDg.png"
                title={<>99x will be your <span className='highlight'>Video Studio</span></>}
                subtitle="Visually Striking Videos at your fingertips"
                description="Scale your brand, tell your story, inspire, and impact your audience with engaging, powerful video content. "
            />

            <CategoryMainFeatures
                title={<>Boost your <span className='highlight'>Video Creation</span> efforts</>}
                subtitle="Amplify your online presence with great videos for your website & social media channels"
                features={[
                    {
                        title:'Digital Marketing Video Ads',
                        subtitle:'Drive your online presence & inspire your audience with authentic, strong narratives and video ads for your digital marketing channels and campaigns.',
                        icon:'https://ik.imagekit.io/99x/startup/category/video_creation/Unlimited_Requests_O1MHIBd2aL.png'
                    },
                    {
                        title:'Social Media & Brand Videos',
                        subtitle:'Excite your audience for your Product Launch, Brand Campaigns & Influencer Videos with high-quality, engaging, visual narratives and videos.',
                        icon:'https://ik.imagekit.io/99x/startup/category/video_creation/SocialMediaAds_fl-mfxnPv.png'
                    },
                    {
                        title:'Events, Promos & Business Videos',
                        subtitle:'Inform, Describe, and tell and your story with Stunning Company and Product Promos, Explainers and Whiteboard Videos',
                        icon:'https://ik.imagekit.io/99x/startup/category/video_creation/Unlimited_Requests-1_eCF6Z1N4T.png'
                    }
                ]
                }
            />


            <CategoryTools
                src="https://ik.imagekit.io/99x/startup/category/video_creation/LogoStack_TMxp5rS1_.png"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="600px"
                minHeight="570px"
                labelHeight={[
                    200,
                    656,
                    190,
                    152,
                    632,
                    300
                ]}
                title="Flexible Article & Blog Plans that grow with you"
                subtitle="With one platform everyone sees the whole picture. All for one flat rate. What’s not to love about us"
                plans={
                    SubscriptionPlanData.v_c
                }
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions
            faqs={[
                {
                    question:'How do I decide which plan to choose?',
                    answer:`Our plans are based on the number and variety of videos created in a month.\n
                    Choose your plan considering the number of videos required.`
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