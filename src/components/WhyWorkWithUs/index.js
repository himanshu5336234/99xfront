import React from "react"
import "./style.scss"
let reasons = [
    {
        title:'Save 50% vs. agencies or full time resources',
        icon:'https://ik.imagekit.io/99x/startup/components/Whyus/icon_dollar_yO0u0ogfhd.svg'
    },
    {
        title:'Get work done from the experts ',
        icon:'https://ik.imagekit.io/99x/startup/components/Whyus/icon_experts_9XKHpE9m7g.svg'
    },
    {
        title:'Assured quality work & satisfaction',
        icon:'https://ik.imagekit.io/99x/startup/components/Whyus/icon_quality_GmdfZS6sFK.svg'
    },
    {
        title:'Pay-as-you-go or hire us forever. ',
        icon:'https://ik.imagekit.io/99x/startup/components/Whyus/icon_pay_J0SJXeDdB.svg'
    },
    {
        title:'No contracts & Notice Periods',
        icon:'https://ik.imagekit.io/99x/startup/components/Whyus/icon_support_BwLhUv4kx.svg'
    },
    {
        title:'100% Risk-Free trials & No questions asked refund ',
        icon:'https://ik.imagekit.io/99x/startup/components/Whyus/icon_no_que_fp9AuSiFcn.svg'
    },
]

export default function WhyWorkWithUs(props){

    

    return (
        <>
            <div className="container why-work-with-us">
                <div className="main-data">

                    <div className="image-container">

                    </div>

                    <div className="data-container">

                        <h2>Why work with 99x?</h2>
                        <div className="row">

                            {reasons.map((r,i)=>(
                                <div className="col-6 col-md-4">
                                    <img src={r.icon}/>
                                    <p>{r.title}</p>
                                </div>
                            ))}
                            

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}