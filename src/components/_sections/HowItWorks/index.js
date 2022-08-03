import React from "react"
import "./style.scss"

export default function HowItWorks(props){

    if(props && props.site){
        if(props.site == "seo"){
            return (
                <section className="how-it-works-component">
        
                <div className="container">
        
                <h2>How it works?</h2>
                                    
                <div className="row">
                    
                    <div className="col-12 col-sm-12 col-md-6 pv-30">
                        <h3 className="font-20 weight-700 family-PTsans">
                            A team of professionals you can rely on 
                        </h3>
                        <p>
                            Quickly sign up for the services you need. Collaborate instantly with your team of SEO specialists, designers, and content creators with ease. Tell your team what you need, how you need it, and run the show as you want it - We’ve made it that simple. 
                        </p>
                    
                    </div>
        
                    <div className="col-12 col-sm-12 col-md-6 pv-15">
                        <img src="https://ik.imagekit.io/99x/seo/01_v9XC0bCXQP.png" className="fluid"/>
                    </div>
        
                </div>
        
                <div className="row">
                    
                    <div className="col-12 col-sm-12 col-md-6 pv-15">
                        <img src="https://ik.imagekit.io/99x/seo/Group_1596_XvK36sgGc.png" className="fluid"/>
                    </div>
        
                    <div className="col-12 col-sm-12 col-md-6 pv-30">
                        <h3 className="font-20 weight-700 family-PTsans">
                            Request as much as you need 
                        </h3>
                        <p className="sub-title">
                        Unlimited Requests and revisions
                        </p>
                        <p>
                        Request as many times as your heart wants, even if you’ve made 100 requests already. Plus, with unlimited revisions, we’ll keep iterating until you think it’s absolutely perfect. 
                        </p>
                    
                    </div>
        
                
        
                </div>
        
        
                <div className="row d-flex flex-row-reverse flex-sm-row-reverse flex-md-row flex-lg-row">
                    <div className="col-12 col-sm-12 col-md-6 pv-30">
                        <h3 className="font-20 weight-700 family-PTsans">
                            You’re completely in control 
                        </h3>
                        <p className="sub-title">
                        Manage, Collaborate, Get Support, anytime
                        </p>
                        <p>
                            Bring your team’s goals, plans, tasks, files, and more together in one shared space. Collaborate with your team, manage projects, and collaborate. Moreover stay on top of your game with deatiled analytics and reportings- all in one workspace.
                        </p>
                        {/* <ul>
                            <li className="mb-15">
                                <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Vetted Industry Specific Writers
                            </li>
                            <li className="mb-15">
                                <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Dedicated Account Manager
                            </li>
                            <li className="mb-15">
                                <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Quick Turnaround, Maximum Efficiency
                            </li>
                        </ul> */}
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 pv-15">
                        <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/Collaborate_SVn387G-4.png" className="fluid"/>
                    </div>
                </div>
        
        
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 pv-15">
                        <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/Customer_Support_Ch_8v2-yt.png" className="fluid"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 pv-30">
                        <h3 className="font-20 weight-700 family-PTsans">
                            Guaranteed Satisfaction
                        </h3>
                        <p>
                            We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions.
                        </p>
                    </div>
                </div>
        
                </div>
        
                </section>
            )
        }
        if(props.site == "social"){
            return (
                <section className="how-it-works-component">
        
                <div className="container">
        
                <h2>How it works?</h2>
                                    
                <div className="row">
                    
                    <div className="col-12 col-sm-12 col-md-6 pv-30">
                        <h3 className="font-20 weight-700 family-PTsans">
                            A team of professionals you can rely on 
                        </h3>
                        <p>
                            Quickly sign up for the services you need. Collaborate instantly with your team of SEO specialists, designers, and content creators with ease. Tell your team what you need, how you need it, and run the show as you want it - We’ve made it that simple. 
                        </p>
                    
                    </div>
        
                    <div className="col-12 col-sm-12 col-md-6 pv-15">
                        <img src="https://ik.imagekit.io/99x/social/01_nHIaI1dfJ.png" className="fluid"/>
                    </div>
        
                </div>
        
                <div className="row">
                    
                    <div className="col-12 col-sm-12 col-md-6 pv-15">
                        <img src="https://ik.imagekit.io/99x/seo/UnlimitedRequests_SUJFRUmpJ7.png" className="fluid"/>
                    </div>
        
                    <div className="col-12 col-sm-12 col-md-6 pv-30">
                        <h3 className="font-20 weight-700 family-PTsans">
                            Request as much as you need 
                        </h3>
                        <p className="sub-title">
                        Unlimited Requests and revisions
                        </p>
                        <p>
                        Request as many times as your heart wants, even if you’ve made 100 requests already. Plus, with unlimited revisions, we’ll keep iterating until you think it’s absolutely perfect. 
                        </p>
                    
                    </div>
        
                
        
                </div>
        
        
                <div className="row d-flex flex-row-reverse flex-sm-row-reverse flex-md-row flex-lg-row">
                    <div className="col-12 col-sm-12 col-md-6 pv-30">
                        <h3 className="font-20 weight-700 family-PTsans">
                            You’re completely in control 
                        </h3>
                        <p className="sub-title">
                        Manage, Collaborate, Get Support, anytime
                        </p>
                        <p>
                            Bring your team’s goals, plans, tasks, files, and more together in one shared space. Collaborate with your team, manage projects, and collaborate. Moreover stay on top of your game with deatiled analytics and reportings- all in one workspace.
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 pv-15">
                        <img src="https://ik.imagekit.io/99x/seo/Collaborate_9uYH9UuJt.png" className="fluid"/>
                    </div>
                </div>
        
        
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 pv-15">
                        <img src="https://ik.imagekit.io/99x/social/Customer_Support_nfHbYibaCC.png" className="fluid"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 pv-30">
                        <h3 className="font-20 weight-700 family-PTsans">
                            Guaranteed Satisfaction
                        </h3>
                        <p>
                            We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions.
                        </p>
                    </div>
                </div>
        
                </div>
        
                </section>
            )
        }
    }

    return (
        <section className="how-it-works-component">

        <div className="container">

        <h2>How it works?</h2>
                            
        <div className="row">
            
            <div className="col-12 col-sm-12 col-md-6 pv-30">
                <h3 className="font-20 weight-700 family-PTsans">
                    A team of professionals you can rely on 
                </h3>
                <p>
                Quickly sign up for the services you need. Collaborate instantly with your own team of expert marketers, designers, developers, content creators with ease. Tell your team what you need and how you need it, and run the show as you want it - it’s that simple. 
                </p>
            
            </div>

            <div className="col-12 col-sm-12 col-md-6 pv-15">
                <img src="https://ik.imagekit.io/99x/startup/components/boost_your_startup/Group_1114_rrDBVZspY.png" className="fluid"/>
            </div>

        </div>

        <div className="row">
            
            <div className="col-12 col-sm-12 col-md-6 pv-15">
                <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/UnlimitedRequests_OFf7m7ae1.png" className="fluid"/>
            </div>

            <div className="col-12 col-sm-12 col-md-6 pv-30">
                <h3 className="font-20 weight-700 family-PTsans">
                    Request as much as you need 
                </h3>
                <p className="sub-title">
                Unlimited Requests and revisions
                </p>
                <p>
                Request as many times as your heart wants, even if you’ve made 100 requests already. Plus, with unlimited revisions, we’ll keep iterating until you think it’s absolutely perfect. 
                </p>
            
            </div>

        

        </div>


        <div className="row d-flex flex-row-reverse flex-sm-row-reverse flex-md-row flex-lg-row">
            <div className="col-12 col-sm-12 col-md-6 pv-30">
                <h3 className="font-20 weight-700 family-PTsans">
                    You’re completely in control 
                </h3>
                <p className="sub-title">
                Manage, Collaborate, Get Support, anytime
                </p>
                <p>
                    Bring your team’s goals, plans, tasks, files, and more together in one shared space. Collaborate with your team, manage projects, and collaborate. Moreover stay on top of your game with deatiled analytics and reportings- all in one workspace.
                </p>
                {/* <ul>
                    <li className="mb-15">
                        <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Vetted Industry Specific Writers
                    </li>
                    <li className="mb-15">
                        <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Dedicated Account Manager
                    </li>
                    <li className="mb-15">
                        <i className="fa fa-check custom-round-check" aria-hidden="true"></i> Quick Turnaround, Maximum Efficiency
                    </li>
                </ul> */}
            </div>
            <div className="col-12 col-sm-12 col-md-6 pv-15">
                <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/Collaborate_SVn387G-4.png" className="fluid"/>
            </div>
        </div>


        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 pv-15">
                <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/Customer_Support_Ch_8v2-yt.png" className="fluid"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 pv-30">
                <h3 className="font-20 weight-700 family-PTsans">
                    Guaranteed Satisfaction
                </h3>
                <p>
                    We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions.
                </p>
            </div>
        </div>

        </div>

        </section>
    )
}