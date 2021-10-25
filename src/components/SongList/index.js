import React from 'react'

import './SongList.css';

import SingleTrack from '../SingleTrack';

const SongList = ({heading,tracks, album_title,artist_name}) => {
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
        Title
      </div>

      <div className = "headings_details">Album</div>
      
  
     
      <div className = "headings_details">Duration</div>
      

      </div>

        </div>

        {tracks?.map((item) => (
        <SingleTrack track={item} 
        album_title ={album_title}
        artist_name = {artist_name}
        key = {item._id} />
        ))}
  </div>
    )
}

export default SongList
