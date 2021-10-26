import React from 'react'

import './SongList.css';

import SingleTrack from '../SingleTrack';

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const SongList = ({heading,tracks, album_title,artist_name}) => {
  let count =1;
    return (
        <div className="tracks-wrap">
        <h3>{heading}</h3>
        <div className="body__icons">
        {/* <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
        />
        <FavoriteIcon fontSize="large" />
        <MoreHorizIcon /> */}
        </div>
        <div className="headingsRow">
        <div className="headingsRow__album"></div>
        <div className = "headingsRow_info_all">
      <div className="headingsRow__info">
        # Title
      </div>

      <div className = "headings_details">Album</div>
      
  
     
      <div className = "headings_details"><AccessTimeRoundedIcon/></div>
      

      </div>

        </div>

        {tracks?.map((item,index) => (
        <SingleTrack track={item} 
        album_title ={album_title}
        artist_name = {artist_name}
        key = {item._id}
        track_no={index+1}
         />
        ))}
  </div>
    )
}

export default SongList
