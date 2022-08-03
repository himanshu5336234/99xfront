import React from 'react'

/**
 * 
 * @param {<Rating />} param0 
 *  
 */

const Stars = ({ count, value, size, orderCount }) => {
    count = 5;
    value = 4;


    const styles = {
        filled: {
            color: "#ffc107",
            marginRight: "10px",
            fontSize:'23px',
        },
        unfilled: {
            marginRight: "10px",
            fontSize:'23px',
        },
        orderCount:{
            fontWeight: 700,
            fontSize:'18px'
        },
    }

    
    if(size == 24){
        styles.filled.fontSize = "13px";
        styles.filled.marginRight = "5px";

        styles.unfilled.fontSize = "13px";
        styles.unfilled.marginRight = "5px";
        
        styles.orderCount.fontSize = "12px";
    }

    const stars = []
    for (var i = 0; i < value; i++) {
        stars.push(<i style={styles.filled} key={i} className='fa fa-star rating-icon'></i>)
    }

    for (var i = value; i < count; i++) {
        stars.push(<i key={i} style={styles.unfilled} className='fa fa-star-o rating-icon'></i>)
    }

    return (
        <div className="rating">
            {stars}
            { orderCount ? 
                <span style={styles.orderCount}> (10k)</span>
                :
                ''
            }
        </div>
    )
}

export default Stars