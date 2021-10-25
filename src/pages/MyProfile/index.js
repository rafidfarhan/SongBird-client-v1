import React,{useEffect} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import axios from 'axios';

import Header from '../../components/Header';
import Banner from '../../components/Banner'

import {api_base_url} from '../../config/constants'
import setAxiosHeaders from '../../utils/setAxiosHeaders'
import { 
    setMyPlaylists,
  } from "../../redux/actions";


import './MyProfile.css';

const MyProfile = () => {
    const userData = useSelector((state) => state.userData);
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
    useEffect(()=>{
        if (!userData.token) return
        setAxiosHeaders(userData.token);
        getOwnedPlaylists();
    },[userData.token]);
    return (
        <div className = "profile-body">
        <Header/>
        <Banner 
        profile_image = {userData.user?.profilePicture}
        type = "profile"
        username = {userData.user?.username}
        member_since = {userData.user?.createdAt}
       
        />
        {/* <MyArtists/> */}
        <div style = {{height:"90px"}}></div>
    </div>
    )
}

export default MyProfile
