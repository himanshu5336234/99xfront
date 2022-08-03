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

const SubscriptionPlanData = SubscriptionPlan.filter(e => e.key == "ui-ux-design")[0]

export default function UIUXCategoryPage(props) {

    return (
        <>
            <CategoryHomeBanner
                reverse
                banner="https://ik.imagekit.io/99x/design/_new/Mask_Group_91MYrVett2L.png"
                title={<>Design <span className='highlight'>products</span> that users fall in love with</>}
                subtitle="99x will be your UI-UX Design Studio "
                description="Design great experiences, build better products and delight your consumers with gorgeous interfaces - All for one price.. "
            />

            <CategoryMainFeatures
                title={<>Design <span className='highlight'>brilliant </span> experiences for your users</>}
                subtitle="From Wireframes to High Fidelity Prototypes, we ensure the Design flow is seamless throughout."
                features={[
                    {
                        title: 'Web, Mobile or Custom Apps, You choose',
                        subtitle: `Define. Empathize. Design. Test. We Design user Experiences based on a scientific basis, cognitive psychology, and behavioral science ensuring we solve your user's problem  `,
                        icon: 'https://ik.imagekit.io/99x/startup/category/seo/Frame_437_oCZoG66z3K.png'
                    },
                    {
                        title: 'Art & Science meet Context',
                        subtitle: `Deliver seamless and holistic user experiences that your customers expect, right at their fingertips. Leverage our industry knowledge from 20+ Industries with your vision and drive innovation. `,
                        icon: 'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter_ugEUgqHo22.png'
                    },
                    {
                        title: 'Unlimited Requests & Revisions',
                        subtitle: 'Request as many designs/posts your heart wants. Moreover make as many revision requests you need. Our designer will collaborate, make edits until you think it’s absolutely perfect. ',
                        icon: 'https://ik.imagekit.io/99x/startup/category/seo/ContentWriter-1_tyRV_j7xzY.png'
                    }
                ]}
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/design/BrandAwareness_Hover_-d2ea5gHpFs.png"
                subtitle="Work with your dream team"
                label="The customer journey differs for everybody. No matter your business need, our subscriptions, and people are flexible and experienced to pave the path that’s best for your business. "
                image="https://ik.imagekit.io/99x/design/Screenshot_2021-07-29_at_12.29.21_PM_OcKf8fz-PmS.png"
                f1={[
                    // {
                    //     icon: '',
                    //     text: 'Digital Marketing Manager'
                    // }
                ]}
                f2={[
                    {
                        title: "Design Thinking",
                        subtitle: "Deliver seamless experiences with well researched and thought-out wireframes, prototypes & screensl. "
                    },
                    {
                        title: "User Research",
                        subtitle: "Tailor-made UX for your Brand with analysis of Industry, Company, Competitors, Product."
                    },
                    {
                        title: 'User Interface',
                        subtitle: 'Gorgeous User Interfaces aligned with your Brand, Product & Marketing Objectives'
                    },
                    {
                        title: 'Interactive Prototypes',
                        subtitle: 'See the product in action, leave your notion to our designers to give it personality and flair. '
                    },
                    {
                        title: 'A/B Testing',
                        subtitle: 'Remove the subjectivity out of design, put it in action gain insights and make informed desicions.'
                    },
                    {
                        title: '+More',
                        subtitle: 'You need something more? Well, whatever your product design need is, We’ve got you covered. '
                    },
                ]}
            />



            <CategoryTools
                src="https://ik.imagekit.io/99x/design/Group_1916_B2EQFpheT.png"
            />

            <CategorySubscriptionPlan
                minHeightKeyFeatures="450px"
                minHeight="628px"
                labelHeight={[
                    180,
                    550,
                    190,
                    147,
                    632,
                    300
                ]}
                title={<>Flexible <span style={{ color: 'var(--color-primary)' }}>UI-UX</span> that grow with you</>}
                subtitle="With one platform everyone sees the whole picture. All for one flat rate.. What’s not to love about us"
                plans={SubscriptionPlanData.plans}
            />

            <section style={{ margin: '20px auto' }}>
                <EnterpriseSolutions icon="https://ik.imagekit.io/99x/social/Enterpise_zlK9DtWDS.png" />
            </section>

            <section style={{ margin: '20px auto' }}>
                <WhyWorkWithUs />
            </section>

            <section style={{ margin: '20px auto' }}>
                <LikeAnEcosystem />
            </section>

            <StillHaveQuestions site="design" />

            {/* <CategoryStillNotConvinced site="social" /> */}

            <CategoryCustomerReview />
        </>
    )

}