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
export default function AricleAndBlogsPage(props){

    return (
        <>
            <CategoryHomeBanner
                banner="https://ik.imagekit.io/99x/startup/category/content_marketing/HeroImage_Sn2I-T1Pd.png"
                title={<>99x will be your <span className='highlight'>Content Studio</span></>}
                subtitle="Get fascinating articles & blogs with ease."
                description="Charm your audience, keep them engaged and build better relations with good SEO optimized articles, blogs and visuals that advocates, converses them, for them. "
            />

            <CategoryMainFeatures
                title={<>Scale your <span className='highlight'>Content Marketing</span> efforts.</>}
                subtitle="Amplify your online presence with great content for your blogs & social media channels"
                features={[
                    {
                        title:'Genuine Industry Specific Articles',
                        subtitle:'Drive your online presence with authentic Short, Medium & Long Form Articles & Blog content specifically for your industry company and audiences.',
                        icon:'https://ik.imagekit.io/99x/startup/category/content_marketing/VerfifiedContent_VlaZIhP6Bb.png'
                    },
                    {
                        title:'High-Quality Long Form Content',
                        subtitle:'Keep your audience interested, build your expertise and authority with high-quality long-form & authentic content. Converse, inform, describe meaningfully.',
                        icon:'https://ik.imagekit.io/99x/startup/category/content_marketing/Articles_Blogs_2tdDs1wHDU.png'
                    },
                    {
                        title:'Graphics, Creatives & Visual Design',
                        subtitle:'Combine your compelling context and ideas with striking graphics, creative visual design to the textual content, show your point of view with an impact.',
                        icon:'https://ik.imagekit.io/99x/startup/category/content_marketing/GraphicDesign_HHkIx-132.png'
                    }
                ]
                }
            />


            <CategoryTools
                src="https://ik.imagekit.io/99x/startup/category/content_marketing/LogoStack_MHdoOXHWU.png"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="420px"
                minHeight="570px"
                labelHeight={[
                    200,
                    456,
                    190,
                    171,
                    570,
                    340
                ]}
                title="Flexible Article & Blog Plans that grow with you"
                subtitle="With one platform everyone sees the whole picture. All for one flat rate. What’s not to love about us"
                plans={
                    SubscriptionPlanData.a_b
                }
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions
                faqs={[
                    {
                        question:'How do I decide which plan to choose?',
                        answer:`Our plans are based on the number, variety and size of the blogs/ articles created in a month.
                        Choose your plan considering the number of articles / blogs required.`
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
                        answer:'Absolutely. All our subscriptions come with a 7 Day Free Trial to ensure we establish Trust & Customer Satisfaction.'
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