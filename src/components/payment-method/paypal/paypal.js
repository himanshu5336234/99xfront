import { loadExternalScript } from "../_common"
import ENV from "../../../env.config"
import { Button } from "react-bootstrap";
export default class W3Paypal{

    constructor({
        recurring = false,
        plan_id = null,
        client_id, 
        test_mode, 
        currency, 
        amount, 
        el
    }){
        
        loadExternalScript(`https://www.paypal.com/sdk/js?client-id=${client_id}&currency=${currency}&vault=true`,()=>{

            this.paypal = window.paypal;
            
            const ButtonPayload = {
                style:{
                    layout: 'horizontal'
                },
                createOrder: function(data, actions){
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount
                            }
                        }]
                    });
                },

                 // Finalize the transaction
                onApprove: function(data, actions) {
                    return actions.order.capture().then(function(details) {
                        console.log("Paypal Details", details);
                        //that.paymentCompleted();
                        // Show a success message to the buyer
                        // alert('Transaction completed by ' + details.payer.name.given_name + '!');
                    });
                }
            };

            if(recurring){
                
                delete ButtonPayload.createOrder;
                ButtonPayload.createSubscription = function(data, actions){
                    
                    return actions.subscription.create({

                        'plan_id': plan_id
                  
                    });
                  
                };

            }
            console.log("PAYPAL BUTTON LOADED", ButtonPayload, plan_id, recurring, el);
            this.paypal.Buttons(ButtonPayload).render(el);

        })

    }

    OnetimePayment(callback){

    }

    markPaymentOnServer(){

    }

}