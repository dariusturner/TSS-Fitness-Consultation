import React from 'react';

function MainImage(props) {
    return (
        <div id="main">
            <div className="caption">
                <h3 className="title">{props.title}</h3>
                <p className="caption-details">{props.details}</p>
                <a className="cta" href="#contact">{props.cta}</a>
            </div>
            <img className="mainImg" src={props.img} alt={props.alt}/>
        </div>
    )
}

export default MainImage;