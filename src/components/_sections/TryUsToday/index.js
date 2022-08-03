import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components"


const StyledSection = styled.section`
    margin: 30px 0px;
`;

const StyledDiv = styled.div`
    background: var(--color-secondary);
    text-align:center;
    min-height: 300px;
    color: #fff;
    border-radius: 10px;
`;

const StyledButton = styled.button`
    background: #DC1871;
    color: #fff;
    border: none;
    padding: 8px 30px;
    margin: 16px;
    font-weight: 700;
    border-radius: 8px;
`;

export default function TryUsToday(props){
    return (
        <StyledSection>
            <StyledDiv className="container">
                <div className="row" style={{minHeight:'300px'}}>
                    <div className="col-12 align-self-center">
                        <h2 className="color-white weight-500">
                            Try us today 100% risk-free
                        </h2>
                        <p className="color-white" style={{maxWidth:'600px',margin:'auto'}}>
                            Thousands of startups, marketers and agencies rely on 99xstarup. See if we’re right for you.  Cancel your subscription anytime. No questions asked.
                        </p>
                        <NavLink to={'/'}>
                            <StyledButton>
                                Try 99x Startup now!
                            </StyledButton>
                        </NavLink>
                    </div>
                </div>
            </StyledDiv>
        </StyledSection>
    )
}