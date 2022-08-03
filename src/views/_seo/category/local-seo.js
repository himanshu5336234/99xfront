import React from "react"
import CategoryHomeBanner from "./_components/HomeBanner"
import CategoryMainFeatures from "./_components/MainFeatures"
import CategoryEverythingYouNeed from "./_components/EverythingYouNeed"
import CategoryStillNotConvinced from "./_components/StillNotConvinced"
import CategorySubscriptionPlan from "./_components/SubscriptionPlan"

import "./style.scss"
import WhyWorkWithUs from "components/WhyWorkWithUs"
import LikeAnEcosystem from "components/_sections/LikeAnEcosystem"
import StillHaveQuestions from "components/stilHaveQuestion"

import SubscriptionPlan from "../../../data/sites/seo/subscription_plans"
import EnterpriseSolutions from "components/_sections/EnterpriseSolutions"
import CategoryCustomerReview from "./_components/CategoryCustomerReview"

const SubscriptionPlanData = SubscriptionPlan.filter(e=>e.key == "local-seo")[0]

export default function TechPage(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/seo/Screenshot_2021-05-07_at_5.59.43_PM_gUtblfgTAi.png"
                title={<>99x will be your <span className='highlight'>SEO Studio</span></>}
                subtitle="Win customers across channels"
                description="Everything from Lead Gen, Sales, App Installs to Brand Awareness. Let us help solve your marketing challenges by providing you Professional  talent, right tools, and guidance every step of the way - All for one flat rate."
            />

            <CategoryMainFeatures
                title={<>Boost your <span className='highlight'>Local SEO</span> efforts</>}
                subtitle="Local SEO is just a start. Content & Link building will take it up another notch"
                features={[
                    {
                        title:'Your SEO Team, assembled',
                        subtitle:'A team of SEO specialist and content writer, work for your business. Formulating the best local search strategies that drives more foot traffic to your stores, building trust and authority at scale.',
                        icon:'https://ik.imagekit.io/99x/seo/Vector_O2k3VHz1RJ.png'
                    },
                    {
                        title:'Content that drives users for more.',
                        subtitle:'Content drives search. Stay ahead of the competition with engaging articles, blog posts & visuals that caters to your users, business and industry specifically.',
                        icon:'https://ik.imagekit.io/99x/seo/ContentWriter_bRfxkYZ2N.png'
                    },
                    {
                        title:'Content Distribution &  Link Building',
                        subtitle:'Content creation is vital, but so is the distribution of it to reach your users. With our mix of proven search strategies and tactics, set up your store, site and SERPs for consistent growth. ',
                        icon:'https://ik.imagekit.io/99x/seo/Vector__Stroke__UC8J_u5vEA.png'
                    }
                ]}
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/seo/BrandAwareness_Hover_aeg0d7NMA.png"
                subtitle="Work with your dream team, "
                f1={[
                    {
                        icon:'https://ik.imagekit.io/99x/seo/Group_65_awqpty_0Br.svg',
                        text:'SEO Manager'
                    },
                    {
                        icon:'https://ik.imagekit.io/99x/seo/Copywriter_-_32px_wb0ERq3quI.svg',
                        text:'Content Writer'
                    },
                ]}
                f2={[
                    {
                        title:"On-Page & Technical",
                        subtitle:"Audit, analyze and fix the core search driving factors that help move  up the search ladder."
                    },
                    {
                        title:"Content Creation",
                        subtitle:"Add value to your consumers  with engaging articles, blog post and visuals."
                    },
                    {
                        title:"Link Building",
                        subtitle:"Build authority, get links from high-quality sources and drive relevant traffic to your site."
                    },
                    {
                        title:"Content Distribution",
                        subtitle:"Get more traction with Whitehat directory submissions, social bookmarkings & more"
                    },
                    {
                        title:"Tools & Reporting",
                        subtitle:"We’ve collected the tools you need. Get optimized and stay ahead with detailed anlytics & reports. "
                    },
                    {
                        title:"+ More",
                        subtitle:"You need something more? Well, whatever your SEO need is, We’ve got you covered. "
                    },
                ]}
            />

            {/* ToDo: Add Clients */}

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
                title={<>Flexible <span style={{color:'var(--color-primary)'}}>Social Media Plans</span> that grow with you</>}
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

            {/* <CategoryStillNotConvinced site="seo"/> */}

            <CategoryCustomerReview/>

        </>
    )

}