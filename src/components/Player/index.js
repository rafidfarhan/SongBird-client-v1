import React from 'react';

import './Player.css';

import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';

import { Grid, Slider } from "@mui/material";


const Player = () => {
    return (
        <div className="player">
        <div className="player-left">
            <img
            className="player-album-logo"
            src= "https://firebasestorage.googleapis.com/v0/b/songbird-fed8a.appspot.com/o/Tracks%2FEd%20Sheeran%20Divide%2FEd%20Sheeran%20-%20%C3%B7%20(Divide)%20(Deluxe)%20(2017).jpg?alt=media&token=3d957df6-2f58-40ce-a5f2-dd66e20e8e30"
            alt= 'album cover'
            />
            {/* {item?.payload ? (
            <div className="footer__songInfo">
                <h4>{item?.payload?.name}</h4>
                <p>{item?.payload?.artists.map((artist) => artist.name).join(", ")}</p>
            </div>
            ) : ( */}
            <div className="player-song-info">
                <h4>Select Song</h4>
                <p>...</p>
            </div>
            {/* )} */}
        </div>
        
        <div className ="player-center">
            <ShuffleRoundedIcon 
                fontSize="small" 
                className="player-green"
            />
            <SkipPreviousRoundedIcon className="player-skip" />
            <PlayCircleFilledWhiteRoundedIcon
                fontSize="large"
                className="player-player"
                // onClick= {handlePlayPause}
            />
            <SkipNextRoundedIcon 
            className="player-skip" />
            <RepeatRoundedIcon 
            fontSize="small" 
            className="player-green" />
        </div>
            
            <div className="player-right">
                
            <Grid container spacing={3}>
                <Grid item>
                    <PlaylistPlayRoundedIcon />
                </Grid>
                <Grid item>
                    <VolumeDownRoundedIcon/>
                </Grid>
                <Grid item xs>
                    <Slider aria-labelledby="continuous-slider" />
                </Grid>
            </Grid>
            </div>
        
        </div> 
    )
}

export default Player
