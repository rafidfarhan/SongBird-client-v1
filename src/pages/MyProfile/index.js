import React from 'react';
import { useSelector} from 'react-redux';

import Header from '../../components/Header';
import Banner from '../../components/ProfileBanner'
import './MyProfile.css';

const MyProfile = () => {
    const userData = useSelector((state) => state.userData);
    return (
        <div className = "profile-body">
        <Header/>
        <Banner 
        image = {userData.user?.profilePicture}
        type = "PROFILE"
        name = {userData.user?.username}
        member_text = "Member since "
        since = {userData.user?.createdAt}
       
        />
        {/* <MyArtists/> */}
        <div style = {{height:"90px"}}></div>
    </div>
    )
}

export default MyProfile
