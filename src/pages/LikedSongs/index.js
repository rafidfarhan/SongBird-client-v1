import React, {useEffect} from 'react'

import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import SongList from '../../components/SongList';
import { removeSelectedAlbum, setUserLikedSongs } from '../../redux/actions';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 
import {api_base_url} from '../../config/constants'


import AlbumTwoToneIcon from '@mui/icons-material/AlbumTwoTone';
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
            <Header/>
            {/* <Banner type ="album"
            album_art_url={selectedAlbum?.data?.albumArtUrl}
            album_title={selectedAlbum?.data?.title}
            artist_name={selectedAlbum?.data?.artists[0].name}
            artist_image_url= {selectedAlbum?.data?.artists[0].profileImgUrl}
            release_date = {selectedAlbum?.data?.releaseDate}
            song_count = {selectedAlbum?.data?.tracks?.length}
            /> */}
            <div className = 'album-icons-wrap'>
            <AlbumTwoToneIcon className= 'album-icon'/>
            <FavoriteRoundedIcon className= 'album-heart-icon'/>
            <MoreHorizRoundedIcon className= 'album-more-icon'/>
            </div>
            <SongList tracks = {likedSongs?.payload?.data} album_title = {"Liked Songs"}
            artist_name = {likedSongs?.payload?.data?.artists?.map((artist) => artist.name).join(", ")}
            />
            <div style = {{height:"150px"}}></div>
           
        </div>
    )
}

export default LikedSongs
