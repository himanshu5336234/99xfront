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

import SubscriptionPlan from "../../../data/sites/seo/subscription_plans"
import EnterpriseSolutions from "components/_sections/EnterpriseSolutions"
import CategoryCustomerReview from "./_components/CategoryCustomerReview"

const SubscriptionPlanData = SubscriptionPlan.filter(e=>e.key == "link-building")[0]

export default function LinkBuilding(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/seo/Link_Building_g_WILlydw.png"
                title={<>99x will be your <span className='highlight'>SEO Studio</span></>}
                subtitle="Accelerate organic traffic to your website"
                description="Claim your spot in top SERPs with a holistic SEO & link building approach that builds your expertise, authority and trust - All you need, All for one price. "
            />

            <CategoryMainFeatures
                title={<> <span className='highlight'>Link Building</span> that scales your Domain Authority</>}
                subtitle="On-Page SEO is just a start. Content & Link building will take it up another notch"
                features={[
                    {
                        title:'Your SEO Team, assembled',
                        subtitle:'A team of SEO specialist and content writer, work for your business. Formulating the best local search strategies that drives more foot traffic to your stores, building trust and authority at scale.',
                        icon:'https://ik.imagekit.io/99x/startup/category/video_creation/Unlimited_Requests_O1MHIBd2aL.png'
                    },
                    {
                        title:'Content that drives users for more.',
                        subtitle:'Content drives search. Stay ahead of the competition with engaging articles, blog posts & visuals that caters to your users, business and industry specifically.',
                        icon:'https://ik.imagekit.io/99x/startup/category/video_creation/SocialMediaAds_fl-mfxnPv.png'
                    },
                    {
                        title:'Content Distribution & Link Building',
                        subtitle:'Content creation is vital, but so is the distribution of it to reach your users. With our mix of proven search strategies and tactics, set up your store, site and SERPs for consistent growth. ',
                        icon:'https://ik.imagekit.io/99x/startup/category/video_creation/Unlimited_Requests-1_eCF6Z1N4T.png'
                    }
                ]
                }
            />


            <CategoryTools
                src="https://ik.imagekit.io/99x/social/Group_1544_8DwYeymKv.svg"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="450px"
                minHeight="570px"
                labelHeight={[
                    180,
                    550,
                    150,
                    166,
                    632,
                    300
                ]}
                title={<>Flexible <span style={{color:'var(--color-primary)'}}>Link Building Plans</span> that grow with you</>}
                subtitle="With one platform everyone sees the whole picture. All for one flat rate.. What’s not to love about us"
                plans={SubscriptionPlanData.plans}
            />


         
            <section style={{margin:'20px auto'}}>
                <EnterpriseSolutions icon="https://ik.imagekit.io/99x/social/Enterpise_pzOEb88u_.png"/>
            </section>

            <section style={{margin:'20px auto'}}>
                <WhyWorkWithUs/>
            </section>

            <section style={{margin:'20px auto'}}>
                <LikeAnEcosystem/>
            </section>

            <StillHaveQuestions site="seo"/>

            <CategoryCustomerReview/>
        </> 
    )

}