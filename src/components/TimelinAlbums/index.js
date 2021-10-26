import React from 'react'
import SingleContent from '../SingleContent';
import "../NewReleases/NewReleases.css"
import {CircularProgress} from "@material-ui/core";

const TimelineAlbums = ({fetched_data}) => {
    return (

        <div className = 'new-releases-wrap' style = {{marginTop: "5%"}}>

            {!fetched_data? (
                    <div style = {{height: "50vh", textAlign: "center"}}>
                    <CircularProgress/>
                </div>
                ) : (
                    <div className = "container">
                        <h3 style = {{marginBottom: "1.5%"}}>Made for You</h3>
                        
                        <div className ="new-releases">
                            {fetched_data?.data?.map(
                                 artist =>(
                                    artist.map(
                                        album =>(
                                            <SingleContent name = {album.title.split(' ').slice(0,4).join(' ')} 
                                            image = {album.albumArtUrl} 
                                            sub2 = {album.genre}
                                            id= {album._id}
                                            key= {album._id}/>
                                        )
                                    )
                                 )
                            )}
                            
                        </div>
                    </div>
                )}
        
        </div>
    )
}

export default TimelineAlbums

