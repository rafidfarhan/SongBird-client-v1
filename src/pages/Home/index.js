import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 

import Header from '../../components/Header';
import Featured from '../../components/Featured';
import NewReleases from '../../components/NewReleases'

import { 
    setNewReleases
  } from "../../redux/actions";

import './Home.css';

const Home = () => {
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    const newReleases = useSelector((state) =>state.newReleases.payload);

    const getNewReleases = async () =>{
        try{
          const {data} = await axios.get(`https://songbird-api-v1.herokuapp.com/api/v1/albums?sort=-releaseDate&limit=6`);
          dispatch(setNewReleases(data));
        }
        catch(err){
          console.log(err.response.data.error);
        }
        
    }

    useEffect(()=>{
        if (!currentState.userData.token) return
        setAxiosHeaders(currentState.userData.token);
        getNewReleases();
    },[currentState.userData.token]);

    return (
        <div className = "home-body">
            <Header/>
            <Featured/>
            <NewReleases album_list = {newReleases}/>
            <div style = {{height:"90px"}}></div>
        </div>
    )
}

export default Home;
