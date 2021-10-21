import React from 'react';
import "./SingleContent.css";

const SingleContent = ({name,image,sub}) => {
    let subtitle = "Artist";
    if(sub) subtitle = sub[0].name;
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
                <img src = {image} alt = "Artist of Album image"/>
            </div>
            
            <h6>{name}</h6>
            {sub?(<p>{subtitle}</p>):(<p>Artist</p>)}
        </div>
        
    )
}

export default SingleContent