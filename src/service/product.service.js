import {apiRequest} from "../api"

/**
 * 
 * @param {*} cart 
 * @param {*} callback 
 * 
 * cart = {
 *  recurring : true | false
 *  servicePlan: 'Standard'
 *  price: { amount, currency, currencySymbol, isCurencyPrefix, unit}
 *  serviceType: 'FIXED' | 'SUBSCRIPTION'
 *  serviceId: <String>
 * }
 */

export function addToCart(cart, callback){

    apiRequest({
        method:'POST',
        url:'/cart',
        data: cart
    }).then(d=>{
        
        if(d.success){
            
            localStorage.setItem("w3_cart", d['w3_cart']);
            localStorage.setItem("cartId", d.cartId);
            callback(null, d);

        }
        console.log("Added to Cart", d);
 
    })

}