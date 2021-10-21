import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./SingleFeatPlaylist.css";


const SingleFeatPlaylist = ({title,image}) => {
    return (
        <div className = 'pl'>
        <div className = 'playlist'>
                <img src ={`https://songbird-api-v1.herokuapp.com/playlistpics/${image}`} alt= "img" ></img>
                <div>
                    <h6 className ="playlist_title">{title}</h6>
                    
                </div>
                
           
            
        </div>
        </div>
        
    )
}

export default SingleFeatPlaylist