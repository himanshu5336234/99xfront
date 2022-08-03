import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledSection = styled.section`
    background:${props => props.color};
    text-align:center;
    display: flex;
    flex-direction: column;
    padding: 40px 0px;
`

const SH3 = styled.h3`
    max-width: 620px;
    margin: auto;
    color: #fff;
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
`

const StyledButton = styled.button`
    background: #2F2F2F;
    border-radius: 4px;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    padding: 13px 27px;
    margin: 30px auto;
    outline: 0px;
    border: 0px;
`

export default function BeautifulRelationship(props){
    return (
        <StyledSection color={props.color??'#02ADC5'}>
            
            <SH3>
                This could be the beginning of a beautiful relationship
            </SH3>
            
            <NavLink to="/contact">
                <StyledButton>
                    Talk to us
                </StyledButton>
            </NavLink>

        </StyledSection>
    )
}