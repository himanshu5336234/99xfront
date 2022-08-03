import React from "react"
import CategoryHomeBanner from "./_components/HomeBanner"
import CategoryMainFeatures from "./_components/MainFeatures"
import CategoryEverythingYouNeed from "./_components/EverythingYouNeed"
import CategorySubscriptionPlan from "./_components/SubscriptionPlan"

import WhyWorkWithUs from "../../components/WhyWorkWithUs"
import LikeAnEcosystem from "../../components/_sections/LikeAnEcosystem"
import StillHaveQuestions from "../../components/stilHaveQuestion"
import CategoryStillNotConvinced from "./_components/StillNotConvinced"

import SubscriptionPlanData from "../../data/subscription_plans"

import "./style.scss"
export default function GraphicsPage(props){

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/startup/category/graphic_design/Group_1558_Xj_5_hS0m.png"
                title={<>99x will be your <span className='highlight'>Graphic Design Studio</span></>}
                subtitle="Good Design is Good Business"
                description="Connect, communicate, and engage with eye-catchy, inspiring creatives with your users online - All for a single price point. "
            />

            <CategoryMainFeatures
                title={<>Add <span className='highlight'>colors</span> to your brand & online presence.</>}
                subtitle="Posters, Banners, Social Media Creatives, Digital Ads, Print, you name it, we got it."
                features={[
                    {
                        title:'Social Media & Digital Marketing',
                        subtitle:'Get all things designed wether its graphics for your Digital Marketing Campaigns, Social Media Posts or Banners and Covers for your social media pages. We’ve got you covered.',
                        icon:'https://ik.imagekit.io/99x/startup/category/graphic_design/Frame_435_k95n-tGahd.png'
                    },
                    {
                        title:'Print Media & Offline Marketing',
                        subtitle:'Wow people with stunning print design, whether it’s Standees, banners and hoardings, menus, brochures, etc. Our designers have the experience and expertise to take care of it for you.',
                        icon:'https://ik.imagekit.io/99x/startup/category/graphic_design/ContentWriter_-_fmxu8Sh.png'
                    },
                    {
                        title:'Presentations & Graphics for Business',
                        subtitle:'Take your ideas a step above, arm your business with radiant, vibrant and powerful visual design: Decks and presentations, event Posters, Banners, Profile Covers & more.',
                        icon:'https://ik.imagekit.io/99x/startup/category/graphic_design/Tactic_QSvAyA58Q.png'
                    }
                ]}
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="444px"
                maxWidthKeyFeatures="198px"
                title={'Flexible Graphic Design Plans that grow with you'}
                subtitle={'With one platform everyone sees the whole picture. All for one flat rate.. What’s not to love about us'}
                minHeight="500px"
                labelHeight={[
                    200,
                    474,
                    190,
                    175,
                    503,
                    300
                ]}
                plans={SubscriptionPlanData.graphic_design}
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions/>
            
            <CategoryStillNotConvinced/>
        </>
    )

}