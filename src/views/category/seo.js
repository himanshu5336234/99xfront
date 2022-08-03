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
export default function SeoPage(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/startup/category/seo/shutterstock_1057014806_1_UUvkQ4KTN.png"
                title={<>99x will be your <span className='highlight'>SEO Agency</span></>}
                subtitle="Accelerate organic traffic to your website"
                description="All you need for SEO, from On-Page, Technical SEO to Content & Link Building. Let us help you scale your search optimization & content marketing efforts, build authority, and move your site up the SERPs - All for one price."
            />

            <CategoryMainFeatures
                title={<>Boost your <span className='highlight'>Search Engine Optimization</span> efforts</>}
                subtitle="Technical SEO is just a start. Content & Link building will take it up another notch"
                features={[
                    {
                        title:'Your SEO Team, assembled',
                        subtitle:'A team of SEO Specialist, Content Writer & Content Distributor, work for your busines. Formulating the right search strategy, that drives traffic, builds expertise, and authority.',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/Frame_437_oCZoG66z3K.png'
                    },
                    {
                        title:'Content that drives users for more.',
                        subtitle:'Content drives search. Stay ahead of the competition with engaging articles, blog posts & visuals that caters to your users, business and industry specifically.',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter_ugEUgqHo22.png'
                    },
                    {
                        title:'Content Distribution & Link Building',
                        subtitle:'Content creation is vital, but so is the distribution of it to reach your users. With our mix of proven search strategies and tactics, set up your website and SERPs for growth consistently.',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter-1_tyRV_j7xzY.png'
                    }
                ]}
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/startup/category/seo/BrandAwareness_Hover_QqntenOIC.png"
                subtitle="Work with your dream team"
                image="https://ik.imagekit.io/99x/startup/category/seo/Group_973_4u9qao8tv.png" 
                f1={[
                    {
                        icon:'',
                        text:'Digital Marketing Manager'
                    }
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
                        title:'Link Building',
                        subtitle:'Build authority, get links from high-quality sources and drive relevant traffic to your site.'
                    },
                    {
                        title:'Content Distribution',
                        subtitle:'Get more traction with Whitehat directory submissions, social bookmarkings & more'
                    },
                    {
                        title:'Tools & Reporting',
                        subtitle:'We’ve collected the tools you need. Get optimized and stay ahead with detailed anlytics & reports. '
                    },
                    {
                        title:'+More',
                        subtitle:'You need something more? Well, whatever your SEO need is, We’ve got you covered. '
                    },
                ]}
            />

            <CategoryTools
                src="https://ik.imagekit.io/99x/startup/category/seo/LogoStack_zK9fCTDfi.png"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="300px"
                minHeight="651px"
                labelHeight={[
                    180,
                    340,
                    230,
                    148,
                    650,
                    300
                ]}
                title="Flexible SEO Plans that grow with you"
                subtitle="With one platform everyone sees the whole picture. All for one flat rate. What’s not to love about us"
                plans={SubscriptionPlanData.seo}
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions/>
            
            <CategoryStillNotConvinced/>
        </> 
    )

}