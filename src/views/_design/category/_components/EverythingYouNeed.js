import React from "react"

export default function CategoryEverythingYouNeed({banner, label, subtitle, f1, f2, image}){
    
    return (
        <>
            <section className="everything-you-need">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 left">
                            <h2>Everything you need!</h2>
                            <p className="label">
                                {label}
                            </p>
                            <p className="subtitle">
                                {subtitle}
                            </p>
                            <div className="row icon-row">
                                <img src={image} style={{maxWidth:"100%"}}/>
                                {f1.map((f,i)=>(
                                    <div className="col">
                                        <div className="w3card">
                                            <img src={f.icon}/>
                                            <p className="img-alt">
                                                {f.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="row f-row">
                                {f2.map((f,i)=>(
                                    <div className="col-sm-12 col-md-6">
                                        <h3>{f.title}</h3>
                                        <p>{f.subtitle}</p>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <img src={banner} className="banner-image"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}