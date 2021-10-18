import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import "./Sidebar.css";
import SidebarOptions from './SidebarOptions';

const Sidebar = () => {

    const playlists = useSelector((state) => state.userData.playlists);

    return (
        <div className="sidebar">
        {/* <img
            className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
        /> */}
        
        <Link to = "/">
            <SidebarOptions  option="Home" />
        </Link >
        <Link to = "/search">
            <SidebarOptions  option="Search" />
        </Link>
       

       <Link to = "/library">
       <SidebarOptions option="Your Library" />
       </Link>
       <Link to = "/likedSongs">
       <SidebarOptions option="Liked Songs" />
       </Link>
       {playlists?.items?.map(playlist =>(
           <SidebarOptions  option= {playlist.name} key ={playlist.id} />
       )
       )}
       
    </div>
    )
}

export default Sidebar
