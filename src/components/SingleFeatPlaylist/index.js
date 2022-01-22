import React from 'react';
import {Link} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./SingleFeatPlaylist.css";


const SingleFeatPlaylist = ({title,image,id}) => {
    return (
        <div className = 'pl'>
        <Link to ={`/playlist/${id}`} style= {{color:'white'}}>
        <div className = 'playlist'>
                <img src ={`https://songbird-api-v1.herokuapp.com/playlistpics/${image}`} alt= "img" ></img>
                <div>
                    <h6 className ="playlist_title">{title}</h6>
                    
                </div>
                
           
            
        </div>
        </Link>
        </div>
        
    )
}

export default SingleFeatPlaylist