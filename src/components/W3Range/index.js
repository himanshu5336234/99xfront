import React, { useRef, useState } from "react"
import "./style.scss"

export default function W3Range(props){

    let [sliderValue, setSliderValue] = useState(100);
    let sliderRef = useRef()

    return (
        <>
        <div className="w3-slider">
            <input type="range" step="50" max="100" ref={sliderRef} value={sliderValue} onChange={(e)=>{
                if(props.onChange) props.onChange(e.target.value)
                setSliderValue(e.target.value)
            }} />
            <div className="range-label">
                <span>50</span>
                <span>100</span>
                <span>150</span>
            </div>
        </div>
        </>
    )
}