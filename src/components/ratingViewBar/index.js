import React from 'react';

import './style.scss';

const RatingViewBar = (props) => {
    return (<div className="fluid d-flex flex-row align-items-center mb-10 custom-rating-bar-container">
        <span className={`font-12 weight-700 ${props.label == 5 ? 'color-green':'color-grey'} label`}>{props.label} star</span>
        <div className="custom-rating-bar">
            <span style={{width: ((props.review/props.totalReview)*100)+'%'}}></span>
        </div>
        <span className={`font-12 ${props.label == 5 ? 'star-yellow':'color-grey'} total-review`}>({props.review})</span>
    </div>);
}

export default RatingViewBar;