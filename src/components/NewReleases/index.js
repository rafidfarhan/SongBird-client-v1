import React from 'react'
import SingleRelease from '../SingleContent';
import "./NewReleases.css"
import {CircularProgress} from "@material-ui/core";

const NewReleases = ({album_list}) => {
    return (

        <div className = 'new-releases-wrap' style = {{marginTop: "5%"}}>

            {!album_list? (
                    <div style = {{height: "50vh", textAlign: "center"}}>
                    <CircularProgress/>
                </div>
                ) : (
                    <div className = "container">
                        <h3 style = {{marginBottom: "1.5%"}}>New Releases</h3>
                        
                        <div className ="new-releases">
                            {album_list?.data?.map(
                                album =>(
                                    <SingleRelease name = {album.title.split(' ').slice(0,4).join(' ')} 
                                    image = {album.albumArtUrl} 
                                    sub = {album.artists}
                                    key= {album._id}/>
                                )
                            )}
                            
                        </div>
                    </div>
                )}
        
        </div>
    )
}

export default NewReleases
