import React from "react"
import "./style.scss"

export default function CampaignDriveResults(){
    const content = [
        {
            image:'https://ik.imagekit.io/99x/startup/Frame_267_mxdK7uPm7.svg',
            title:'Experienced strategic leadership ',
            subtitle:'Our experienced leadeship takes end to end ownership of your campaigns, select and assess talents, ideation and deliver innovative solutions tailored just right for your audience. '
        },
        {
            image:'https://ik.imagekit.io/99x/startup/Frame_268_1__e_K9YrWy7.svg',
            title:'A process built for remote work at scale',
            subtitle:'Leverage the 99x platform, built around remote collaboration, task management and analytics. Get full copyrights to all the files since the first day and hey, that too at a fixed pricing. '
        },
        {
            image:'https://ik.imagekit.io/99x/startup/Frame_269_jHIlDNd5P.svg',
            title:'Unlimited Requests and Revisions ',
            subtitle:'Yep, make as many requests your heart wants and to make it even better, you can make unlimited revisions requests too. We’ll keep working till you feel its just right . '
        }
    ]
    return (
        <>
            <div className="campaign-drive-results">
                <h2 className="align-center">
                    Create 
                    <span className="color-pink">campaign</span>
                    that drive results
                </h2>
                <p className="lead text-center">
                    99Xstartup offers full-service marketing and creative delivery powered by smartest tech and strategic, global ideation.
                </p>
                <br/>
                <br/>
                <div className="row ">
                    {content.map((d,i)=>(
                        <div className="col-md-4">
                            <div className="image-container">
                                <img src={d.image}/>
                            </div>
                            <h3>{d.title}</h3>
                            <p>{d.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}