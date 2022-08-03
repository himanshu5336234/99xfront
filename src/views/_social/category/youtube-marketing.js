import React from "react"
import CategoryHomeBanner from "./_components/HomeBanner"
import CategoryMainFeatures from "./_components/MainFeatures"
import CategoryEverythingYouNeed from "./_components/EverythingYouNeed"

import "./style.scss"
import CategorySubscriptionPlan from "./_components/SubscriptionPlan"
import WhyWorkWithUs from "../../../components/WhyWorkWithUs"
import LikeAnEcosystem from "../../../components/_sections/LikeAnEcosystem"
import StillHaveQuestions from "../../../components/stilHaveQuestion"
import CategoryStillNotConvinced from "./_components/StillNotConvinced"
import CategoryTools from "./_components/CategoryTools"

import SubscriptionPlan from "../../../data/sites/social/subscriptions"
import EnterpriseSolutions from "components/_sections/EnterpriseSolutions"
import CategoryCustomerReview from "./_components/CategoryCustomerReview"

const SubscriptionPlanData = SubscriptionPlan.filter(e=>e.key == "youtube-marketing")[0]

export default function YoutubeMarketing(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/social/Group_2015_-NlIAiNjOV.png"
                title={<>99x will be your <span className='highlight'>Social Media Studio</span></>}
                subtitle="Build, Connect and grow your community on Youtube"
                description="Take your online presence to new heights, and drive engagements at scale. Let us help you build and connect with your users and community  with the right people, tools, and guidance every step of the way - All for one flat rate."
            />

            <CategoryMainFeatures
                title={<>Build & grow your community on <span className='highlight'>Youtube</span></>}
                subtitle=" Find, engage, make real connections with your audience on youtube with top-notch marketing"
                features={[
                    {
                        title:'Dedicated Youtube Marketing team',
                        subtitle:'Work with a team of dedicated experts since day one. Stay on top of your users with Youtube Channel Manager, Digital Marketer & Content Writer who will work with you to scale your channel.',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/Frame_437_oCZoG66z3K.png'
                    },
                    {
                        title:'Youtube Search Optimization ',
                        subtitle:'Grow your channel consistenly with our end-to-end channel optimizations - from research to optimized content to distribution that reach your people and sets your channel up for growth. ',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter_ugEUgqHo22.png'
                    },
                    {
                        title:'Unlimited Requests & Revisions',
                        subtitle:'Ceate ads for multiple campaigns in multiple adsets to monitor the best performing ones for your business. We will A/B test everything till we maximise the returns on your ad spends on all campaigns ',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter-1_tyRV_j7xzY.png'
                    }
                ]}
            />

         

            <CategorySubscriptionPlan
                minHeightKeyFeatures="450px"
                minHeight="570px"
                labelHeight={[
                    180,
                    550,
                    190,
                    166,
                    632,
                    300
                ]}
                title={<>Flexible <span style={{color:'var(--color-primary)'}}>Youtube Marketing </span> that grow with you</>}
                subtitle="With one platform everyone sees the whole picture. All for one flat rate.. What’s not to love about us"
                plans={SubscriptionPlanData.plans}
            />

            <section style={{margin:'20px auto'}}>
                <EnterpriseSolutions icon="https://ik.imagekit.io/99x/social/Enterpise_zlK9DtWDS.png"/>
            </section>

            <section style={{margin:'20px auto'}}>
                <WhyWorkWithUs/>
            </section>

            <section style={{margin:'20px auto'}}>
                <LikeAnEcosystem/>
            </section>

            <StillHaveQuestions site="social"/>
            
            <CategoryStillNotConvinced site="social"/>

            <CategoryCustomerReview/>
        </> 
    )

}