import React from "react"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import styled  from "styled-components"
import "./style.scss"

const StyledFlex = styled.div`
    display:flex;
    justify-content: space-around;
`
export default function SiteByNumbers(){
    
    return (
        <>
            <div className="container site-by-numbers p-30">
                <h2 className="align-center"> 99x Content by the Numbers </h2>
                <StyledFlex>

                    <div className="counter-n"> 
                        <CountUp
                            start={2007}
                            end={4247}
                            duration={2.00}
                            useEasing={true}
                            useGrouping={true}
                            separator=""
                            decimals={0}
                            decimal=""
                            prefix=""
                            suffix=""
                            redraw={true}
                            // onComplete={onComplete}
                            // onStart={onStart}
                        >
                             {({ countUpRef, start }) => (
                                <VisibilitySensor 
                                onChange={start} 
                                delayedCall>
                                    <span 
                                        className="counter-count"
                                        ref={countUpRef} 
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <br/>
                        <span className="label">
                            Active content writers
                        </span>
                    </div>
                    
                    <div className="counter-n">
                        <CountUp
                            start={15}
                            end={25}
                            duration={2.00}
                            useEasing={true}
                            useGrouping={true}
                            separator=""
                            decimals={0}
                            decimal=""
                            prefix=""
                            suffix="+"
                            redraw={true}
                            // onComplete={onComplete}
                            // onStart={onStart}
                        >
                             {({ countUpRef, start }) => (
                                <VisibilitySensor 
                                onChange={start} 
                                delayedCall>
                                    <span 
                                        className="counter-count"
                                        ref={countUpRef} 
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <br/>
                        <span className="label">
                            Monthly articles published
                        </span>
                    </div>
                    
                    <div className="counter-n">
                        <CountUp
                            start={20}
                            end={45}
                            duration={2.00}
                            useEasing={true}
                            useGrouping={true}
                            separator=""
                            decimals={0}
                            decimal=""
                            prefix=""
                            suffix="+"
                            redraw={true}
                            // onComplete={onComplete}
                            // onStart={onStart}
                        >
                             {({ countUpRef, start }) => (
                                <VisibilitySensor 
                                onChange={start} 
                                delayedCall>
                                    <span 
                                        className="counter-count"
                                        ref={countUpRef} 
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <br/>
                        <span className="label">
                            Countries
                        </span>
                    </div>
                </StyledFlex>
            
            </div>
        </>
    )
}