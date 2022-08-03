import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../configs/routes';
import Footer from '../main/footer'
import Header from './header'

import './style.scss'

class CheckoutLayout extends React.Component{

    loadingIcons  = [
        'https://ik.imagekit.io/99x/startup/components/loading/Loader_01_0O2P6qwDpg.gif',
        'https://ik.imagekit.io/99x/startup/components/loading/Loader-02_h5wStRKxVV.gif',
        'https://ik.imagekit.io/99x/startup/components/loading/Loader_04_p8yul5iLv.gif',
    ]

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render(){
        return (
        
        <div className="fluid checkout-layout">
            
            <Header/>

            <Switch>
                {routes.map((route, idx) => {
                    if (route.component) {
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={(props) => {
                                return (
                                    <Suspense 
                                    fallback={
                                        <div className="loading-container">
                                            
                                            {/* <div className="loading-box">
                                                <div id="loading"></div>
                                                <h1>Please Wait</h1>
                                            </div> */}

                                            <div className="loading-img">
                                                <img src={this.loadingIcons[this.getRandomInt(3)]} />
                                            </div>
                                            
                                        </div>
                                    }>
                                        <route.component {...props} />
                                    </Suspense>
                                );
                                }}
                            />
                        );
                    }
                })}
            </Switch>

            <Footer/>

        </div>);
    }
}

export default CheckoutLayout;