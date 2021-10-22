import React from 'react';
import "./SingleContent.css";

const SingleContent = ({name,image,sub,sub2}) => {
    let subtitle = "Artist";
    if(sub) subtitle = sub[0].name;
    if(sub2) subtitle = sub2;
    // let x="";
    // if(sub) {
    //     for (let i=0; i< sub.length; i++){
    //         let y = sub[i].name;
    //         x= x.concat(" ").concat(y);

    //     }
    // }
       
      
    return (
        
        <div className = "content-card">
            <div className = "image-wrap">
                <img src = {image} alt = {`${name} cover`}/>
            </div>
            
            <h6>{name}</h6>
            <p>{subtitle}</p>
        </div>
        
    )
}

export default SingleContent