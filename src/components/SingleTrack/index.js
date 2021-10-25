import React from 'react';
import {useDispatch } from 'react-redux';

import "./SingleTrack.css";
// import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
// import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';




const SingleTrack = ({track,added_at,album_title,artist_name}) => {

  const dispatch = useDispatch();

  const msToMinutesAndSeconds = (s) => {
    var minutes = Math.floor(s / 60);
    var seconds = ((s % 60)).toFixed(0);
	
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    
}


    return (
        <div className="songRow">
          {/* <PlayArrowRoundedIcon className = "play"/> */}
          {/* <img className="songRow__album" src={track.album.images[0].url} alt={track.name} /> */}
          <div className = "songRow_info_all">
          <div className="songRow__info">
            <h1>{track.title}</h1>
            <p>
              {artist_name}
            </p>
          </div>
          <div className = "details">{album_title?.split(" ").slice(0,3).join(' ')}</div>
          {added_at? (
                 <div className = "details">
                    {added_at.slice(0,10)}
                </div>
      ) : (<></>)}
         
          <div className = "details">{msToMinutesAndSeconds(track.duration)}</div>
          

          </div>
        </div>
      );
}

export default SingleTrack