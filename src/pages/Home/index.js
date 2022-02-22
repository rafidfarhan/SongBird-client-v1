import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 
import {api_base_url} from '../../config/constants'

import Header from '../../components/Header';
import Featured from '../../components/Featured';
import NewReleases from '../../components/NewReleases';
import TimelineAlbums from '../../components/TimelinAlbums'

import { 
    setNewReleases,
    setTimelineAlbums
  } from "../../redux/actions";

import './Home.css';

const Home = () => {
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    const newReleases = useSelector((state) =>state.newReleases.payload);
    const timelineAlbums = useSelector((state) =>state.timelineAlbums.payload);

    const getNewReleases = async () =>{
        try{
          const {data} = await axios.get(`${api_base_url}/albums?sort=-releaseDate&limit=8`);
          dispatch(setNewReleases(data));
        }
        catch(err){
          console.log(err.response.data.error);
        }
        
    }
    const getTimelineAlbums = async () =>{
      try{
        const {data} = await axios.get(`${api_base_url}/albums/timeline`);
        dispatch(setTimelineAlbums(data));
      }
      catch(err){
        console.log(err.response.data.error);
      }
      
  }

    useEffect(()=>{
        if (!currentState.userData.token) return
        setAxiosHeaders(currentState.userData.token);
        getNewReleases();
        getTimelineAlbums();
    },[currentState.userData.token]);

    return (
        <div className = "home-body">
            <Header/>
            <Featured/>
            <NewReleases fetched_data = {newReleases} heading ={'New Releases'}/>
            <TimelineAlbums fetched_data = {timelineAlbums}/>
            <div style = {{height:"150px"}}></div>
        </div>
    )
}

export default Home;
