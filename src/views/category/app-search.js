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
export default function CxoMarketingPage(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/startup/category/aso/Hero_TBNYuVegz.png"
                title={<>99x will be your <span className='highlight'>App Marketing Agency</span></>}
                subtitle="Drive more organic users to your mobile app"
                description="Boost your app ranking and discoverability. From content to Link Building to app store optimizations, we’ve got you covered - All for one price."
            />

            <CategoryMainFeatures
                title={<>Build <span className='highlight'>App Store Optimization</span> efforts</>}
                subtitle="Professional SEO Management to Get Your App Noticed More and Drive more users "
                features={[
                    {
                        title:'Your ASO Team, assembled',
                        subtitle:'A team of ASO Specialist, Content Writer & Content Distributor, work for your busines. Formulating the right ASO strategies, that drives more users, gets your app noticed often.',
                        icon:'https://ik.imagekit.io/99x/startup/category/aso/Frame_437__MU-UwRxb.png'
                    },
                    {
                        title:'App Store Content + Metadata',
                        subtitle:'Enable your mobile with stunning app store content and solid keyword optimization and metadata updates to make it easier for your user to reach you, right when they need you.',
                        icon:'https://ik.imagekit.io/99x/startup/category/aso/Tactic_c4YeOMyhgD.png'
                    },
                    {
                        title:'App Distribution & Link Building',
                        subtitle:'Content creation is vital, but so is the distribution of it to reach your users. With a mix of link distribution tactics, set up your mobile apps and SERPs for growth consistently.',
                        icon:'https://ik.imagekit.io/99x/startup/category/aso/ContentWriter_1__zVoIJKetI_.png'
                    }
                ]
                }
            />

           
            <CategoryTools
                src="https://ik.imagekit.io/99x/startup/category/aso/01_1__hy76CnNwZ.png"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="300px"
                minHeight="570px"
                labelHeight={[
                    200,
                    420,
                    190,
                    150,
                    632,
                    300
                ]}
                title="Flexible ASO Plans that grow with you"
                subtitle="With one platform everyone sees the whole picture. All for one flat rate. What’s not to love about us"
                plans={
                    SubscriptionPlanData.aso
                }
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions/>
            
            <CategoryStillNotConvinced/>
        </> 
    )

}