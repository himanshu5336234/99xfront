import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel2";
import "./style.scss"
export default function W3Carousel(props){

    const options = {
        items: props.items??2,
        nav: props.nav??true,
        navText:['',''],
        rewind: true,
        autoplay: false,
        dots: props.dots??false,
        dotData:props.dotData??false
    };

    const options2 = {
        items: props.items??4,
        nav: props.nav??true,
        navText:['',''],
        rewind: true,
        autoplay: false,
        dots: props.dots??true,
        dotData:props.dotData??false
    };
    const events = {
        onDragged: function(event) {

        },
        onChanged: function(event) {
            //console.log("Slide Changed", event.item)
            if(props.onChanged) props.onChanged(event);
        }
    };

    // const carousel = useRef()

    // setTimeout(()=>{
    //     if(carousel.current){
    //         carousel.current.goTo(3)
    //     }
    // },3000)
    if(props.name=="eyntg"){
        return(<>
        
        <div className={`w3-carousel ${props.className || ''}`}>
                <OwlCarousel 
                ref={props.cRef || null}
                options={options2}
                events={events}
                >
                    {props.children}
                </OwlCarousel>
            </div>
        </>)
    }

    return (
        <>
            <div className={`w3-carousel ${props.className || ''}`}>
                <OwlCarousel 
                ref={props.cRef || null}
                options={options}
                events={events}
                >
                    {props.children}
                </OwlCarousel>
            </div>
        </>
    )
}