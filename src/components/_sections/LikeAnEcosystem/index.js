import React from "react";
import "./style.scss"
export default function LikeAnEcosystem(props){

    const features = [
        {
            title:"One Time Services",
            subtitle:'Smaller Tasks. On- Demand Services.Fixed Price. Quick Delivery.',
        },
        {
            title:"Subscriptions",
            subtitle:'Get 99x on Monthly Retainer. Your Agency in the cloud. ',
        },
        {
            title:"All Access",
            subtitle:'Multiple Services in Smart Bundles.  Great Value. Maximize Productivity. ',
        },
    ]

    const sites = [
        {
            icon:'https://ik.imagekit.io/99x/design/icons/Group_57_gPUlmFbPp7d.png',
            title:'Social media marketing at scale made easy.'
        },
        {
            icon:'https://ik.imagekit.io/99x/startup/components/like_an_ecosystem/99xSeo_1aGX6ubT2G.png',
            title:'Move up the search ladder fast'
        },
        {
            icon:'https://ik.imagekit.io/99x/startup/components/like_an_ecosystem/Logo___99x_Content_Y0iSLO1kIO.png',
            title:'Create content that matters'
        },
        {
            icon:'https://ik.imagekit.io/99x/startup/components/like_an_ecosystem/99xStudio_1__jYv9BENVA7.png',
            title:'Get them talking, sell more with videos.'
        },
        
        {
            icon:'https://ik.imagekit.io/99x/startup/components/like_an_ecosystem/99xStartup_2JXLypttGH.png',
            title:'Scale your startup unwaveringly.'
        },
    ]

    return (
        <section>
            <div className="container like-an-ecosystem">
                <div className="row">
                    <div className="col-12 col-md-6 col-sm-12 left">
                        <h2>It’s like an ecosystem, but for your every business need </h2>
                        <p className="subtitle">Get access to  premium services, teams and a platform to collaborate, manage, and scale your marketing and creative efforts.</p>

                        <div className="row">
                            {features.map((e,i)=>(
                                <div className="col-md-6 col-sm-12">
                                    <h3>{e.title}</h3>
                                    <p>{e.subtitle}</p>
                                </div>
                            ))}
                            
                        </div>

                        <hr/>

                        <div className="row">

                            {sites.map((s,i)=>(
                                <div className="col-6 col-sm-6 col-md-4 ">
                                    <img src={s.icon}/>
                                    <p>{s.title}</p>
                                </div>
                            ))}
                            

                        </div>

                    </div>

                    <div className="right col-12 col-md-6 col-sm-12">
                        <img src="https://ik.imagekit.io/99x/startup/components/like_an_ecosystem/99xDigital_1v87nyd4S.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}