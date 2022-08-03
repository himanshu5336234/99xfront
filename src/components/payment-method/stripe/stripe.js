import { loadExternalScript } from "../_common";

export default class W3Stripe{
    
    constructor(StripeKey, el){
        
        this.StripeKey = StripeKey;
        loadExternalScript(`https://js.stripe.com/v3/`, ()=>{
            this.loadStripeCards();
        })

    }

    getPaymentIntent(){

    }

    OnetimePayment(PaymentIntent, callback){

        const PAYMENT_INTENT_CLIENT_SECRET = PaymentIntent.client_secret;
        console.log("CS", PAYMENT_INTENT_CLIENT_SECRET);

        this.stripe.confirmCardPayment(PAYMENT_INTENT_CLIENT_SECRET,{
            payment_method:{
                card: this.cardElement,
                billing_details:{
                    name:'Ashutosh Kumar'
                }
            }
        })
        .then(d=>{

            console.log(d);
            if(d.error && d.error.message) return callback(
                new Error(d.error.message),
                null
            )

            callback(null, d);

        })
        .catch(e=>{

            callback(e, null);
            
        })
        
    }

    loadStripeCards(el){

        this.stripe = window.Stripe(this.StripeKey);
        var elements = this.stripe.elements();

        let style = {
            base: {
              color: '#32325d',
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: 'antialiased',
              fontSize: '18px',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a'
            }
        };
    
        this.cardElement = elements.create('card',{style});
        this.cardElement.mount('#card-element');

    }




    createPaymentMethod({
        name,
        priceId
    }){

        return new Promise((resolve, reject)=>{

        
            let billingName = name;
            let card = this.cardElement;

            this.stripe.createPaymentMethod({
                type: 'card',
                card: card,
                billing_details:{
                    name: billingName
                }
            })
            .then((result)=>{

                if(result.error){
                    reject(result.error);
                }else{

                    console.log("Payment Method", result);
                    resolve(result);
             
                }

            })

        })

    }

    createSubscription({customerName, customerId, priceId}){
        this.createPaymentMethod(customerName, true, priceId, "ORDER1212") 
    }

    
}