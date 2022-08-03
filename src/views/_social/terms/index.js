import React from "react"
import { NavLink } from "react-router-dom"

export default function TermsPage(props){
    return (
        <>
            <div className="header-container">
                <div className="container">
                    <h2>99x Legal Information</h2>
                </div>
            </div>

            <div className="container page-content">
                
                <div className="sidebar desktop-only">
                    <div className="sidebar-container">
                        <ul>
                            <li className="parent-link active">
                                <NavLink to="/p/privacy-policy" className="bold">
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li className="parent-link">
                                <NavLink to="/p/terms" className="bold">
                                    Terms and Conditions
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="page-body">
                    
                    <p className="last-updated">Last updated January 27, 2021</p>
                    
                    <p>This Privacy Policy explains in detail about how 99X collects the personal and non-personal customer information, classifies the same as voluntary or mandatory, uses, discloses and protects it on the website. While using some services on the website, you will be required to provide some personal information to us. For instance, when creating a user ID, you need to provide an address or phone number, or while making a payment, you need to furnish the financial details, or simply participate in 99X survey or reach our customer support desk.</p>

                    <p>All the personal information provided by you is used only:</p>

                    <ul>
                        <li>For facilitating your website access.</li>
                        <li>For responding to your queries or fulfilling your requests regarding the information on our products and services.</li>
                        <li>For providing you the information about the products and services available and send news and offer updates from 99x.com.</li>
                        <li>For sending any important information related to our website, such as any changes made to the Website terms and conditions or policies or any other kind of information.</li>
                        <li>For sending any marketing communications and market surveys that might be of your interest according to 99x.com.</li>
                        <li>For personalizing your online shopping experience at 99x.com by providing offers tailored to your interests.</li>
                        <li>To help you in getting all the problems with the website addressed, including the most technical ones.</li>
                        <li>For completing the subscription from the website by processing the payment, communicating with you concerning the subscription and providing the best after sale services.</li>
                        <li>For administering the website in a proper and professional manner.</li>
                        <li>For conducting internal reviews as well as data analysis for our website.</li>
                        <li>For improving the content, advertising and the overall service provided on the online portal.</li>
                        <li>For protecting the integrity of 99x.com.</li>
                        <li>For responding to any kind of judicial process and furnishing the required information to the law enforcement officials or for helping out in any investigations related to matters of public safety.</li>
                    </ul>

                    <div id="InformationSharing">
                        <h2>Information Sharing</h2>
                        <p>You will be required to provide your personal information when making any kind of subscription from us. Website transfers and shares your information only with the third party payment gateway operators. The operators might also have complete access to your 99x.com shopping history and other related details. The extremely sensitive information like debit/credit card details or passwords are handled with care through secure technologies and encrypted links, thereby providing a supreme level of care and protection to your information. Since the internet technology is nowhere near 100% safe, you are advised to be vigilant while making online payments.</p>
                    </div>

                    <div id="Security">

                        <h2>Security</h2>
                        
                        <p>
                            99X makes every possible effort to ensure full security, privacy and integrity of your sensitive personal information and to safeguard it from all kinds of unauthorized access, alteration, obliteration or disclosure. To make this possible, 99x.com takes the help of internal data collection reviews, storage as well as data processing practices and security measures such as data encryption and physical security measures for preventing any person from unauthorized access of information at Website data room. 
                        </p>
                    </div>

                    <div id="Services">
                        <p>
                            99X makes its services available to only those who have provided some kind of personal information to 99x.com or have created a 99x.com account and have a password or have logged in through other IDs and passwords, including those logging in through Gmail, Facebook or Yahoo mail.
                        </p>
                    </div>

                    <div id="AnyQuestions">
                        <h3>Do you have any questions?</h3>
                        <NavLink to="/contact">
                            Contact Sales
                        </NavLink>
                    </div>

                </div>
            </div>
        </>
    )
}