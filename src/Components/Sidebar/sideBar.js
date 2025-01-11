import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Avatar, IconButton, List } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./sideBar.css";
import SideBarOption from "./sideBarOption";
import CustomLink from "./customLink";
import { useNavigate } from "react-router-dom";
import Symbol from "../../Assets/Symbol.png";
import ImageTag from "../imageTag";

const SideBar = (handlelogout, user) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openMenu = Boolean(anchorEl);
  const loggedInUser = {};
  const navigate = useNavigate();
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const result = user?.email?.split("@")[0];

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="nav-logo-container">
          <ImageTag className="nav-logo" src={Symbol} title={"Thought-Wave"} />
        </div>
        <CustomLink to="/home/feed">
          <SideBarOption active Icon={HomeIcon} text="Home" />
        </CustomLink>
        <CustomLink to="/home/explore">
          <SideBarOption active Icon={SearchIcon} text="Explore" />
        </CustomLink>
        <CustomLink to="/home/notification">
          <SideBarOption
            active
            Icon={NotificationsNoneIcon}
            text="Notification"
          />
        </CustomLink>
        <CustomLink to="/home/bookmark">
          <SideBarOption active Icon={BookmarkBorderIcon} text="Bookmark" />
        </CustomLink>
        <CustomLink to="/home/profile">
          <SideBarOption active Icon={PermIdentityIcon} text="Profile" />
        </CustomLink>
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          {" "}
          Share Thought
        </Button>
        <div className="profile__info">
          <Avatar
            src={
              loggedInUser[0]?.profileImage
                ? loggedInUser[0].profileImage
                : "https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_640.png"
            }
          />
          <div className="user__info">
            <h4>
              {loggedInUser[0]?.name
                ? loggedInUser[0].name
                : user && user.displayName}
            </h4>
            <h5>@{result}</h5>
          </div>
          <IconButton
            size="small"
            sx={{ ml: 2 }}
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-valuetext={openMenu ? "true" : undefined}
            onClick={handleClick}
          />
          <MoreHorizIcon />
          <IconButton />
        </div>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            className="profile__info1"
            onClick={() => navigate("/home/profile")}
          >
            <Avatar
              src={
                loggedInUser[0]?.profileImage
                  ? loggedInUser[0].profileImage
                  : "https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_640.png"
              }
            />
            <div className="user__info subUser__info">
              <div>
                <h4>
                  {loggedInUser[0]?.name
                    ? loggedInUser[0].name
                    : user && user.displayName}
                </h4>
                <h5>@{result}</h5>
              </div>
              <ListItemIcon className="done_icon" color="blue">
                <DoneIcon />
              </ListItemIcon>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
          <MenuItem onClick={handlelogout}>Log out @{result}</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default SideBar;
