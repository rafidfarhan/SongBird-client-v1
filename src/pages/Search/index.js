import React, {useState,useEffect} from 'react';
import './Search.css'

import axios from 'axios';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 
import {api_base_url} from '../../config/constants'
import { useSelector,useDispatch } from 'react-redux';

import Header from '../../components/Header';
import NewReleases from '../../components/NewReleases';
import LibraryArtists from '../../components/LibraryArtists';
import LibraryPlaylists from '../../components/LibraryPlaylists';
import SongList from '../../components/SongList';

import { 
    setSearchedArtists,
} from "../../redux/actions";

const Search = () => {
    const [searchType, setSearchType] = useState('albums');

    const userData = useSelector((state) => state.userData);
    const searchTerm = useSelector((state) => state.searchTerm.payload);
    const searchedContent = useSelector((state) => state.searchedArtists);

    const dispatch = useDispatch();

    const searchArtists = async () =>{
        if (searchTerm !== "" && searchTerm !== undefined ){
            try{
                console.log(`${api_base_url}/search/${searchType}?search=${searchTerm}`);
                const {data} = await axios.get(`${api_base_url}/search/${searchType}?search=${searchTerm}`);
                dispatch(setSearchedArtists(data));
              }
              catch(err){
                console.log(err.response.data.error);
              }
        }
        // else{
        //     setContent([]);
        //     setNumOfPages(0);
        // }
      }
      useEffect(()=>{
        if (!userData.token) return

        const timeOut = setTimeout (() =>{
            setAxiosHeaders(userData.token);
            searchArtists();
        }, 500);

        return () =>{
            clearTimeout(timeOut)
        };
        // eslint-disable-next-line

    },[userData.token, searchTerm, searchType]);

    return (
        <div className ='lib_body'>
            <Header/>
            <div className = 'search-buttons-wrap'>
                <button 
                    className ={(searchType==='albums')? ('search-type-button selected'):('search-type-button')} 
                    onClick ={e =>{setSearchType('albums')}}>Albums
                </button>
                <button 
                    className ={(searchType==='playlists')? ('search-type-button selected'):('search-type-button')} 
                    onClick ={e =>{setSearchType('playlists')}}>Playlists
                </button>
                <button 
                    className ={(searchType==='artists')? ('search-type-button selected'):('search-type-button')} 
                    onClick ={e =>{setSearchType('artists')}}>Artists
                </button>
            </div>
            {/* <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    }}>
                    {searchTerm && !searchedContent && (
                <h2>No matches</h2>
                    )}
                {searchTerm === '' && (
                <h2 style = {{fontFamily: 'Quicksand-Bold', marginBottom: '40vh'}}>-Search for Something-</h2>
                )}
            </div> */}
            {/* <NewReleases fetched_data = {searchedContent?.payload} heading= {'Searched Albums'}/> */}
            {/* <LibraryArtists fetched_data = {searchedContent?.payload?.data}/> */}
            {/* <LibraryPlaylists fetched_data = {searchedContent?.payload?.data}/> */}
            {/* <SongList tracks = {searchedContent?.data} /> */}
            
        </div>
    )
}

export default Search
