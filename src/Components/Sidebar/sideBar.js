import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
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
  const openMenu = Boolean(anchorEl);
  const loggedInUser = {};
  const navigate = useNavigate();
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const result = user?.email?.split("@")[0];

  return (
    <div className="sidebar">
      <ImageTag src={Symbol} title={"Thought-Wave"} />
      <CustomLink to="/home/feed">
        <SideBarOption active Icon={HomeIcon} text="Home" />
      </CustomLink>
      <CustomLink to="/home/explore">
        <SideBarOption active Icon={HomeIcon} text="Explore" />
      </CustomLink>
      <CustomLink to="/home/notification">
        <SideBarOption active Icon={HomeIcon} text="Notification" />
      </CustomLink>
      <CustomLink to="/home/messages">
        <SideBarOption active Icon={HomeIcon} text="Messages" />
      </CustomLink>
      <CustomLink to="/home/bookmark">
        <SideBarOption active Icon={HomeIcon} text="Bookmark" />
      </CustomLink>
      <CustomLink to="/home/lists">
        <SideBarOption active Icon={HomeIcon} text="Lists" />
      </CustomLink>
      <CustomLink to="/home/profile">
        <SideBarOption active Icon={HomeIcon} text="Profile" />
      </CustomLink>
      <CustomLink to="/home/more">
        <SideBarOption active Icon={HomeIcon} text="More" />
      </CustomLink>
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        {" "}
        Tweet
      </Button>
      <div className="profile__info">
        <Avatar
          src={
            loggedInUser[0]?.profileImage
              ? loggedInUser[0].profileImage
              : "https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_640.png"
          }
        />
      </div>
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
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar
            src={
              loggedInUser[0]?.profileImage
                ? loggedInUser[0].profileImage
                : "https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_640.png"
            }
          />
          <div className="user__info subUse__info">
            <div>
              <h4>
                {loggedInUser[0]?.name
                  ? loggedInUser[0].name
                  : user && user.displayName}
              </h4>
              <h5>@{result}</h5>
            </div>
            <ListItemIcon className="done-icon" color="blue">
              {" "}
              <DoneIcon />{" "}
            </ListItemIcon>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
        <MenuItem onClick={handlelogout}>Log out @{result}</MenuItem>
      </Menu>
    </div>
  );
};

export default SideBar;
