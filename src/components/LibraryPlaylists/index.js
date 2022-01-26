import React from 'react'
import SingleRelease from '../SingleContent';
import "./LibraryPlaylists.css"
import {CircularProgress} from "@material-ui/core";

const LibraryPlaylists = ({fetched_data}) => {
    return (

        <div className = 'library-playlists-wrap' style = {{marginTop: "5%"}}>

            {!fetched_data? (
                    <div style = {{height: "50vh", textAlign: "center"}}>
                    <CircularProgress/>
                </div>
                ) : (
                    <div className = "container">
                        <h3 style = {{marginBottom: "1.5%"}}>Playlists</h3>
                        
                        <div className ="library-playlists">
                            {fetched_data?.map(
                                playlist =>(
                                    <SingleRelease name = {playlist.name.split(' ').slice(0,4).join(' ')} 
                                    image = {`https://songbird-api-v1.herokuapp.com/playlistpics/${playlist.picture}`}
                                    sub = {playlist.owner.username}
                                    id = {playlist._id}
                                    key= {playlist._id}/>
                                )
                            )}
                            
                        </div>
                    </div>
                )}
        
        </div>
    )
}

export default LibraryPlaylists
