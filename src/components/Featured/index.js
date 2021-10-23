import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import setAxiosHeaders from '../../utils/setAxiosHeaders'
import SingleFeatPlaylist from '../SingleFeatPlaylist';
import './Featured.css';
import {setFeaturedPlaylist} from "../../redux/actions" 
import {CircularProgress} from "@material-ui/core";
import {api_base_url} from'../../config/constants'

const Featured = () => {

    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();

    // console.log(featured);

    const getFeaturedPlaylists = async () =>{
        try{
          const {data} = await axios.get(`${api_base_url}/playlists/featured`);
          dispatch(setFeaturedPlaylist(data));
        }
        catch(err){
          console.log(err.response.data.error);
        }
        
    }

    useEffect(()=>{
        if (!currentState.userData.token) return
        setAxiosHeaders(currentState.userData.token);
        getFeaturedPlaylists();
       
    },[currentState.userData.token]);

    return (
        <div className ="feat_full">
             {Object.keys(currentState.featuredPlaylists).length === 0 ? (
                 <div style = {{height: "35vh", textAlign: "center"}}>
                    <CircularProgress/>
                </div>
      ) : (
        <div className ="container ply">
            
        <h3 style = {{marginBottom: "1.5%"}}>Featured Playlists</h3>
        
        <div className="featuredPlaylist">
            
            {
                currentState.featuredPlaylists?.payload?.data?.slice(0,6).map(playlist=>(
                    <SingleFeatPlaylist title = {playlist.name} image = {playlist.picture} key ={playlist._id}/>
                ))
            }
            
            </div>
        </div>
      )}
       
        
        </div>
    )
}

export default Featured