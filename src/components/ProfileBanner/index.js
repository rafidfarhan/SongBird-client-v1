import React from 'react'


import './ProfileBanner.css';

const Banner = ({image,type,name,since,member_text}) => {
    let x= since.split("").slice(0,10).join('');

    
    return (
            <div className="banner-info">
                <img src= {`https://songbird-api-v1.herokuapp.com/profilepics/${image}`} alt="Display Image" />
                <div className="banner-info-text">
                {/* <strong>{type}</strong> */}
                <h2>{name}</h2>
                <p> {member_text}{x}</p>
                </div>
            </div>
    )
}

export default Banner