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

const SubscriptionPlanData = SubscriptionPlan.filter(e=>e.key == "social-media-management")[0]

export default function SocialMediaManagement(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/social/Image_1__HokR_B6tOl.png"
                title={<>99x will be your <span className='highlight'>Social Media Studio</span></>}
                subtitle="Make stronger relationships on social"
                description="Grow your Brand on Instagram, Twitter, Facebook & more with inspiring creatives & High-Quality Social Media Content - All for a flat rate."
            />

            <CategoryMainFeatures
                title={<>Build & grow your comminity on <span className='highlight'>Social Media</span></>}
                subtitle="Tailormade Social Media Posts for your Brand with great Graphics, Content & Copy"
                features={[
                    {
                        title:'Dedicated Social Media Team',
                        subtitle:'Work with your team of Social Media Manager, Graphic Designer & Content Writer. Plan, preview, and schedule your upcoming posts for your Calendar so that you stay on top of your audience’s newsfeed. ',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/Frame_437_oCZoG66z3K.png'
                    },
                    {
                        title:'Brand Specific Tailor-made Content',
                        subtitle:'Tell your story your way. We will create relevant content for each social network that’s speaks your brand language, content that communicates and connects with your industry, and audience.',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter_ugEUgqHo22.png'
                    },
                    {
                        title:'Social Media Posting and Scheduling',
                        subtitle:'Save time and stay a step ahead; don’t fret over the timely posting on Social Media. We got you covered with a pre-defined calendar and schedule and team that manages your social profiles. ',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter-1_tyRV_j7xzY.png'
                    }
                ]}
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/social/Group_976_MieLFXsPU.png"
                subtitle="Work with your dream team"
                image="https://ik.imagekit.io/99x/social/Screenshot_2021-05-08_at_8.42.29_PM_YzqspvvoY.png" 
                f1={[
                    // {
                    //     icon:'',
                    //     text:'Digital Marketing Manager'
                    // }
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
                        title:'Design & Graphics',
                        subtitle:'Rev up your Social Media with striking Graphics & Creatives '
                    },
                    {
                        title:'Reporting & more.',
                        subtitle:'We’ve collected the data you need. Dig deeper, get insights to grow reach, & engagement.'
                    },
                ]}
            />

            <CategoryTools
                src="https://ik.imagekit.io/99x/social/Group_1544_XxlKv9RlF.svg"
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
                title={<>Flexible <span style={{color:'var(--color-primary)'}}>Social Media Plans</span> that grow with you</>}
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