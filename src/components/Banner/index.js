import React from 'react'


import './Banner.css';

const Banner = ({profile_image,
    type,
    username,
    member_since,
    album_art_url,
    album_title,
    artist_name,
    artist_image_url,
    release_date,
    song_count

}) => {
    let member_since_processed= member_since?.split("").slice(0,10).join('');
    let release_date_processed= release_date?.split("").slice(0,4).join('');
    let component = <></>;

    if (type==="profile"){
        component=  <div className="banner-info">
                        <img className ="profile_img" src= {`https://songbird-api-v1.herokuapp.com/profilepics/${profile_image}`} alt="user" />
                        <div className="banner-info-text">
                        <strong className = 'type'>{type}</strong>
                        <h2>{username}</h2>
                        <p>Member since {member_since_processed}</p>
                        </div>
                    </div>
    }
    if (type==="album"){
        component= <div className="banner-info">
                        <img className ="album_img" src= {album_art_url} alt="album" />
                        <div className="banner-info-text">
                        <strong className = 'type'>{type}</strong>
                        <h2>{album_title}</h2>
                        <div className ='details-txt'><img className ="artist_img" 
                        src= {artist_image_url} 
                        alt="album" /><span className = 'artist-name'>{artist_name}</span><span><p>· Released in {release_date_processed} · {song_count} song(s)</p></span></div>
                        </div>
                    </div>
    }
    
    return (
        <>
        {component}  
        </>
    )
}

export default Banner