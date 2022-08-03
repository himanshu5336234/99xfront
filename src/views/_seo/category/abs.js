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

const SubscriptionPlanData = SubscriptionPlan.filter(e=>e.key == "abs")[0]

export default function TechPage(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/seo/Image_9NL7-olUhW.png"
                title={<>99x will build your <span className='highlight'>Content Pipeline</span></>}
                subtitle="Get fascinating articles & blogs with ease"
                description="Charm your audience, keep them engaged and build better relations with good SEO optimized articles, blogs and visuals that advocates, converses them, for them. "
            />

            <CategoryMainFeatures
                title={<>Boost your <span className='highlight'>App Store Optimization</span> efforts</>}
                subtitle="Local SEO is just a start. Content & Link building will take it up another notch"
                features={[
                    {
                        title:'Genuine Industry Specific Articles',
                        subtitle:'Drive your online presence with authentic Short, Medium & Long Form Articles & Blog content specifically for your industry company and audiences.',
                        icon:'https://ik.imagekit.io/99x/seo/Vector_O2k3VHz1RJ.png'
                    },
                    {
                        title:'High-Quality Long Form Content',
                        subtitle:'Keep your audience interested, build your expertise and authority with high-quality long-form & authentic content. Converse, inform, describe meaningfully. ',
                        icon:'https://ik.imagekit.io/99x/seo/ContentWriter_bRfxkYZ2N.png'
                    },
                    {
                        title:'Graphics, Creatives & Visual Design',
                        subtitle:'Combine your compelling context and ideas with striking graphics, creative visual design to the textual content, show your point of view with an impact. ',
                        icon:'https://ik.imagekit.io/99x/seo/Vector__Stroke__UC8J_u5vEA.png'
                    }
                ]}
            />

            <section style={{textAlign:'center'}}>
                <img src="https://ik.imagekit.io/99x/seo/LogoStack_yphcMOn-M.png"/>
            </section>

            <CategorySubscriptionPlan
                minHeightKeyFeatures="450px"
                minHeight="530px"
                labelHeight={[
                    180,
                    550,
                    150,
                    166,
                    530,
                    300
                ]}
                title={<>Flexible <span style={{color:'var(--color-primary)'}}>Articles & Blog</span> Plans that grow with you</>}
                subtitle="With one platform everyone sees the whole picture. All for one flat rate.. What’s not to love about us"
                plans={SubscriptionPlanData.plans}
            />

            <section style={{margin:'20px auto'}}>
                <EnterpriseSolutions icon="https://ik.imagekit.io/99x/social/Enterpise_pzOEb88u_.png"/>
            </section>

            <section style={{background:'#FEF1EC',paddingTop:'30px',paddingBottom:'30px'}}>

                <section style={{margin:'20px auto'}}>
                    <WhyWorkWithUs/>
                </section>

                <section style={{margin:'20px auto'}}>
                    <LikeAnEcosystem/>
                </section>

            </section>

            <StillHaveQuestions site="seo"/>

            {/* <CategoryStillNotConvinced site="seo"/> */}

            <CategoryCustomerReview/>

        </>
    )

}