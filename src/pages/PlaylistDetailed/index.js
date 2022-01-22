import React, {useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import SongList from '../../components/SongList';
import { removeSelectedPlaylist, setSelectedPlaylist } from '../../redux/actions';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 
import {api_base_url} from '../../config/constants'


import FeaturedPlayListTwoToneIcon from '@mui/icons-material/FeaturedPlayList';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import '../AlbumDetailed/AlbumDetailed.css';


const PlaylistDetailed = () => {

    const currentState = useSelector((state) => state);
    const selectedPlaylist = useSelector((state) => state.selectedPlaylist);
    const dispatch = useDispatch();
    const {playlistId} = useParams();

    const getPlaylist = async (playlistId) =>{
        try{
          const {data} = await axios.get(`${api_base_url}/playlists/${playlistId}`);
          dispatch(setSelectedPlaylist(data));
        }
        catch(err){
          console.log(err.response.data.error);
        }
        
    }
    useEffect(() => {
        if (!currentState.userData.token) return
        if (playlistId && playlistId !== "") {
            setAxiosHeaders(currentState.userData.token);
            getPlaylist(playlistId);
        }
        return () => {
          dispatch(removeSelectedPlaylist());
        };
      }, [currentState.userData.token,playlistId]);
    return (
        <div className= "home-body">
            <Header/>
            <Banner type ="playlist"
            album_art_url={selectedPlaylist?.data?.picture}
            album_title={selectedPlaylist?.data?.name}
            release_date = {selectedPlaylist?.data?.createdAt}
            song_count = {selectedPlaylist?.data?.tracks?.length}
            />
            <div className = 'album-icons-wrap'>
            <FeaturedPlayListTwoToneIcon className= 'album-icon'/>
            <FavoriteRoundedIcon className= 'album-heart-icon'/>
            <MoreHorizRoundedIcon className= 'album-more-icon'/>
            </div>
            <SongList tracks = {selectedPlaylist?.data?.tracks} album_title = {selectedPlaylist?.data?.name}
            />
            <div style = {{height:"150px"}}></div>
           
        </div>
    )
}

export default PlaylistDetailed
