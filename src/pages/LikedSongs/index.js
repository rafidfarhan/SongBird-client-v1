import React, {useEffect} from 'react'

import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import likedImage from '../../images/LikedSongs.png';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import SongList from '../../components/SongList';
import { removeSelectedAlbum, setUserLikedSongs } from '../../redux/actions';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 
import {api_base_url} from '../../config/constants'

import { Grid, Slider,LinearProgress } from "@mui/material";

import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

// import './LikedSongs.css'

const LikedSongs = () => {

    const currentState = useSelector((state) => state);
    const likedSongs = useSelector((state) => state.likedSongs);
    const dispatch = useDispatch();

    const getLikedSongs = async () =>{
        try{
          const {data} = await axios.get(`${api_base_url}/tracks/likedsongs`);
          dispatch(setUserLikedSongs(data));
        }
        catch(err){
          console.log(err.response.data.error);
        }
        
    }
    useEffect(() => {
        if (!currentState.userData.token) return
            
            setAxiosHeaders(currentState.userData.token);
            getLikedSongs();
      }, [currentState.userData.token]);
    return (
        <div className= "home-body">
            {/* <LinearProgress variant="determinate" value={50} /> */}
            <Header/>
            <Banner type ="likedSongs"
            album_art_url= {`https://firebasestorage.googleapis.com/v0/b/songbird-fed8a.appspot.com/o/Tracks%2FLikedSongs.png?alt=media&token=a2af9ebe-5dd1-41b6-b2b1-94869e3ef612`}
            album_title= "Liked Songs"
            artist_name={currentState?.userData?.user?.username}
            artist_image_url= {`https://songbird-api-v1.herokuapp.com/profilepics/${currentState?.userData?.user?.profilePicture}`}
            // release_date = {selectedAlbum?.data?.releaseDate}
            song_count = {likedSongs?.payload?.data.length}
            />
            <div className = 'album-icons-wrap'>
            <PlayCircleFilledWhiteRoundedIcon
                className= 'album-icon'
                // onClick={togglePlayPause}
                // onClick= {handlePlayPause}
            />
            {/* <FavoriteRoundedIcon className= 'album-heart-icon'/>
            <MoreHorizRoundedIcon className= 'album-more-icon'/> */}
            </div>
            <SongList tracks = {likedSongs?.payload?.data} album_title = {"Liked Songs"}
            artist_name = {likedSongs?.payload?.data?.artists?.map((artist) => artist.name).join(", ")}
            />
            <div style = {{height:"150px"}}></div>
           
        </div>
    )
}

export default LikedSongs
