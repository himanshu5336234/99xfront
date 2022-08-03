import React, { useEffect, useRef, useState } from "react"
import W3Carousel from "../W3Carousel"
import "./style.scss"

const SliderItems = (props) => {

    const item = props.item;

    if(item.type === "image")
    return (
        <div className="item">
            <img src={item.url} className=""/>
        </div>
    )

    return(
        <div className={`item ${props.mode && props.mode == "thumb" && 'video-thumb'}`}>
                <video src={item.url} style={{maxHeight:'350px'}} controls>
                    Browser Does not support Video Playback.
                </video>
        </div>
    )
}

export default function W3CarouselOnDemand(props){

    let [images, setImages] = useState([]);
    let carousel = useRef();
    let carouselSmall = useRef();

    let menu1 = useRef();
    let menu2 = useRef();
    let menu3 = useRef();

    useEffect(()=>{

        let SkImages = [];
        let image_cat = Object.keys(props.images)
        for(let i = 0; i < image_cat.length; i++){
            let cat_images = props.images[image_cat[i]];
            for(let j = 0; j < cat_images.length; j++){
                if(cat_images[j].endsWith("mp4"))
                    SkImages.push({
                        type: 'video',
                        url:cat_images[j],
                        category: image_cat[i],
                    })
                else
                    SkImages.push({
                        type: 'image',
                        url:cat_images[j],
                        category:image_cat[i],
                    })
            }
        }
        console.log("IMAGES", SkImages)
        setImages(SkImages)
        
    },[])

    const SliderChanged = (event) => {
        
        console.log("Slider Changed", event.item);
        // carouselSmall.current.goTo(event.item.index)

        let ii = event.item.index
        if( ii >= 0  && ii <= 1){

            menu1.current.classList.add("active");
            menu2.current.classList.remove("active");
            menu3.current.classList.remove("active");

        }else if(ii > 1 && ii < 9){

            menu1.current.classList.remove("active");
            menu2.current.classList.add("active");
            menu3.current.classList.remove("active");

        }else{

            menu1.current.classList.remove("active");
            menu2.current.classList.remove("active");
            menu3.current.classList.add("active");

        }
    }
   
    if(images.length > 1)
    return (
        <>
            <div className="ondemand-carousel">
                <div className="carousel-menu">
                    <ul>
                        <li ref={menu1} id="carouselOverview" className="active" onClick={()=>{
                            carousel.current.goTo(0);
                        }}>
                            Overview
                        </li>
                        <li ref={menu2} id="carouselOverview" onClick={()=>{
                            carousel.current.goTo(2);
                        }}>
                            Featured Works
                        </li>
                        <li ref={menu3} id="carouselOverview" onClick={()=>{
                            carousel.current.goTo(9);
                        }}>
                            How it works?
                        </li>
                    </ul>
                </div>
                <W3Carousel
                items="1"
                dots={false}
                onChanged={SliderChanged}
                cRef={carousel}
                // dotData="<button role='button' class='owl-dot'></button>"
                nav={true}
                >

                    {images.map((obj, index)=>(    
                        
                        <SliderItems item={obj}/>

                    ))}
                    

                </W3Carousel>
                
                <W3Carousel
                items="6"
                dots={false}
                onChanged={()=>{}}
                nav={false}
                cRef={carouselSmall}
                >

                    {images.map((obj, index)=>(    
                        
                        <SliderItems item={obj} mode="thumb"/>

                    ))}
                    

                </W3Carousel>

            </div>
        </>
    )
    else return (<></>)

}