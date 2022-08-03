import React from "react"
import { NavLink } from "react-router-dom"

export default function CategoryStillNotConvinced(props){

    if(props.site){
        if(props.site == "social"){
            return (
                <section className="still-not-continced">
                    <div className="upper-text">
                        <h2>
                            Still not convinced?<br/>
                        </h2>
                        <div style={{marginTop:"20px"}}>
                            <NavLink to="/">
                                Take me there!
                            </NavLink>
                        </div>
                    </div>
                </section>
            )
        }
        if(props.site == "seo"){
            return (
                <section className="still-not-continced">
                    <div className="upper-text">
                        <h2>
                            Still not convinced?<br/>
                        </h2>
                        <div style={{marginTop:"20px"}}>
                            <NavLink to="/">
                                Take me there!
                            </NavLink>
                        </div>
                    </div>
                </section>
            )
        }
    }

    return (
        <>
            <section className="still-not-continced">
                <div className="upper-text">
                    <h2>
                        Still not convinced?<br/>
                        check our work. 
                    </h2>
                    <NavLink to="/">
                        Take me there!
                    </NavLink>
                </div>
                <div className="client-feedback">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h3>
                                    Don’t just take our word for it, see for yourself what our clients think about us.
                                </h3>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="w3card">
                                    <div className="card-content">
                                        <p>“With 99xStartup, we have seen 30% revenue growth quarter over quarter and now we’re rolling it out across our business verticals.</p>
                                        <img src="https://ik.imagekit.io/99x/startup/category/Group_1386_ZhFD2dMY2.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}