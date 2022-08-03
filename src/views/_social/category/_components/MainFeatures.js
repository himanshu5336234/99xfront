import React from "react"

export default function CategoryMainFeatures(props){
    
    const d = props.features;
    return (
        <>
            <section className="main-features container">
                <h2>{props.title}</h2>
                <p className="subtitle">{props.subtitle}</p>
                <div className="row features">
                    {d.map((f,i)=>(
                    <div className={`col-12 col-md-4 ${i==0 ? 'dark':''}`}>
                        
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