import React, {useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import Header from '../../components/Header'
import { removeSelectedAlbum, setSelectedAlbum } from '../../redux/actions';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 
import {api_base_url} from '../../config/constants'


const AlbumDetailed = () => {

    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    const {albumId} = useParams();

    const getAlbum = async (albumId) =>{
        try{
          const {data} = await axios.get(`${api_base_url}/albums/${albumId}`);
          dispatch(setSelectedAlbum(data));
        }
        catch(err){
          console.log(err.response.data.error);
        }
        
    }
    useEffect(() => {
        if (!currentState.userData.token) return
        if (albumId && albumId !== "") {
            setAxiosHeaders(currentState.userData.token);
            getAlbum(albumId);
        }
        return () => {
          dispatch(removeSelectedAlbum());
        };
      }, [currentState.userData.token,albumId]);
    return (
        <div className= "home-body">
            <Header/>
            {albumId}
        </div>
    )
}

export default AlbumDetailed
