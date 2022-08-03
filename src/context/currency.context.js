import React from "react";

const Currency = React.createContext({
    currency:{
        iso3:'USD',
        symbol:'$',
        usd_multiplier: 1
    },
    setCurrency: () => {}
});

export default Currency;