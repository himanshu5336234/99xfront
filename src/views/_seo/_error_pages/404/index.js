import React from 'react';
import {Button} from "react-bootstrap"
import { NavLink } from 'react-router-dom';

import './style.scss';
class PageNotFound extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="container text-center pv-30" style={{minHeight:"500px"}}>
                <h2> Error 404 - Page Not Found.</h2>
                <br/>
                <br/>
                <NavLink to="/">
                    <Button>
                        Back to Home
                    </Button>
                </NavLink>
            </div>
        );
    }
}

export default PageNotFound;