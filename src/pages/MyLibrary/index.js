import React, {useState,useEffect} from 'react';
import './MyLibrary.css'

import axios from 'axios';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 
import {api_base_url} from '../../config/constants'
import { useSelector,useDispatch } from 'react-redux';

import Header from '../../components/Header';
import NewReleases from '../../components/NewReleases';
import LibraryPlaylists from '../../components/LibraryPlaylists';

import { 
    setMyPlaylists,
    setMySavedPlaylists,
    setMySavedAlbums,
    setMyFollowedArtists
} from "../../redux/actions";



const MyLibrary = () => {

  const [contentType,setContentType] = useState('playlists');

    const userData = useSelector((state) => state.userData);
    const ownedPlaylists = useSelector((state) => state.userOwnedPlaylists);
    const savedPlaylists = useSelector((state) => state.userSavedPlaylists);
    const savedAlbums = useSelector((state) => state.userSavedAlbums.payload);

    const ownedPlaylistsArray = ownedPlaylists?.payload?.data;
    const savedPlaylistsArray = savedPlaylists?.payload?.data;

    let playlists = [];
    if(ownedPlaylistsArray && savedPlaylistsArray){
        playlists = [...ownedPlaylistsArray,...savedPlaylistsArray]
    }
    
    const dispatch = useDispatch();
    const getOwnedPlaylists = async () =>{
        try{
          const {data} = await axios.get(`${api_base_url}/playlists/myplaylists`);
          dispatch(setMyPlaylists(data));
        }
        catch(err){
          console.log(err.response.data.error);
        }
        
    }
    const getSavedPlaylists = async () =>{
        try{
          const {data} = await axios.get(`${api_base_url}/playlists/savedplaylists`);
          dispatch(setMySavedPlaylists(data));
        }
        catch(err){
          console.log(err.response.data.error);
        }
        
    }
  
  const getSavedAlbums = async () =>{
    try{
      const {data} = await axios.get(`${api_base_url}/albums/savedalbums`);
      dispatch(setMySavedAlbums(data));
    }
    catch(err){
      console.log(err.response.data.error);
    }
    
}
const getFollowedArtists = async () =>{
  try{
    const {data} = await axios.get(`${api_base_url}/artists/followedartists`);
    dispatch(setMyFollowedArtists(data));
  }
  catch(err){
    console.log(err.response.data.error);
  }
  
}
    useEffect(()=>{
        if (!userData.token) return
        setAxiosHeaders(userData.token);
        if(contentType === 'playlists'){
          getOwnedPlaylists();
          getSavedPlaylists();
        }
        if(contentType === 'albums'){
          getSavedAlbums();
        }
        if(contentType === 'artists'){
          getFollowedArtists();
        }
        
    },[userData.token]);

    return (
        <div className ='lib_body'>
            <Header/>
            <LibraryPlaylists fetched_data = {playlists}/>
            {/* <NewReleases fetched_data = {savedAlbums}/> */}
        </div>
    )
}

export default MyLibrary
