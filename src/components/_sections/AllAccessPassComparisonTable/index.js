import React from "react"
import styled from "styled-components"
import "./style.scss"

const StyledUl = styled.ul`
    list-style-image: url('https://ik.imagekit.io/99x/content/icons/green-tick_jv3mU3LFr.png')
`

export default function AllAccessPassComparisonTable(props){
    return (
        <div className="row all-access-pass-comparison-table">
            <div className="col-sm-12 col-md-4 digital-marketing c-table">
                <h3>Digital Marketing</h3>
                <ul>
                    <li>Dedicated Marketing Team</li>
                    <li>10 articles per month</li>
                    <li>24 hrs turnaround</li>
                    <li>Unlimited Requests</li>
                    <li>Daily Reporting</li>
                    <li>Ad Automation</li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-4 c-table">
                <h3>SEO</h3>
                <ul>
                    <li>Dedicated SEO Team</li>
                    <li>Link Building</li>
                    <li>Content Writers</li>
                    <li>99x SEO Tools</li>
                    <li>On-Page SEO</li>
                    <li>Technical SEO</li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-4 c-table">
                <h3>Social Media</h3>
                <ul>
                    <li>Dedicated SEO Team</li>
                    <li>Link Building</li>
                    <li>Content Writers</li>
                    <li>99x SEO Tools</li>
                    <li>On-Page SEO</li>
                    <li>Technical SEO</li>
                </ul>
            </div>
        </div>
    )
}