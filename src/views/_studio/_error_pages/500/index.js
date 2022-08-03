import React from 'react';

import './style.scss';
class PageServerError extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (<div>500 <br/> Internal Server Error.</div>);
    }
}

export default PageServerError;