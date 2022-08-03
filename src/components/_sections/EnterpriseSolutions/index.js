import React from "react"
import {NavLink} from "react-router-dom"

export default function EnterpriseSolutions(props){
    return (
        <section className="fluid mt-30">
            <div className="container">
                <div className="row">
                    <div className="fluid d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-row flex-fill align-items-center">
                            <img src={props.icon || 'https://ik.imagekit.io/99x/Enterpise_xKAaK-MaR.png'} height="111" className=""/>
                            <div className="ph-20">
                                <h3 className="font-24 weight-700 family-Inter">
                                    Enterprise Solutions
                                </h3>
                                <p className="family-Inter font-18">
                                    Have a Custom requirement or a Complex Project? Leverage our expertise of working with hundreds of organizations across  Industries & Geographies. Schedule a consultation with us.
                                </p>
                            </div>
                        </div>
                        <div>
                            <NavLink exact to={'/enterprise-plan'} className="custom-button featured active flex-fill justify-content-center font-20" style={{minWidth:'165px',backgroundColor:'var(--color-primary)'}}>Learn More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}