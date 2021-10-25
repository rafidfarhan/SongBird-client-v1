import React, {useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Banner from '../../components/Banner'
import { removeSelectedAlbum, setSelectedAlbum } from '../../redux/actions';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 
import {api_base_url} from '../../config/constants'

import AlbumIcon from '@mui/icons-material/Album';


const AlbumDetailed = () => {

    const currentState = useSelector((state) => state);
    const selectedAlbum = useSelector((state) => state.selectedAlbum);
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
            <Banner type ="album"
            album_art_url={selectedAlbum?.data?.albumArtUrl}
            album_title={selectedAlbum?.data?.title}
            artist_name={selectedAlbum?.data?.artists[0].name}
            artist_image_url= {selectedAlbum?.data?.artists[0].profileImgUrl}
            release_date = {selectedAlbum?.data?.releaseDate}
            song_count = {selectedAlbum?.data?.tracks?.length}
            />
            <AlbumIcon/>
        </div>
    )
}

export default AlbumDetailed
