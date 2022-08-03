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
export default function WebDevPage(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/startup/category/web_development/HeroImage_PzVqStoi4W.png"
                title={<>99x will be your <span className='highlight'>Web Development Studio</span></>}
                subtitle="Build Robust Websites & Web Apps with ease"
                description="Take your business to the next level with top-quality web devlopment. Build websites, CMS, and web applications that achieves your business goals and delivers outstanding results - All for one price."
            />

            <CategoryMainFeatures
                title={<>Build <span className='highlight'>smart</span> web applications for your business.</>}
                subtitle="Fast, responsive, SEO friendly, custom websites ranging from business to complex web applications, we can build anything you need"
                features={[
                    {
                        title:'Responsive, Robust Websites & Web Apps',
                        subtitle:'We build websites responsive across devices, functionally robust & Clean coded. Moreover, with rigorous QA & Testing, we ensure your web apps are stunning, robust, secure and scalable',
                        icon:'https://ik.imagekit.io/99x/startup/category/web_development/WebApps_YbPQOkpl64.png'
                    },
                    {
                        title:'Agile Software Development',
                        subtitle:'We follow Agile Software development methodologies with an organized and strategic sprint plan, status tracking & project management in JIRA, and Documentation in Confluence.',
                        icon:'https://ik.imagekit.io/99x/startup/category/web_development/ContentWriter_yRUj4BT9s.png'
                    },
                    {
                        title:'Switch between Projects at will',
                        subtitle:'Want us to work on your website this week, CRM the next, and features end of the month? No problem. Keep switching between projects at will, as per your priorities',
                        icon:'https://ik.imagekit.io/99x/startup/category/web_development/Frame_433_Y1-vK9pEsa.png'
                    }
                ]
                }
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/startup/category/web_development/BrandAwareness_Hover_TXMxBkFN6.png"
                subtitle="Work with your dream team"
                image="https://ik.imagekit.io/99x/startup/category/web_development/Group_973_CSbifsj_rH.png"
                f1={[
                    {
                        icon:'',
                        text:'Digital Marketing Manager'
                    }
                ]}
                f2={[
                    {
                        title:"Front-End Development",
                        subtitle:"Intuitive, interactive, and influential user interfaces based on:  React JS, HTML/CSS, Next JS, Angular JS"
                    },
                    {
                        title:"Back-End Development",
                        subtitle:"Gives life to your web application with robust and sound back-end built on Node, PHP, Java, Python, Ruby on Rails"
                    },
                    {
                        title:"Database",
                        subtitle:"Arm your web app with a strong heart - The database built over MySQL, NoSQL, PostgreSQL for faster load times & response."
                    },
                    {
                        title:"Full-Stack Development",
                        subtitle:"Drive superior performance across from front-end to backend dev to integrations it all happens under one roof."
                    },
                    
                ]}
            />

            <CategoryTools
                src="https://ik.imagekit.io/99x/startup/category/web_development/LogoStack_Zb_B6jqWH.png"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="480px"
                minHeight="570px"
                labelHeight={[
                    200,
                    480,
                    230,
                    168,
                    570,
                    300
                ]}
                title="Flexible Web Development Plans that grow with you"
                subtitle="With one platform everyone sees the whole picture. All for one flat rate. What’s not to love about us"
                plans={
                    SubscriptionPlanData.web_development
                }
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions
            faqs={[
                {
                    question:'How do I decide which plan to choose?',
                    answer:`We would invest hours of hardork to ensure we develope your website for you fast.`
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