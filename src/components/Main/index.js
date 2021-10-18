import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import Sidebar from '../Sidebar';
import Player from '../Player'

import Home from '../../pages/Home';
import MyLibrary from '../../pages/MyLibrary';
import MyProfile from '../../pages/MyProfile';
import Search from '../../pages/Search';
import LikedSongs from '../../pages/LikedSongs';

import './Main.css';

const Main = () => {
    return (
        <div className="main">
        <div className ="main-body">
            
            <Router>
            <Sidebar/>
            <Switch>
                <Route path ='/' exact = {true}><Home/></Route>
                <Route path ='/library'><MyLibrary/></Route>
                <Route path ='/profile'><MyProfile/></Route>
                <Route path ='/search'><Search/></Route>
                <Route path ='/likedsongs'><LikedSongs/></Route>
                {/*
                <Route path ='/search' component = {SearchPage}></Route>
                <Route path ='/likedSongs' component = {LikedSongs}></Route>
                <Route path="/track/:trackId" component={ProductDetails} /> */}
            </Switch>
            <Player/>
            </Router>


        </div>
    </div>
    )
}

export default Main
