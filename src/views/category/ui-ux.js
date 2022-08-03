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
export default function UiuxPage(props){

    return (
        <>
            <CategoryHomeBanner
                banner="https://ik.imagekit.io/99x/startup/category/ui_ux/Group_1400_6YJaZZIW-E.png"
                title={<>99x will be your <span className='highlight'>UI-UX Design Studio</span></>}
                subtitle="Build Products that your users love"
                description="Design great experiences, build better products and delight your consumers with gorgeous interfaces - All for one price.   "
            />

            <CategoryMainFeatures
                title={<>Design <span className='highlight'>brilliant</span> experiences for your users.</>}
                subtitle="From Wireframes to High Fidelity Prototypes, we ensure the Design flow is seamless throughout."
                features={[
                    {
                        title:'Web, Mobile or Custom Apps, You choose',
                        subtitle:'Define. Empathize. Design. Test. We Design user Experiences based on a scientific basis, cognitive psychology, and behavioral science ensuring we solve your user\'s problem',
                        icon:'https://ik.imagekit.io/99x/startup/category/ui_ux/Custom_Apps_yZ3fKjr35.png'
                    },
                    {
                        title:'Art & Science meet Context',
                        subtitle:'Deliver seamless and holistic user experiences that your customers expect, right at their fingertips. Leverage our industry knowledge from 20+ Industries with your vision and drive innovation.',
                        icon:'https://ik.imagekit.io/99x/startup/category/ui_ux/ContentWriter__JIUdKUge7.png'
                    },
                    {
                        title:'Unlimited Requests & Revisions',
                        subtitle:'Request as many designs/posts your heart wants. Moreover make as many revision requests you need. Our designer will collaborate, make edits until you think it’s absolutely perfect.',
                        icon:'https://ik.imagekit.io/99x/startup/category/ui_ux/Unlimited_Requests_Zii8RTw4xT.png'
                    }
                ]
                }
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/startup/category/ui_ux/BrandAwareness_Hover_rIqt3Kqdh.png"
                subtitle="Work with your dream team"
                image="https://ik.imagekit.io/99x/startup/category/ui_ux/Group_973_WWW2cw6IG.png"
                f1={[
                    {
                        icon:'',
                        text:'Digital Marketing Manager'
                    }
                ]}
                f2={[
                    {
                        title:"Design Thinking",
                        subtitle:"Deliver seamless experiences with well researched and thought-out wireframes, prototypes & screensl. "
                    },
                    {
                        title:"User Research",
                        subtitle:"Tailor-made UX for your Brand with analysis of Industry, Company, Competitors, Product."
                    },
                    {
                        title:"User Interface",
                        subtitle:"Gorgeous User Interfaces aligned with your Brand, Product & Marketing Objectives"
                    },
                    {
                        title:"Interactive Prototypes",
                        subtitle:"See the product in action, leave your notion to our designers to give it personality and flair. "
                    },
                    {
                        title:"A/B Testing",
                        subtitle:"Remove the subjectivity out of design, put it in action gain insights and make informed desicions."
                    },
                    {
                        title:"More +",
                        subtitle:"You need something more? Well, whatever your product design need is, We’ve got you covered. "
                    },
                ]}
            />

            <CategoryTools
                src="https://ik.imagekit.io/99x/startup/category/ui_ux/01_afJqeJPht.png"
            />

            <CategorySubscriptionPlan
                planUnit="Per Page / Screen"
                minHeightKeyFeatures="450px"
                minHeight="600px"
                labelHeight={[
                    200,
                    455,
                    220,
                    170,
                    602,
                    300
                ]}
                title="Flexible UI-UX Plans that grow with you"
                subtitle="With one platform everyone sees the whole picture. All for one flat rate. What’s not to love about us"
                plans={
                    SubscriptionPlanData.ui_ux
                }
            />


            <WhyWorkWithUs/>

            <LikeAnEcosystem/>

            <StillHaveQuestions/>
            
            <CategoryStillNotConvinced/>
        </> 
    )

}