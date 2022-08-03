import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../configs/routes';
import Footer from '../main/footer'
import Header from '../main/header'
import './style.scss'

class LegalPageLayout extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
        
        <div className="fluid legal-layout">
            
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
                                            
                                            <div className="loading-box">
                                                <div id="loading"></div>
                                                <h1>Please Wait</h1>
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

export default LegalPageLayout;