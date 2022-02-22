import React , {useState} from "react";
import "./Header.css";
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Chip} from "@material-ui/core";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';


import { useHistory } from "react-router-dom";

import {Link} from "react-router-dom";

import {makeStyles} from '@material-ui/core';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { 
  setSearchedTerm
} from "../../redux/actions";

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
        },
        '&:focus' :{
          backgroundColor : '#02202b75 ',
      }
    },
    largeAvatar: {
      width: 8,
      height: 8,
    },
    menuItems:{
      fontFamily: 'Quicksand !important',
      color : 'white !important'
    },
    icons : {
      color: 'white'
    }
  })

  const Header = ()=> {
    
    const classes = useStyles();
    const user = useSelector((state) => state.userData.user);

    const dispatch = useDispatch();
    

  
    const history = useHistory();
  
    const handleRoute = () =>{ 
        history.push("/search");
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };
    
    return (
      <div className="header">
        <div className="header__left">
          <SearchRoundedIcon />
          <input
            placeholder="Search for Artists, Songs, or Albums "
            type="text"
            // onClick = {handleRoute}
            onChange = {e => dispatch(setSearchedTerm(e.target.value))}
          />
        </div>
        <div className="header__right">
          {/* <Link to ="/profile">
            <Chip className ={classes.customSelectedChip}
              avatar={<Avatar style={{height: 30 , width: 30 }}  src= {`https://songbird-api-v1.herokuapp.com/profilepics/${user?.profilePicture}`} />}
              style={{ margin: 2 ,height: 40  }}
              label={user?.username}
              color = "primary"
              clickable
              />
              </Link> */}
              <Tooltip title="Account options">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Chip className ={classes.customSelectedChip}
                        avatar={<Avatar style={{height: 30 , width: 30, backgroundColor: 'white' }}  src= {`https://songbird-api-v1.herokuapp.com/profilepics/${user?.profilePicture}`} />}
                        style={{ margin: 2 ,height: 40  }}
                        label={user?.username}
                        color = "primary"
                        clickable
                      />
                      
                    </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    backgroundColor : '#02202bf1',
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: '#02202bf1',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <Link to ="/profile" className = 'link-color'>
                <MenuItem className ={classes.menuItems}>
                  <Avatar /> Profile
                </MenuItem >
                </Link>
                <MenuItem className ={classes.menuItems}>
                  <Avatar /> Account
                </MenuItem>
                <Divider />
                <MenuItem className ={classes.menuItems}>
                  <ListItemIcon>
                    <Settings className= {classes.icons} fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem className ={classes.menuItems}>
                  <ListItemIcon>
                    <HelpCenterRoundedIcon className= {classes.icons} fontSize="small" />
                  </ListItemIcon>
                   About SongBird
                </MenuItem>
                <MenuItem className ={classes.menuItems}>
                  <ListItemIcon>
                    <Logout className= {classes.icons} fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
            </Menu>
        </div>
      </div>
    );
  }

  export default Header;