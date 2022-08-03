import { getDefaultNormalizer } from "@testing-library/react"
import React from "react"
import { NavLink } from "react-router-dom"
import "./style.scss"

export default function OurWork(props){
    const Portfolio = [
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-1_51D4mIZ_G.png',
        },
        {
            image:'https://ik.imagekit.io/99x/content/work-2_L0K69VPdYI.png',
        },
        
    ]
    return (
        <div className="page-our-work">
            
            <section className="container latest-work">
                <h1>Some of our latest works for clients</h1>
            </section>
            

            <section className="container portfolio mv-30">
                <div className="fluid">
                    <div className="fluid service-nav">
                        <button onClick={() => {}} className="custom-button aqua active">
                            All Services
                        </button>
                        <button onClick={() => {}} className="custom-button aqua">
                            Articles & Blogs
                        </button>
                        <button onClick={() => {}} className="custom-button aqua">
                            Case Studies
                        </button>
                        <button onClick={() => {}} className="custom-button aqua">
                            Social Media Copies
                        </button>
                        <button onClick={() => {}} className="custom-button aqua">
                            Media Content
                        </button>
                        <button onClick={() => {}} className="custom-button aqua">
                            All Services
                        </button>
                        <button onClick={() => {}} className="custom-button aqua">
                            Articles & Blogs
                        </button>
                        <button onClick={() => {}} className="custom-button aqua">
                            Case Studies
                        </button>
                        <button onClick={() => {}} className="custom-button aqua">
                            Social Media Copies
                        </button>
                        <button onClick={() => {}} className="custom-button aqua">
                            Media Content
                        </button>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {Portfolio.map((p,i)=>(
                            <div className="col-sm-6 col-md-3 portfolio-item">
                                <img src={p.image}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container meet-writers">
                <div className="row">
                    <div className="col-6 align-self-center">
                        <h2>Meet Some of the writers <br/> behind the work</h2>
                        <p>These are just a few of our 100s of writers who created the content above. We can’t say enough about these guys. They are friendly, professional, and all-around great at what they do.</p>
                    </div>
                    <div className="col-6">
                        <img src="https://ik.imagekit.io/99x/content/our-people_D-v5pO_zi.png"/>
                    </div>
                </div>
            </section>

            <section className="awesome-stuff">

                <div className="section-content">
                    
                    <h2>
                        Pretty awesome stuff, <br/>right? Go ahead try <br/>us out now!
                    </h2>
                    
                    <div className="row mv-30">
                        <div className="col-6">
                            <NavLink to="/pricing/subscription" className="btn btn-filled">
                                See Pricing
                            </NavLink>
                        </div>
                        <div className="col-6">
                            <NavLink to="/pricing/subscription" className="btn btn-outline">
                                Get a Demo
                            </NavLink>
                        </div>
                    </div>
                            
                </div>

            </section>


        </div>
    )
}