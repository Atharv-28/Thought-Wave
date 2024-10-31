import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '@mui/material/Divider';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar, IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './sideBar.css';
import SideBarOption from './sideBarOption';
import CustomLink from './customLink';
import { useNavigate } from 'react-router-dom';

const SideBar = ( handlelogout, user) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const loggedInUser = {}
    const navigate = useNavigate();
    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget);
    }
    const handleClose=()=>{
        setAnchorEl(null);
    }

    const result=user?.email?.split("@")[0];

    
    return (
        <div className="sidebar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#explore">Explore</a></li>
                <li><a href="#trendings">Trendings</a></li>
                <li><a href="#profile">Profile</a></li>
            </ul>
        </div>
    );
};

export default SideBar;