import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
background: ${props => props.background}
 & h2{
    font-size: 48px;
    letter-spacing: 0.48px;
 }
 & h2 span{
     color: ${props => props.color};
     font-size: 48px;
     letter-spacing: 0.48px;
 }
 & p{
     font-size: 24px;
     color: #2f2f2f;
     letter-spacing: 0.28px;
 }
 & img{
     max-width: 100%;
 }
 .row{
    align-items: center;
    .col{
        padding: 40px;
    }
 }
`


export default function AllAccessHighlight(props){
    return (
        <>
            <StyledSection 
            color={props.color??'#2f2f2f'}
            background={props.background??'#ffffff'}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img src={props.image}/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h2>{props.title}</h2>
                            <p>{props.subtitle}</p>
                        </div>
                    </div>
                </div>
            </StyledSection>
        </>
    )
}