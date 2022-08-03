import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import '../assets/css/coreui-icons.css';
import '../assets/css/simple-line-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import CurrencyContext from "../context/currency.context"

import configureStore from '../reducers/reducer';

import Login from '../views/ab/account-security/login';
import CreateAccount from '../views/ab/account-security/create-account';

import PageNotFound from '../views/404';
import PageServerError from '../views/500';

import MainLayout from '../layout/main';
import LegalPageLayout from '../layout/legal';
import CheckoutLayout from '../layout/checkout';

import ScrollToTop from '../utils/ScrollToTop';

require("./app.scss")

Modal.setAppElement('#root');
const store = configureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setAppCurrency = this.setAppCurrency.bind(this)
  }

  setAppCurrency = (currency) => {
    console.log("Setting Application Currency:", currency, this)
    this.setState({currency:currency});
  }

  state = {
    currency:{
        iso3:'USD',
        symbol:'$',
        usd_multiplier: 1
    },
    setCurrency: this.setAppCurrency
  }

  render(){

    return (
      <div className="fluid">
        <ToastContainer />
        <Provider store={store}>
          <CurrencyContext.Provider value={this.state}>
            <BrowserRouter>
              <ScrollToTop/>
              <Switch>
                <Route exact={true} path="/ab/account-security/login" name="Login Page" component={Login} />
                <Route exact={true} path="/ab/account-security/create-account" name="Create Account" component={CreateAccount} />
                <Route exact={true} path="/404" name="Page 404" component={PageNotFound} />
                <Route exact={true} path="/500" name="Page 500" component={PageServerError} />
                <Route path="/checkout/" name="Page" component={CheckoutLayout} />
                <Route path="/p/" name="Page" component={LegalPageLayout} />
                <Route path="/" name="Home" component={MainLayout} />
                
              </Switch>
            </BrowserRouter>
          </CurrencyContext.Provider>
        </Provider>
      </div>
    );
  }
}

export default App;
