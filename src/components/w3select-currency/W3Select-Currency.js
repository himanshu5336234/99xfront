import React from "react";
import  "./W3Select-Currency.scss";

import W3Modal from "../w3modal/W3Modal";

export default class extends React.Component {
  
  constructor(props){
    
    super(props); 

    this.fx = props.fx;

    this.state = {
      showModal: false,
      selectedCurrency:{
        symbol:"$",
        abbr: "USD",
        title: "United States Dollar (USD)"
      },
      currencies:[
        {
          "symbol":"$",
          "abbr":"USD",
          "title":"United States Dollar (USD)"
        },
        {
          "symbol":"€",
          "abbr":"EUR",
          "title":"Euro (EUR)"
        },
        {
          "symbol":"£",
          "abbr":"GBP",
          "title":"Britsh Pound (GBP)"
        },
        {
          "symbol":"A$",
          "abbr":"AUD",
          "title":"Australlian Dollar (AUD)"
        },
        {
          "symbol":"C$",
          "abbr":"CAD",
          "title":"Canadian Dollar (CAD)"
        },
        {
          "symbol":"₹",
          "abbr":"INR",
          "title":"Indian Rupees (INR)"
        },
        {
          "symbol":"₪",
          "abbr":"ILS",
          "title":"Israeli Shekel"
        },
        {
          "symbol":"R$",
          "abbr":"BRL",
          "title":"Brazilian Real"
        },
        {
          "symbol":"HK$",
          "abbr":"HKD",
          "title":"Hong Kong Dollar"
        },
        {
          "symbol":"kr",
          "abbr":"SEK",
          "title":"Swedish Krona"
        },
        {
          "symbol":"NZ$",
          "abbr":"NZD",
          "title":"New Zealand Dolla"
        },
        {
          "symbol":"S$",
          "abbr":"SGD",
          "title":"Singapore Dollar"
        },
        {
          "symbol":"CHF",
          "abbr":"CHF",
          "title":"Swiss Franc"
        },
        {
          "symbol":"R",
          "abbr":"ZAR",
          "title":"South African Rand"
        },
        {
          "symbol":"¥",
          "abbr":"CNY",
          "title":"Chinese Renminbi Yuan "
        },
        {
          "symbol":"RM",
          "abbr":"MYR",
          "title":"Malaysian Ringgit"
        },
        {
          "symbol":"$",
          "abbr":"MXN",
          "title":"Mexican Peso"
        },
        {
          "symbol":"₨",
          "abbr":"PKR",
          "title":"Pakistani Rupee"
        },
        {
          "symbol":"₱",
          "abbr":"PHP",
          "title":"Philippine Peso"
        },
        {
          "symbol":"$",
          "abbr":"TWD",
          "title":"New Taiwan Dollar "
        },
        {
          "symbol":"฿",
          "abbr":"TWD",
          "title":"Thai Baht"
        },
        {
          "symbol":"₺",
          "abbr":"TRY",
          "title":"Turkish New Lira"
        },
        {
          "symbol":"د.إ",
          "abbr":"AED",
          "title":"United Arab Emirates Dirham"
        },
      ]
    }

    this.handleModalChange = this.handleModalChange.bind(this)
  }
  

  
  componentDidMount(props){

    this.fx.getDefaultCurrency().then(defaultCurrency=>{

      const selectedCurrency = this.state.currencies.filter(c => {
        return c.abbr == defaultCurrency.currency
      });

      // console.log("USER_GET_CURRENCY", defaultCurrency)
      
      

      if(selectedCurrency.length == 1){
        this.fx.setAppCurrency({
          iso3:defaultCurrency.currency,
          symbol:selectedCurrency[0].symbol,
          usd_multiplier: defaultCurrency.currency_multiplier_usd
        })

        this.setState({selectedCurrency: selectedCurrency[0]})
        localStorage.setItem("user_currency", JSON.stringify(selectedCurrency))
      }

    }).catch(e=>{
      
      console.error(e);

    })

    
  
  }
 

  selectCurrency(){
  
    this.setState(prevState =>{
      return ({
        ...prevState, 
        showModal: !this.state.showModal
      })
    })

  }
  setCurrency(items){
    
    this.fx.setUserCurrency(items.abbr)
    .then(data=>{
      // console.log("Set Currency Response", data);
      if(data.success){
// console.log(data)
        const selectedCurrency = this.state.currencies.filter(currencies => {
          return currencies.abbr == data.data.currency
        });

        this.fx.setAppCurrency({
          iso3:data.data.currency,
          symbol:selectedCurrency[0].symbol,
          usd_multiplier: data.data.currency_multiplier_usd
        })
        this.setState({
          showModal: false,
          selectedCurrency: selectedCurrency[0]
        })
        localStorage.setItem("user_currency", JSON.stringify(selectedCurrency))
        window.top.location.reload();
        // setTimeout(()=>{
        //   window.top.location.reload();
        // },3000)
        
      }
      
    }).catch(e=>{
      console.error("Error", e);
    })

    

    this.setState(prevState =>{
      return ({
        ...prevState, 
        selectedCurrency: items,
        showModal: false
      })
    })

  }
  handleModalChange(){
    this.setState({
      showModal: false
    })
  }

  openModal(){

  }
  render(){

      return (
        <>
        <li className="currenct-selector hide-in-mobile" onClick={() => this.selectCurrency()}>
          <span className="currency-symbol"></span>
          <span className="currency-text">{this.state.selectedCurrency.symbol} {this.state.selectedCurrency.abbr} <b className="caret"></b></span>
        </li>

        <W3Modal
          show={this.state.showModal}
          onClick={this.openModal}
          onModalChange={this.handleModalChange}
          backdrop="static"
          title="Select a Currency"
          showFooter="false"
        >

          <div className="row w3-form">

            <div className="col-12">

              <div>
                <ul className="currency-list family-inter">
                  {
                    this.state.currencies.map(items=>{
                      return (
                        <li onClick={()=> this.setCurrency(items)}>
                          {items.title}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            
            </div>

          </div>
        </W3Modal>
                         

        </>
      )
  }
}
