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

import SubscriptionPlan from "../../../data/sites/design/subscriptions"
import EnterpriseSolutions from "components/_sections/EnterpriseSolutions"
import CategoryCustomerReview from "./_components/CategoryCustomerReview"

const SubscriptionPlanData = SubscriptionPlan.filter(e=>e.key == "graphic-design")[0]

export default function SocialMediaManagement(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/design/_new/Image_g-CWjcTH2Fj.png"
                title={<>Fresh ideas, great designs for your <span className='highlight'>business</span></>}
                subtitle="99x will be your Graphic Design Studio"
                description="Connect, communicate, and engage with eye-catchy, inspiring creatives with your audience and people - All for one price. "
            />

            <CategoryMainFeatures
                title={<>Add colors to your brand & online presence.</>}
                subtitle="Posters, Banners, Social Media Creatives, Digital Ads, Print, you name it, we got it."
                features={[
                    {
                        title:'Social Media & Digital Marketing',
                        subtitle:'Get all things designed wether its graphics for your Digital Marketing Campaigns, Social Media Posts or Banners and Covers for your social media pages. We’ve got you covered. ',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/Frame_437_oCZoG66z3K.png'
                    },
                    {
                        title:'Print Media & Offline Marketing',
                        subtitle:'Wow people with stunning print design, whether it’s Standees, banners and hoardings, menus, brochures, etc.  Our designers have the experience and expertise to take care of it for you. ',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter_ugEUgqHo22.png'
                    },
                    {
                        title:'Presentations & Graphics for Business',
                        subtitle:'Take your ideas a step above, arm your business with radiant, vibrant and powerful visual design: Decks and presentations, event Posters, Banners, Profile Covers & more.',
                        icon:'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter-1_tyRV_j7xzY.png'
                    }
                ]}
            />

            <CategoryTools
                src="https://ik.imagekit.io/99x/design/_new/Group_1915_nNPjdnS7uUL.png"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="450px"
                minHeight="570px"
                labelHeight={[
                    180,
                    550,
                    190,
                    156,
                    563,
                    300
                ]}
                title={<>Flexible <span style={{color:'var(--color-primary)'}}>Graphic Design </span> Plans that grow with you</>}
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