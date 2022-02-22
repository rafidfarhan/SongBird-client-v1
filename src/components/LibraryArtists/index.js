import React from 'react'
import SingleRelease from '../SingleContent';
import "./LibraryArtists.css"
import {CircularProgress} from "@material-ui/core";

const LibraryArtists = ({fetched_data}) => {
    return (

        <div className = 'library-artists-wrap' style = {{marginTop: "5%"}}>

            {!fetched_data? (
                    <div style = {{height: "50vh", textAlign: "center"}}>
                    <CircularProgress/>
                </div>
                ) : (
                    <div className = "container">
                        <h3 style = {{marginBottom: "1.5%"}}>Followed Artists</h3>
                        
                        <div className ="library-artists">
                            {fetched_data?.map(
                                artist =>(
                                    <SingleRelease name = {artist.name.split(' ').slice(0,4).join(' ')} 
                                    image = {artist.profileImgUrl}
                                    sub2 = {`Artist`}
                                    id = {artist._id}
                                    key= {artist._id}
                                    contentType = {'artist'}
                                    />
                                )
                            )}
                            
                        </div>
                    </div>
                )}
        
        </div>
    )
}

export default LibraryArtists
