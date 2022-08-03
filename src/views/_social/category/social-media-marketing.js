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

const SubscriptionPlanData = SubscriptionPlan.filter(e=>e.key == "social-media-marketing")[0]

export default function SocialMediaMarketing(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/social/Image_UHz1mNJIU.png"
                title={<>99x will be your <span className='highlight'>Social Media Studio</span></>}
                subtitle="Up your Social Media Advertising game!"
                description="Make Social Media Marketing your superpower with the right ad creatives, copy & analytics. Combine the Art of Visual Design & Science with Ads to grow your brand."
            />

            <CategoryMainFeatures
                title={<><span className='highlight'>Social Media Marketing, </span>made simple</>}
                subtitle="Tailormade Social Media Advertising for your Brand with great Graphics, Content & Analytics"
                features={[
                    {
                        title:'Dedicated Social Media Team',
                        subtitle:'Work with your team of Social Media Manager, Graphic Designer & Content Writer. Plan, preview, and schedule your upcoming posts for your Calendar so that you stay on top of your audience’s newsfeed. ',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/Frame_437_oCZoG66z3K.png'
                    },
                    {
                        title:'Ad Creatives & Copy that Convert',
                        subtitle:'Social Media Marketing is partly math and art. We’ll take care of the both the sides for you. Marketing expertise + compelling Ad Creatives, Graphics & Copy = More engagements  and sales. ',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter_ugEUgqHo22.png'
                    },
                    {
                        title:'Unlimited Requests & Revisions',
                        subtitle:'Ceate ads for multiple campaigns in multiple adsets to monitor the best performing ones for your business. We will A/B test everything till we maximise the returns on your ad spends on all campaigns ',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter-1_tyRV_j7xzY.png'
                    }
                ]}
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/startup/category/digital_marketing/BrandAwareness_Hover_zBcwG2ddo.png"
                subtitle="Work with a Team of Professionals,"
                image="https://ik.imagekit.io/99x/social/Screenshot_2021-05-08_at_8.42.29_PM_YzqspvvoY.png" 
                f1={[
                    // {
                    //     icon:'',
                    //     text:'Digital Marketing Manager'
                    // }
                ]}
                f2={[
                    {
                        title:"Brand Awareness",
                        subtitle:"Stand out from the noise. Inspire your audience to take action your social channels"
                    },
                    {
                        title:"FB Ads",
                        subtitle:"Close the gap between you and your audience with Lead gen campaigns"
                    },
                    {
                        title:'Instagram Ads',
                        subtitle:'Drive more sales and revenue to your website or app with social media campaigns that sell'
                    },
                    {
                        title:'Video Marketing',
                        subtitle:'Make an impact, grow your online presence with engaging video campaigns'
                    },
                    {
                        title:'Engagement Ads',
                        subtitle:'Get more people using your app with solid social media strategy and data driven approach. '
                    },
                    {
                        title:'+ Twitter & others',
                        subtitle:'You need something else? Well, whatever your marketing need is, We’ve got you covered. '
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