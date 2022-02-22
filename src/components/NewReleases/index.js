import React from 'react'
import SingleRelease from '../SingleContent';
import "./NewReleases.css"
import {CircularProgress} from "@material-ui/core";

const NewReleases = ({fetched_data, heading}) => {
    return (

        <div className = 'new-releases-wrap' style = {{marginTop: "5%"}}>

            {!fetched_data? (
                    <div style = {{height: "50vh", textAlign: "center"}}>
                    <CircularProgress/>
                </div>
                ) : (
                    <div className = "container">
                        <h3 style = {{marginBottom: "1.5%"}}>{heading}</h3>
                        
                        <div className ="new-releases">
                            {fetched_data?.data?.map(
                                album =>(
                                    <SingleRelease name = {album.title.split(' ').slice(0,4).join(' ')} 
                                    image = {album.albumArtUrl} 
                                    sub = {album.artists}
                                    id = {album._id}
                                    key= {album._id}
                                    contentType ={'album'}
                                    />
                                )
                            )}
                            
                        </div>
                    </div>
                )}
        
        </div>
    )
}

export default NewReleases
