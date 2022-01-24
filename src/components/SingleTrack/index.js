import React, {useState, useEffect} from 'react';

import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';

import { removeSelectedAlbum, setSelectedSongForPlayer } from '../../redux/actions';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 
import {api_base_url} from '../../config/constants'

import "./SingleTrack.css";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
// import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

// import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';




const SingleTrack = ({track,added_at,album_title,artist_name,track_no}) => {

  const [hover,setHover]=useState({
    track_no: track_no,
    heart: '',
    options:''
  });
  const dispatch = useDispatch();

  const msToMinutesAndSeconds = (s) => {
    var minutes = Math.floor(s / 60);
    var seconds = ((s % 60)).toFixed(0);
	
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    
}
    const currentState = useSelector((state) => state);

    const getTrack = async () =>{
        try{
          setAxiosHeaders(currentState.userData.token);
          const {data} = await axios.get(`${api_base_url}/tracks/${track._id}`);
          dispatch(setSelectedSongForPlayer(data));
        }
        catch(err){
          console.log(err.response.data.error);
        }
        
    }
    // useEffect(() => {
    //     if (!currentState.userData.token) return
    //     if (albumId && albumId !== "") {
    //         setAxiosHeaders(currentState.userData.token);
    //         getAlbum(albumId);
    //     }
    //     return () => {
    //       dispatch(removeSelectedAlbum());
    //     };
    //   }, [currentState.userData.token,albumId]);


    return (
        <div className="songRow" 
        onMouseEnter ={(e)=>{
          setHover({
            track_no: <PlayArrowRoundedIcon className = "play"/>,
            heart:  <FavoriteBorderRoundedIcon className = "play"/>,
            options: <MoreHorizRoundedIcon className = "play"/>
        })
      }} 
        onMouseLeave ={(e)=>{setHover({
          track_no: track_no,
          heart: '',
          options:''
        })}}
        onClick= {getTrack}
        >
          {/* <PlayArrowRoundedIcon className = "play"/> */}
          {/* <img className="songRow__album" src={track.album.images[0].url} alt={track.name} /> */}
          <div className = "songRow_info_all">
         
          <div className="songRow-info-wrap">
          <div className ="track-no">{hover.track_no}</div>
          <div className="songRow__info">
            <h1>{track.title}</h1>
              <p>
                {artist_name}
              </p>
          </div>
           
          </div>
          <div className = "details">{album_title?.split(" ").slice(0,3).join(' ')}</div>
          {added_at? (
                 <div className = "details">
                    {added_at.slice(0,10)}
                </div>
      ) : (<></>)}
         
          <div className = "details">{hover.heart}{msToMinutesAndSeconds(track.duration)}{hover.options}</div>
          

          </div>
        </div>
      );
}

export default SingleTrack