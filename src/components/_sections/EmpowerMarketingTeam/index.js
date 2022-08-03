import React from "react"
import {NavLink}  from "react-router-dom"
import "./style.scss"

export default function EmpowerMarketingTeam(props){

    const Content = [
        {
            image:"https://ik.imagekit.io/99x/startup/Frame_428_6IF5DqqQzt.png",
            title:"Tech & Product",
            subtitle:"Keep tabs on everything in one place, Right from talent to project management everything happens in one place."
        },
        {
            image:"https://ik.imagekit.io/99x/startup/Frame_426_wOjauBUvE5.png",
            title:"Digital Marketing ",
            subtitle:"Keep tabs on everything in one place, Right from talent to proect management everything happens in one place"
        },
        {
            image:"https://ik.imagekit.io/99x/startup/Frame_427_XEMw0bVhCw.png",
            title:"Creative & Design ",
            subtitle:"Keep tabs on everything in one place, Right from talent to proect management everything happens in one place"
        },
       
    ];
    return (
        <>
            <div className="comp-empower-marketing-team pv-30">
                <div className="comp-title text-center pv-30">
                    <h2>
                        99x empowers every team
                    </h2>
                    <p className="lead">
                    Enable your business with unique solutions for every function. On an average you’ll be saving 30% of your hiring cost at the same time working with the best, without missing a beat
                    </p>
                </div>
                <div className="row">
                    {Content.map((c,i)=>(
                        <div className="col-sm-12 col-md-4">
                            <div className="card">
                                <div className="image-container">
                                    <img src={c.image}/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{c.title}</h5>
                                    <p class="card-text">{c.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}