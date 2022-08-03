import React from "react"

import ENV from '../../../env.config'

export default function TrustedBy1000Customers(props){

    let client_list = "https://ik.imagekit.io/99x/startup/pages/all-access/Group_1252_AYt1QUY5H.png"

    if(ENV.CURRENT_SITE == ENV.NETWORK_SITES.DESIGN.CODE)
        client_list = "https://ik.imagekit.io/99x/design/Group_2001_KrUgV5Mpe6_.png"


    return (
        <div className="container" style={{textAlign:'center'}}>
                <h3 style={{margin:'40px 10px',fontSize:'48px', letterSpacing:'-0.48 px', fontWeight:'400', color:'#2F2F2F'}}>
                    {props.title??'Trusted by 1000+ customers worldwide'}
                </h3>
                <img style={{maxWidth:'100%'}} src={client_list}></img>
        </div>
    )
}