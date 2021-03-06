import React, {useState,useEffect,useRef} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import './Player.css';

import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';

import { Grid, Slider,LinearProgress } from "@mui/material";

import { removeSelectedAlbum, setSelectedAlbum } from '../../redux/actions';
import setAxiosHeaders from '../../utils/setAxiosHeaders'; 
import {api_base_url} from '../../config/constants'

const Player = () => {
    const currentState = useSelector((state) => state);
    const selectedSong = useSelector((state) => state.selectedSongForPlayer);
    const dispatch = useDispatch();
    const [isPlaying, setIsPlaying]= useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    // const [volume, setVolume] = useState(50)
    const [progress,setProgress] = useState(0)

    const audioElement = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    const togglePlayPause =() =>{
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if(!prevValue){
            audioElement.current.play();
            // animationRef.current = requestAnimationFrame(whilePlaying);
        }
        else{
            audioElement.current.pause();
            // cancelAnimationFrame(animationRef.current)
        }
    }
    // const whilePlaying = ()=>{
    //     setProgress(audioElement.current.currentTime)
    // }
    
    // function formatTime(secs) {
    //     const t = new Date(1970, 0, 1);
    //     t.setSeconds(secs);
    //     let s = t.toTimeString().substr(0, 8);
    //     if (secs > 86399)
    //         s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
    //     return s.substring(3);
    // }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}: ${returnedSeconds}`;
      }

    const changeProgress = (event,value) =>{
        // console.log(progressBar)
        audioElement.current.currentTime= value;
        setProgress(value)
        setCurrentTime(value);
    }
    const changeVolume = (event,value) =>{
        audioElement.current.volume= value/100;
        // setVolume(value);
    }

    useEffect(()=>{
        const seconds = Math.floor(audioElement.current.duration)
        setDuration(seconds)
        progressBar.current.max = seconds;

    },[audioElement?.current?.loadedmetadata, audioElement?.current?.readyState])

    useEffect(() => {
        setProgress(currentTime)
    }, [currentTime]);

    useEffect(() => {
        setInterval(() => {
            if (audioElement.current !== null)
                setCurrentTime(audioElement.current.currentTime);
        })
    });
    
    return (
        <>
        <div className="player">
        <div className="player-left">
            {selectedSong?.data?.album?.albumArtUrl &&<img
            className="player-album-logo"
            src ={selectedSong?.data?.album.albumArtUrl}
            alt= 'album cover'
            />}
            {selectedSong?.data? (
            <div className="footer__songInfo">
                <h1>{selectedSong?.data?.title}</h1>
                {/* <p>{selectedSong?.data?.album.artists.map((artist) => artist.name).join(", ")}</p> */}
                <p>{selectedSong?.data?.artistName}</p>
            </div>
            ) : (
                
            <div className="footer__songInfo">
                <h1>Select a Song</h1>
                {/* <p>{selectedSong?.data?.album.artists.map((artist) => artist.name).join(", ")}</p> */}
                <p>Artist name</p>
            </div>
             )}
        </div>
        
        <div className ="player-center">
            <ShuffleRoundedIcon 
                fontSize="small" 
                className="player-green"
            />
            <SkipPreviousRoundedIcon className="player-skip" />
            <audio ref={audioElement} src={selectedSong?.data?.streamUrl} preload={"metadata"}/>
            {!isPlaying? (<PlayCircleFilledWhiteRoundedIcon
                fontSize="large"
                className="player-player"
                onClick={togglePlayPause}
                // onClick= {handlePlayPause}
            />):(
                <PauseCircleRoundedIcon
                fontSize="large"
                className="player-player"
                onClick={togglePlayPause}
                // onClick= {handlePlayPause}
            />
            )}
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
                    <Slider 
                    aria-labelledby="continuous-slider" 
                    defaultValue = {100}
                    className ={"volume-slider"}
                    onChange ={changeVolume}
                    />
                </Grid>
            </Grid>
            </div>
            <div className="playback">
                <Slider 
                 aria-labelledby="continuous-slider"
                 className ={"playback-completed"}
                 defaultValue = {0}
                 ref = {progressBar}
                 onChange ={changeProgress} 
                 max={selectedSong?.data?.duration}
                 value={progress}
                 
                 />
            </div>
            <div className="duration">{calculateTime(currentTime)} out of {(duration && !isNaN(duration))? (calculateTime(duration)):('0:00')}</div>
        
        </div> 
       
        </>
    )
}

export default Player
