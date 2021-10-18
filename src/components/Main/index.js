import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import Sidebar from '../Sidebar';
import Home from '../../pages/Home';
import Player from '../Player'

import './Main.css';

const Main = () => {
    return (
        <div className="main">
        <div className ="main-body">
            
            <Router>
            <Sidebar/>
            <Switch>
                <Route path ='/'><Home/></Route>
                {/* <Route path ='/library' component = {MyLibrary}></Route>
                <Route path ='/search' component = {SearchPage}></Route>
                <Route path ='/profile' component = {MyProfile}></Route>
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
