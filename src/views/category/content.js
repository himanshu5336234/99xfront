import React from "react"
import CategoryHomeBanner from "./_components/HomeBanner"
import CategoryMainFeatures from "./_components/MainFeatures"
import CategoryEverythingYouNeed from "./_components/EverythingYouNeed"

import "./style.scss"
export default function ContentPage(props){

    return (
        <>
            <CategoryHomeBanner
                banner="https://ik.imagekit.io/99x/startup/category/digital_marketing/hero_image_e6DGh_z7r.png"
                title={<>99x will be your <span className='highlight'>Digital Marketing Agency</span></>}
                subtitle="Win customers across channels"
                description="Everything from Lead Gen, Sales, App Installs to Brand Awareness. Let us help solve your marketing challenges by providing you Professional  talent, right tools, and guidance every step of the way - All for one flat rate."
            />

            <CategoryMainFeatures
                title={<>Create campaigns that drive <span className='highlight'>results</span></>}
                subtitle="Focus on driving revenues and retention with a holistic Digital Marketing Approach."
                features={[
                    {
                        title:'Your Digital Marketing team, assembled',
                        subtitle:'With us, you wont just get a guy who runs campaigns, you get to work with a team of experts. An experienced Digital Marketer, Graphic Designer & Content Writer for your campaigns.',
                        icon:''
                    },
                    {
                        title:'Your Digital Marketing team, assembled',
                        subtitle:'With us, you wont just get a guy who runs campaigns, you get to work with a team of experts. An experienced Digital Marketer, Graphic Designer & Content Writer for your campaigns.',
                        icon:''
                    },
                    {
                        title:'Your Digital Marketing team, assembled',
                        subtitle:'With us, you wont just get a guy who runs campaigns, you get to work with a team of experts. An experienced Digital Marketer, Graphic Designer & Content Writer for your campaigns.',
                        icon:''
                    }
                ]}
            />

            <CategoryEverythingYouNeed
                banner="https://ik.imagekit.io/99x/startup/category/digital_marketing/BrandAwareness_Hover_zBcwG2ddo.png"
                subtitle="Work with a Team of Professionals"
                f1={[
                    {
                        icon:'',
                        text:'Digital Marketing Manager'
                    }
                ]}
                f2={[
                    {
                        title:"Brand Awareness",
                        subtitle:"Stand out from the noise. Inspire your audience to take action your online channels"
                    },
                    {
                        title:"Lead Generation ",
                        subtitle:"Close the gap between you and your ideal customers with Lead gen campaigns"
                    }
                ]}
            />

        </>
    )

}