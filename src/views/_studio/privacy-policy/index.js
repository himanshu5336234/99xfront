import React from "react"
import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import "./style.scss"

export default function PrivacyPolicyPage(props){
    const Links = {
        TnC:[
            {
                title:'Introduction',
                href:''
            },
            {
                title:'Information We Collect',
                href:'#InformmationWeCollect'
            },
            {
                title:'How We Use Your Information',
                href:'#YourInformation'
            },
            {
                title:'With Whom We share Information',
                href:'#YourInformation'
            },
            {
                title:'Cookies & Beacons ',
                href:'#Cookies'
            },
            {
                title:'Google Maps platform APIs',
                href:'#GoogleMaps'
            },
            {
                title:'How We handle Your Social Media Logins',
                href:'#SocialMedia'
            },
            {
                title:'How Long We keep your Information',
                href:'#InformationTime'
            },
            {
                title:'How We Keep Your Information Safe',
                href:'#KeepInformationSafe'
            },
            {
                title:'Do We Collect Information from Minors',
                href:'#KeepInformationSafe2'
            },
            {
                title:'What are your Privacy Rights',
                href:'#PrivacyRights'
            },
            {
                title:'Controls for Do-Not-Track Features',
                href:'#DoNotTrack'
            },
            {
                title:'Regional and International Provisions',
                href:'#UpdateYourInformation'
            },
            {
                title:'Updating or deleteting of Your information',
                href:'#UpdateYourInformation'
            },
            {
                title:'Amendments',
                href:'#Amendments'
            },
            {
                title:'Contact',
                href:'#Contact'
            },
        ]
    }

    return (
        <>
            <div className="header-container">
                <div className="container">
                    <h2>99x Legal Information</h2>
                </div>
            </div>

            <div className="container page-content privacy-policy-page">
                <div className="sidebar desktop-only">
                    <div className="sidebar-container">
                        <ul>
                            <li className="parent-link">
                                <NavLink to="/p/privacy-policy" className="bold">
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li className="parent-link active">
                                <NavLink to="/p/terms" className="bold">
                                    Terms and Conditions
                                </NavLink>
                                <ul>

                                    {Links.TnC.map((m,i)=>(
                                        <li key={i}>
                                            <a href={m.href}>
                                                {m.title}
                                            </a>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-body">
                    
                    <h1>Privacy Notice</h1>
                    <p className="last-updated">Last updated January 27, 2021</p>
                    
                    <p>
                       Thank you for choosing to be part of our community at 99x, doing business as 99x technologies limited <b>("99x technologies limited", "we", "us", "our")</b>. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at support@99x.com
                    </p>

                    <p>
                        When you visit our website https://www.99x.com (the <b>"Website"</b>), and more generally, use any of our services (the <b>"Services"</b>, which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
                    </p>

                    <p>
                        This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as, any related services, sales, marketing or events.
                    </p>

                    <p>
                        <b>Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</b> 
                    </p>

                    <div id="InformmationWeCollect" className="privacy-section">
                        <h2>1. Information We Collect</h2>
                        
                        <p><b>Personal information you disclose to us</b></p>

                        <p><b>In Short:</b> We collect personal information that you provide to us.</p>

                        <p>We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.</p>

                        <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>

                        <p><b>Personal Information Provided by You.</b> We collect names; phone numbers; email addresses; job titles; billing addresses; and other similar information.</p>

                        <p><b>Payment Data.</b> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by __________. You may find their privacy notice link(s) here: __________.</p>

                        <p><b>Social Media Login Data.</b> We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the Information described in the section called "HOW WE HANDLE YOUR SOCIAL LOGINS" below.</p>

                        <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
                    
                    </div>

                    <div id="YourInformation" className="privacy-section">

                        <h2>2. How We Use Your Information</h2>

                        <p><b>In Short:</b> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>

                        <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</p>

                        <p>We use the information we collect or receive:</p>

                        <ul>
                            
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To facilitate account creation and logon process.</b> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract. See the section below headed "HOW WE HANDLE YOUR SOCIAL LOGINS" for further information.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To post testimonials.</b> We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at support@99x.com and be sure to include your name, testimonial location, and contact information.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>Request feedback.</b> We may use your information to request feedback and to contact you about your use of our Website.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To enable user-to-user communications.</b> We may use your information in order to enable user-to-user communications with each user's consent.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To manage user accounts.</b> We may use your information for the purposes of managing our account and keeping it in working order.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To send administrative information to you.</b> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To protect our Services.</b> We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</b></span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To respond to legal requests and prevent harm.</b> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To deliver and facilitate delivery of services to the user.</b> We may use your information to provide you with the requested service.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>Administer prize draws and competitions.</b> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>Fulfill and manage your orders.</b> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Website.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To respond to user inquiries/offer support to users.</b> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>To send you marketing and promotional communications.</b> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Website, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS" below).</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span>
                                    <b>Deliver targeted advertising to you.</b> We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.</span>
                            </li>
                            <li>
                                <span className="circle-container">
                                    <span className="circle"></span>
                                </span>
                                <span><b>For other business purposes.</b> We may use your information for other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.</span>
                            </li>

                        </ul>

                    </div>

                    <div id="Cookies" className="privacy-section">
                        
                        <h2>4. Cookies & Beacons </h2>
                        
                        <p>
                            <b>In Short:</b> We may use cookies and other tracking technologies to collect and store your information.
                        </p>

                        <p>
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                        </p>

                    </div>

                    <div id="GoogleMaps" className="privacy-section">
                        
                        <h2>5. Google Maps platform APIs</h2>

                        <p><b>In Short:</b> Yes, we use Google Maps Platform APIs for the purpose of providing better service.</p>

                        <p>This Website uses Google Maps Platform APIs which are subject to Google’s Terms of Service. You may find the Google Maps Platform Terms of Service here. To find out more about Google’s Privacy Policy, please refer to this.</p>

                    </div>

                    <div id="SocialMedia" className="privacy-section">

                        <h2>6. How We handle Your Social Media Logins</h2>

                        <p><b>In Short:</b> If you choose to register or log in to our services using a social media account, we may have access to certain information about you.</p>

                        <p>Our Website offers you the ability to register and login using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile Information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, profile picture as well as other information you choose to make public on such social media platform.</p>

                        <p>We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Website. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>

                    </div>

                    <div id="InformationTime" className="privacy-section">

                        <h2>7. How Long We keep your Information</h2>
                        
                        <p>
                            <b>In Short</b>: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                        </p>

                        <p>
                            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                        </p>

                        <p>
                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                        </p>

                    </div>

                    <div id="KeepInformationSafe" className="privacy-section">
                        <h2>8. How We Keep Your Information Safe</h2>
                        
                        <p>
                            <b>In Short</b>: We aim to protect your personal information through a system of organizational and technical security measures.
                        </p>

                        <p>
                            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the Website within a secure environment.
                        </p>
                    
                    </div>
                    
                    <div id="KeepInformationSafe2" className="privacy-section">
                        
                        <h2>9. How We Keep Your Information Safe</h2>

                        <p>
                            <b>In Short:</b> We do not knowingly collect data from or market to children under 18 years of age.
                        </p>

                        <p>
                            We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Website. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at support@99x.com
                        </p>

                    </div>

                    <div id="PrivacyRights" className="privacy-section">
                        
                        <h2>10. What are your Privacy Rights</h2>
                        
                        <p>
                            <b>In Short:</b> In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
                        </p>

                        <p>
                            In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
                        </p>

                        <p>
                            If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                            If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here
                        </p>

                        <p>                
                            If you are a resident in Switzerland, the contact details for the data protection authorities are available here
                        </p>

                        <p>
                            If you have questions or comments about your privacy rights, you may email us at <a href="mailto:support@99x.com">support@99x.com</a>
                        </p>

                        <h3>Account Information</h3>
                        <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
                        <ul>
                            <li>Log in to your account settings and update your user account.</li>
                            <li>Contact us using the contact information provided.</li>
                        </ul>

                        <p>
                            Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.
                        </p>

                        <h3>Cookies and similar technologies</h3>
                        <p>Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website. To opt-out of interest-based advertising by advertisers on our click here </p>
                        
                        <h3>Opting out of email marketing</h3>
                        <p>You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:</p>
                                    
                        <ul>
                            <li>Access your account settings and update your preferences.</li>
                            <li>Contact us using the contact information provided.</li>
                        </ul>

                        

                    </div>
                    
                    <div id="DoNotTrack" className="privacy-section">
                        <h2>11. Controls for Do-Not-Track Features</h2>
                        <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
                    </div>
                    
                    <div id="">
                   
                        <h2>12. Regional and International Provisions</h2>
                        <p>
                            <b>In Short</b>: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
                        </p>
                        <p>
                            California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                        </p>
                        <p>
                            If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
                        </p>
                   
                    </div>

                    <div id="UpdateYourInformation" className="privacy-section">
                        <h2>13. Updating or deleteting of Your information</h2>
                        <p>
                        Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please visit: https://www.99x.com. We will respond to your request within 30 days.
                        </p>
                    </div>

                    <div id="Amendments" className="privacy-section">
                        <h2>14. Amendments</h2>
                        <p>
                            <b>In Short:</b> Yes, we will update this notice as necessary to stay compliant with relevant laws.
                        </p>

                        <p>
                            We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                        </p>

                    </div>
                    
                    <div id="Contact" className="privacy-section">
                        <h2>15. Contact</h2>
                        <p>
                            If you have questions or comments about this notice, you may email us at <a href="mailto:support@99x.com">support@99x.com</a> or by post to:
                        </p>
                        
                        <p>
                            99x Technologies Ltd, Coworks, 
                            Hoodi, Bangalore, Karnataka - 560048, India.
                        </p>
                    </div>

                    <div id="AnyQuestions" className="privacy-section">
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