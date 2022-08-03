import { loadExternalScript } from "../_common"

export default class W3RazorPay{

    constructor(Key){

        this.Key = Key;
        loadExternalScript(`https://checkout.razorpay.com/v1/checkout.js`,()=>{

        });

    }

    OnetimePayment(Amount, Currency, OrderId, callback){

        var options = {
            "key": this.Key, // Enter the Key ID generated from the Dashboard
            "amount": Amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": Currency,
            "name": "99x",
            "description": "Network",
            "image": "https://99xstartups.s3.ap-south-1.amazonaws.com/static/logos/logo.png",
            "order_id": `${OrderId}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            //"callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "handler": (Response)=>{
              console.log(Response);
              callback(Response)
            },
            "prefill": {
                // "name": "Gaurav Kumar",
                // "email": "gaurav.kumar@example.com",
                // "contact": "9999999999"
            },
            "theme": {
                "color": "#a91357"
            }
        };
  
        var rzp1 = new window.Razorpay(options);
        rzp1.open();

    }

    successOnetimePayment(){

    }

    subscribe(subscription_id, callback){

        var options = {
            "key": this.Key,
            subscription_id,
            "name": "99x Network",
            "description": "Monthly Plan",
            "image": "https://99xstartups.s3.ap-south-1.amazonaws.com/static/logos/logo.png",
            "prefill": {
            //   "name": "Gaurav Kumar",
            //   "email": "gaurav.kumar@example.com",
            //   "contact": "+919876543210"
            },
            "notes": {
              "note_key_1": "Tea. Earl Grey. Hot",
              "note_key_2": "Make it so."
            },
            "theme": {
              "color": "#a91357"
            }
        };

        options.handler = function(res){
            console.log("RP_RESPONSE", res);
            callback(res);
        }

        var rzp1 = new window.Razorpay(options);
        rzp1.open();

    }
};