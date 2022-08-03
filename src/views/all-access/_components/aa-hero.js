import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
`

const StyledButton = styled.button`
    background: ${props => props.color};
    color: #fff;
    max-width: 200px;
`

export default function AAHero(props){

    const ToPricing = () => {
        let p = document.getElementById("pricing")
        if(p){
            window.scrollTo(0, p.offsetTop)
        }
    }

    return (
        <StyledSection className="hero">
            <div className="container">
                <h1>{props.title || ''}</h1>
                <p>{props.subtitle || ''}</p>
                <StyledButton 
                onClick={ToPricing}
                color={props.color??'#02ADC5'}>
                    Subscribe
                </StyledButton>
                <img className="banner" src={props.banner}/>
            </div>
        </StyledSection>
    )
}