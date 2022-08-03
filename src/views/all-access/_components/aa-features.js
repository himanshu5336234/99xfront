import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h2`
    & > span{
        color: ${props => props.color};
    }
`

export default function AllAccessMainFeatures(props){
    
    const d = props.features;
    return (
        <>
            <section className="main-features container">
                <StyledHeading color={props.color??'var(--color-secondary)'}>{props.title}</StyledHeading>
                <p className="subtitle">{props.subtitle}</p>
                <div className="row features">
                    {d.map((f,i)=>(
                        <div className={`col-12 col-md-4`} style={{background:(i == 0 ? (props.color??'var(--color-secondary)'):'#fff'),color:(i==0?'#fff':'#2f2f2f')}}>
                        
                                <div className="w3card">
                                    <div className="img-container">
                                        <img src={f.icon}/>
                                    </div>
                                    <h4>{f.title}</h4>
                                    <p>{f.subtitle}</p>
                                </div>
                            
                        
                        </div>
                    ))}
                </div>
            </section>
        </>
    )

}