import React from "react";
import "./Header.css";
import { useSelector } from 'react-redux';
import { Avatar, Chip} from "@material-ui/core";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


import { useHistory } from "react-router-dom";

import {Link} from "react-router-dom";

import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    customChip: {
        borderRadius: 2,
        fontFamily : 'Quicksand-Bold',
    },
    customSelectedChip: {
        borderRadius: 2,
        fontFamily : 'Quicksand-Bold',
        color : 'white',
        backgroundColor :'rgba(255, 255, 255, 0.5)',
        '&:hover' :{
            backgroundColor : 'rgba(255, 255, 255, 0.7)',
        }
    },
    largeAvatar: {
      width: 8,
      height: 8,
    },
  })

  const Header = ()=> {
    const classes = useStyles();
    const user = useSelector((state) => state.userData.user);

  
    const history = useHistory();
  
    const handleRoute = () =>{ 
        history.push("/search");
    }
    
    return (
      <div className="header">
        <div className="header__left">
          <SearchRoundedIcon />
          <input
            placeholder="Search for Artists, Songs, or Albums "
            type="text"
            // onClick = {handleRoute}
            // onChange = {e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="header__right">
          <Link to ="/profile">
        <Chip className ={classes.customSelectedChip}
              avatar={<Avatar style={{height: 30 , width: 30 }}  src= {`https://songbird-api-v1.herokuapp.com/profilepics/${user?.profilePicture}`} />}
              style={{ margin: 2 ,height: 40  }}
              label={user?.username}
              // key={genre.id}
              color = "primary"
              clickable
              // onDelete={() => handleRemove(genre)}
              />
              </Link>
          {/* <Avatar alt={user?.display_name} src={user?.images[0].url} />
          <h4>{user?.display_name}</h4> */}
        </div>
      </div>
    );
  }

  export default Header;