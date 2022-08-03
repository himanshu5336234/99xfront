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

const SubscriptionPlanData = SubscriptionPlan.filter(e=>e.key == "aso")[0]

export default function TechPage(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/seo/Vector_bV-lzU3Jg.png"
                title={<>99x will manage <span className='highlight'>your ASO</span></>}
                subtitle="Drive more users organically to your app"
                description="Set up your app for sucess and boost your app ranking and discoverability. From content to Link Building to app store optimizations, we’ve got you covered - All for one price."
            />

            <CategoryMainFeatures
                title={<>Boost your <span className='highlight'>App Store Optimization</span> efforts</>}
                subtitle="Local SEO is just a start. Content & Link building will take it up another notch"
                features={[
                    {
                        title:'Your ASO Team, assembled',
                        subtitle:'A team of ASO Specialist, Content Writer & Content Distributor, work for your busines. Formulating the right ASO strategies, that drives more users, gets your app noticed often. ',
                        icon:'https://ik.imagekit.io/99x/seo/Vector_O2k3VHz1RJ.png'
                    },
                    {
                        title:'App Store Content + Metadata ',
                        subtitle:'Enable your mobile with stunning app store content and solid keyword optimization and metadata updates to  make it easier for your user to reach you, right when they need you.',
                        icon:'https://ik.imagekit.io/99x/seo/ContentWriter_bRfxkYZ2N.png'
                    },
                    {
                        title:'App Distribution & Link Building',
                        subtitle:'Content creation is vital, but so is the distribution of it to reach your users. With a mix of link distribution tactics, set up your mobile apps and SERPs for growth consistently. ',
                        icon:'https://ik.imagekit.io/99x/seo/Vector__Stroke__UC8J_u5vEA.png'
                    }
                ]}
            />  

            <section style={{textAlign:'center'}}>
                <img style={{maxWidth:'100%'}} src="https://ik.imagekit.io/99x/seo/01_ffGqb6FSt.png"/>
            </section>

            <CategorySubscriptionPlan
                minHeightKeyFeatures="450px"
                minHeight="570px"
                labelHeight={[
                    180,
                    550,
                    150,
                    166,
                    571,
                    300
                ]}
                title={<>Flexible <span style={{color:'var(--color-primary)'}}>ASO</span> that grow with you</>}
                subtitle="With one platform everyone sees the whole picture. All for one flat rate.. What’s not to love about us"
                plans={SubscriptionPlanData.plans}
            />

            <section style={{margin:'20px auto'}}>
                <EnterpriseSolutions icon="https://ik.imagekit.io/99x/social/Enterpise_pzOEb88u_.png"/>
            </section>

            <section style={{background:'#FEF1EC'}}>
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