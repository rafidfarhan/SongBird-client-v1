import React from 'react';

import Header from '../../components/Header';
import Featured from '../../components/Featured';

import './Home.css';

const Home = () => {
    return (
        <div className = "home-body">
            <Header/>
            <Featured/>
        </div>
    )
}

export default Home;
