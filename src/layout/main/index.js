import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from '../../configs/routes';
import Header from './header';
import Footer from './footer';

class MainLayout extends React.Component{

    loadingIcons  = [
        'https://ik.imagekit.io/99x/startup/components/loading/Loader_01_0O2P6qwDpg.gif',
        'https://ik.imagekit.io/99x/startup/components/loading/Loader-02_h5wStRKxVV.gif',
        'https://ik.imagekit.io/99x/startup/components/loading/Loader_04_p8yul5iLv.gif',
    ]

    constructor(props) {
        super(props);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render(){
        return (<div className="fluid">
            <Header />

            <Switch>
                {routes.map((route, idx) => {
                    if (route.component) {
                        // let modalPopup = route.path.indexOf(':') !== -1 ? true : false;
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

            <Footer />
        </div>);
    }
}

export default MainLayout;