import React from "react"
import CategoryHomeBanner from "./_components/HomeBanner"
import CategoryMainFeatures from "./_components/MainFeatures"
import CategoryEverythingYouNeed from "./_components/EverythingYouNeed"

import "./style.scss"
import SubscriptionPlanData from "../../data/subscription_plans"

import CategorySubscriptionPlan from "./_components/SubscriptionPlan"
import WhyWorkWithUs from "../../components/WhyWorkWithUs"
import LikeAnEcosystem from "../../components/_sections/LikeAnEcosystem"
import StillHaveQuestions from "../../components/stilHaveQuestion"
import CategoryStillNotConvinced from "./_components/StillNotConvinced"
import CategoryTools from "./_components/CategoryTools"
export default function DigitalMarketingPage(props){

    return (
        <>
            <CategoryHomeBanner
                banner="https://ik.imagekit.io/99x/startup/category/digital_marketing/hero_image_e6DGh_z7r.png"
                title={<>99x will be your <span className='highlight'>Digital Marketing Agency</span></>}
                subtitle="Win customers across channels"
                description="Everything from Lead Gen, Sales, App Installs to Brand Awareness. Let us help solve your marketing challenges by providing you Professional  talent, right tools, and guidance every step of the way - All for one flat rate."
            />

            <CategoryMainFeatures
                title={<>Create campaigns that drive <span className='highlight'>results</span></>}
                subtitle="Focus on driving revenues and retention with a holistic Digital Marketing Approach."
                features={[
                    {
                        title:'Your Digital Marketing team, assembled',
                        subtitle:'With us, you wont just get a guy who runs campaigns, you get to work with a team of experts. An experienced Digital Marketer, Graphic Designer & Content Writer for your campaigns.',
                        icon:'https://ik.imagekit.io/99x/startup/category/digital_marketing/design_f1_oa_3laXbKz.png'
                    },
                    {
                        title:'Ad Creatives & Copy that Convert',
                        subtitle:'Digital Marketing is Math and Art. We’ll take care of the both the sides for you. Marketing expertise + compelling Ad Creatives, Graphics & Copy = More engagements and sales.',
                        icon:'https://ik.imagekit.io/99x/startup/category/digital_marketing/design_f2_GwCYWmyFcm.svg'
                    },
                    {
                        title:'Your Digital Marketing team, assembled',
                        subtitle:'With us, you wont just get a guy who runs campaigns, you get to work with a team of experts. An experienced Digital Marketer, Graphic Designer & Content Writer for your campaigns.',
                        icon:'https://ik.imagekit.io/99x/startup/category/digital_marketing/design_f3_gR8hbXzTO.png'
                    }
                ]}
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/startup/category/digital_marketing/BrandAwareness_Hover_zBcwG2ddo.png"
                subtitle="Work with a Team of Professionals"
                image="https://ik.imagekit.io/99x/startup/category/digital_marketing/Group_973_XnMvS_iKM.png"
                f1={[
                    {
                        icon:'',
                        text:'Digital Marketing Manager'
                    }
                ]}
                f2={[
                    {
                        title:"Brand Awareness",
                        subtitle:"Stand out from the noise. Inspire your audience to take action your online channels"
                    },
                    {
                        title:"Lead Generation ",
                        subtitle:"Close the gap between you and your ideal customers with Lead gen campaigns"
                    },
                    {
                        title:'Sales',
                        subtitle:'Drive more sales and revenue to your website or app with digital campaigns that sell'
                    },
                    {
                        title:'Video',
                        subtitle:'Make an impact, grow your online presence with engaging video campaigns'
                    },
                    {
                        title:'App Marketing',
                        subtitle:'Get more people using your app with solid strategy and data driven approach. '
                    },
                    {
                        title:'+More',
                        subtitle:'You need something else? Well, whatever your marketing need is, We’ve got you covered. '
                    },
                ]}
            />

            <CategoryTools
                src="https://ik.imagekit.io/99x/startup/category/digital_marketing/Group_1559_pY3Env7-Q.png"
            />

            <CategorySubscriptionPlan
                minHeight="632px"
                labelHeight={[
                    200,
                    356,
                    235,
                    170,
                    632,
                    300
                ]}
                plans={
                    SubscriptionPlanData.digital_marketing
                }
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions/>
            
            <CategoryStillNotConvinced/>
        </> 
    )

}