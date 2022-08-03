import React from "react"

export default function CategoryCustomerReview({src}){
    return (
        <section className="customer-review">
            <div className="row">
                    <div className="col col-6 banner">
                        <h2>Don’t just take our word for it, 250+ Brands trust 99xSocial for their business.</h2>
                    </div>
                    <div className="col col-6 r-section">
                        <div class="w3card">
                            <div class="card-content">
                                <p className="review">“With 99xStartup, we have seen 30% revenue growth quarter over quarter and now we’re rolling it out across our business verticals.</p>
                                <div className="client-profile">
                                    <img className="client-dp" src={'https://ik.imagekit.io/99x/social/Frame_96_r_OYiuojW.png'}/>
                                    <div className="about-client">
                                        <div className="client-name">
                                            Kevin Cornwell
                                        </div>
                                        <div className="client-creds">
                                            Chief Marketing Officer
                                        </div>
                                        <div className="client-company">
                                            <img src={'https://ik.imagekit.io/99x/social/ENCORE_N2P1UcPTJ.png'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}