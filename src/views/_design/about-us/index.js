import React from "react"
import "./style.scss"
import TrustedBy1000Customers from "../../../components/_sections/TrustedBy1000Customers"
import BeautifulRelationship from "../../../components/_sections/BeautifulRelationship"

export default function AboutUsPage(props){
    return (
        <section className="about-us-page">
            <div className="container">
                <div className="hero">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 left">
                            {/* <h2>
                                Help people 
                                <span className="highlight">achieve</span>
                                their
                                <span className="highlight">dreams</span>
                            </h2> */}
                            <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/Rectangle_221_g7RcrZqcH.png"/>
                        </div>
                        <div className="col-sm-12 col-md-6 right">
                            <p>99x is a people-first company that builds services designed to attain your every business need to help you build meaningful communities and scale your vision exponentially. As employees, we encourage each other to grow and innovate. As a company, we roll up our sleeves to pour our hearts into the communities we call home.</p>
                            <p>Our platform is powerful, flexible and scales to meet the needs of any business—even yours.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="full-img">
                <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/shutterstock_1038948835_6bR0yXQS0.png"/>
                <h2>We're people, people!</h2>
            </div>

            <div className="phill container">

                <h2>This is our philosophy.</h2>
                <p className="sub-title">It’s our mission to grow and cultivate the world’s largest talent and collaboration space, a place where people can find and work with anyone for any service they need, and build any business they dream. </p>

                <div className="x-grid">
                    <div className="item-1">
                        <div className="text">
                            <h3>People first</h3>
                            <p>Etched to our DNA since inception. With everything we do, the customers, creators, and people always come first for us. We believe in bringing people together to diversity, communication; collaboration eventually leads to greatness .</p>
                        </div>
                    </div>
                    <div className="item-2">
                        <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/pexels-daria-shevtsova-3626622_1_6adeAPSI29.png"/>
                    </div>
                    <div className="item-3">
                        <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/pexels-karolina-grabowska-4040600_1_YWi3OHoZ7h.png"/>
                    </div>
                    <div className="item-4 text">
                        <div className="text">
                            <h3>Quality first</h3>
                            <p>Quality comes first. We are here to change for good. We believe in giving more, but only better, in fact, the absolute best. Every one of us believes in putting everything in every single thing we do - No matter what.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="open-to-all">
                
                <h2>Open to all</h2>
                <p>Our employees work hard to build a culture where everyone belongs. Our beliefs play a  vital role in creating communities that bring us together and ensure we feel supported at work.  We’ll let them speak for themselves—here are their mission statements.</p>
                <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/shutterstock_1477576958_7_gvtY0a9DyI.png"/>

            </div>

            <div className="office container">
                <h2>We’re Open for business globally</h2>
                <div className="row">
                    <div className="col col-6">
                        <img src="https://ik.imagekit.io/99x/social/UK_LaHIw7s2s.png"/>
                    </div>
                    <div className="col col-6">
                        <img src="https://ik.imagekit.io/99x/social/Singapore_oprYdf8Mo.png"/>
                    </div>
                    <div className="col col-6">
                        <img src="https://ik.imagekit.io/99x/social/India_DT-sdfZ6i8.png"/>
                    </div>
                    <div className="col col-6">
                        <img src="https://ik.imagekit.io/99x/social/USA_eFBwVtgFq0.png"/>
                    </div>
                </div>
            </div>


            <div className="customer-meteric container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 left">
                        <h3>40,000+</h3>
                        <p>Paid customer accounts</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 right" style={{background:'var(--color-primary)'}}>
                        <h3>70,000+</h3>
                        <p>Creators globally</p>
                    </div>
                </div>
            </div>
            

            <div className="global-customer container" style={{margin:'50px auto'}}>
                <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/b_globe_6vgff26Hu.png"/>
            </div>

            <div className="container pv-30">
                <TrustedBy1000Customers/>
            </div>

            <br/>
            <br/>

            <BeautifulRelationship color="var(--color-secondary)"/>

        </section>
    )
}