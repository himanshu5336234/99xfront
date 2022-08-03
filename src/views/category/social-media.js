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
export default function SocialMediaPage(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/startup/category/social_media/Image_2qKZY74pN.png"
                title={<>99x will be your <span className='highlight'>Social Media Agency</span></>}
                subtitle="Make stronger relationships on social"
                description="Grow your Brand on Instagram, Twitter, Facebook & more with inspiring creatives & High-Quality Social Media Content - All for a flat rate."
            />

            <CategoryMainFeatures
                title={<>Build & grow your community on <span>Social Media</span></>}
                subtitle="Tailormade Social Media Posts for your Brand with great Graphics, Content & Copy"
                features={[
                    {
                        title:'Dedicated Social Media Team',
                        subtitle:'Work with your team of Social Media Manager, Graphic Designer & Content Writer. Plan, preview, and schedule your upcoming posts for your Calendar so that you stay on top of your audience’s newsfeed.',
                        icon:'https://ik.imagekit.io/99x/startup/category/social_media/Vector_lq-SDI2Hbe.png'
                    },
                    {
                        title:'Brand Specific Tailor-made Content',
                        subtitle:'Tell your story your way. We will create relevant content for each social network that’s speaks your brand language, content that communicates and connects with your industry, and audience.',
                        icon:'https://ik.imagekit.io/99x/startup/category/social_media/ContentWriter_1__3qZneWHuNj.png'
                    },
                    {
                        title:'Social Media Posting and Scheduling',
                        subtitle:'Save time and stay a step ahead; don’t fret over the timely posting on Social Media. We got you covered with a pre-defined calendar and schedule and team that manages your social profiles.',
                        icon:'https://ik.imagekit.io/99x/startup/category/social_media/Posting_VbzamtZUjg.png'
                    }
                ]}
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/startup/category/social_media/BrandAwareness_Hover_88lMNCdD0.png"
                subtitle="Work with your dream team"
                image="https://ik.imagekit.io/99x/startup/category/social_media/Group_973_3AqxKqrcB.png" 
                f1={[
                    {
                        icon:'',
                        text:'Digital Marketing Manager'
                    }
                ]}
                f2={[
                    {
                        title:"Social Media Calendar",
                        subtitle:"Queue up thumb-stopping content across your social media channels ahead of time."
                    },
                    {
                        title:"Content & Copy",
                        subtitle:"Add value to your consumers  with engaging content & copywriting"
                    },
                    {
                        title:"Design & Graphics",
                        subtitle:"Rev up your Social Media with striking Graphics & Creatives "
                    },
                    {
                        title:"Reporting & more.",
                        subtitle:"We’ve collected the data you need. Dig deeper, get insights to grow reach, & engagement."
                    },
                ]}
            />

            <CategoryTools
                src="https://ik.imagekit.io/99x/startup/category/social_media/Group_1544_CsRkxP2aJ.png"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="420px"
                minHeight="620px"
                labelHeight={[
                    172,
                    440,
                    226,
                    179,
                    632,
                    300
                ]}
                title={<>Flexible <span>Social Media</span> Plans that grow with you</>}
                subtitle="With one platform everyone sees the whole picture. All for one flat rate. What’s not to love about us"
                plans={SubscriptionPlanData.social_media}
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions/>
            
            <CategoryStillNotConvinced/>
        </> 
    )

}