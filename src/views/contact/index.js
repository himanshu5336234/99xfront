import React from "react"
import './style.scss'
export default function ContactPage(props){

    return (
        <>
            <section className="contact-page">
                <div className="container">
                    <h1>Contact us</h1>

                    <div className="contact-grid">
                        <div className="item sales">
                            
                            <div className="item-details">
                                <h2>Talk to a member of our Sales team</h2>
                                <p>We’ll help you find the right products and pricing for your business.</p>
                                <button>Contact Sales</button>
                            </div>

                        </div>
                        <div className="item support">

                            <div className="item-details">
                                <h2>Product and Account Support</h2>
                                <p>If you can’t find the answer you’re looking for, we’re here to lend a hand.</p>
                                <button>Contact Support</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}