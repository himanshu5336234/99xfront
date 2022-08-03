import { addToCart } from '../../service/product.service'

export const SubscribeToService = (serviceId, price) => {
        
    if(!localStorage.getItem("w3_auth")){
        
        localStorage.setItem("after_login", window.location.href)
        window.location.href ="/ab/account-security/login"
        
    }
    
    const [servicePlan] = ['Standard']
    if(!serviceId) return alert("Unknown Service")

    addToCart({
        serviceId,
        recurring: true, 
        servicePlan:servicePlan,
        price: {
            isCurrencyPrefix: true,
            currencySymbol:"$",
            currency:"USD",
            amount:price,
            unit:"Per Unit"
        }, 
        items:[],
        serviceType: 'SUBSCRIPTION'
    },(err, d)=>{

        window.location.href = "/checkout";

    })

}
