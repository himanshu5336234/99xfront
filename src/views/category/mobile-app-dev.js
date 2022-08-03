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
                banner="https://ik.imagekit.io/99x/startup/category/app_dev/image_1_WU9gN2vsdo.png"
                title={<>99x will be your <span className='highlight'>App Development Studio</span></>}
                subtitle="Build Futue-Ready Mobile Apps with ease"
                description="Develop scalable, robust and conversion friendly mobile apps that creates seamless and intuitive user experience to your users - All for one price."
            />

            <CategoryMainFeatures
                title={<>Build <span className='highlight'>intuitive</span> mobile apps for your business.</>}
                subtitle="Stunning, Conversion-Friendly Applications from Payments to Gaming to e-commerce, we can build anything you and your business need."
                features={[
                    {
                        title:'Android, iOS & Hybrid Applications',
                        subtitle:'We build apps across devices, functionally robust & Clean coded. Moreover, with rigorous QA & Testing, we ensure your apps are gorgeous, future-ready and scalable.',
                        icon:'https://ik.imagekit.io/99x/startup/category/app_dev/Frame_434_6CvWAPDGd6.png'
                    },
                    {
                        title:'Agile Software Development',
                        subtitle:'We follow Agile Software development methodologies with an organized and strategic sprint plan, status tracking & project management in JIRA, and Documentation in Confluence.',
                        icon:'https://ik.imagekit.io/99x/startup/category/app_dev/Group_63_cxWcGGJv5.png'
                    },
                    {
                        title:'Switch between Projects at will',
                        subtitle:'Want us to work on featurs this week and switch to a different module the next week? No problem. Keep switching among projects as per your priorities.',
                        icon:'https://ik.imagekit.io/99x/startup/category/app_dev/Switch_t_j01hsF3J.png'
                    }
                ]
                }
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/startup/category/app_dev/BrandAwareness_Hover_tLiFq-bwR5.png"
                subtitle="Work with your dream team"
                image="https://ik.imagekit.io/99x/startup/category/app_dev/Group_973_IP7KO8Me9.png"
                f1={[
                    {
                        icon:'',
                        text:'Digital Marketing Manager'
                    }
                ]}
                f2={[
                    {
                        title:"iOS Applications",
                        subtitle:"Bring your vision to reality deliveroutstanding user experiences with iOS applications based on Swift & Objective C. "
                    },
                    {
                        title:"Android Applications",
                        subtitle:"Design and develop full-fledged, scalable, robust, and top-notch Android applications based on Java, Kotlin & Native"
                    },
                    {
                        title:"Hybrid Applications",
                        subtitle:"Create hybrid, cross-platform sound native apps based on Flutter, Ionic, React Native that’s Future- ready, scalable, and secure  "
                    },
                    {
                        title:"Full-Stack Development",
                        subtitle:"Drive excellent app performance across iOS and Android platforms, from front-end to backend dev to integrations. We've got you covered "
                    },
                ]}
            />

            <CategoryTools
                src="https://ik.imagekit.io/99x/startup/category/app_dev/LogoStack_bAfOSGmLN.png"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="480px"
                minHeight="490px"
                labelHeight={[
                    200,
                    556,
                    190,
                    125,
                    497,
                    300
                ]}
                title="Flexible Web Development Plans that grow with you"
                subtitle="With one platform everyone sees the whole picture. All for one flat rate. What’s not to love about us"
                plans={
                    SubscriptionPlanData.app_development
                }
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions/>
            
            <CategoryStillNotConvinced/>
        </> 
    )

}