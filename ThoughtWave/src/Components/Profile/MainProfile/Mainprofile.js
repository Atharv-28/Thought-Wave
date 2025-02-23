import React, { useState, useEffect } from "react";
// import Post from "../../Feed/Posts/Posts";
import { useNavigate } from "react-router-dom";
import "./Mainprofile.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import LockResetIcon from "@mui/icons-material/LockReset";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Editprofile from "../Editprofile/Editprofile";
import axios from "axios";
import useLoggedinuser from "../../../hooks/useLoggedinuser";

const Mainprofile = ({ user }) => {
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(false);
  const [loggedinuser] = useLoggedinuser();
  const username = user?.email?.split("@")[0];
  const [post, setpost] = useState([]);

  useEffect(() => {
    fetch(`https://twiller-twitterclone-dz1k.onrender.com/userpost?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setpost(data);
      });
  }, [user.email]);

  const handleuploadcoverimage = (e) => {
    setisloading(true);
    const image = e.target.files[0];
    // console.log(image)
    const formData = new FormData();
    formData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=b0ea2f6cc0f276633b2a8a86d2c43335",
        formData
      )
      .then((res) => {
        const url = res.data.data.display_url;
        // console.log(res.data.data.display_url);
        const usercoverimage = {
          email: user?.email,
          coverimage: url,
        };
        setisloading(false);
        if (url) {
          fetch(`https://twiller-twitterclone-dz1k.onrender.com/userupdate/${user?.email}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(usercoverimage),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("done", data);
            });
        }
      })
      .catch((e) => {
        console.log(e);
        window.alert(e);
        setisloading(false);
      });
  };
  const handleuploadprofileimage = (e) => {
    setisloading(true);
    const image = e.target.files[0];
    // console.log(image)
    const formData = new FormData();
    formData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=b0ea2f6cc0f276633b2a8a86d2c43335",
        formData
      )
      .then((res) => {
        const url = res.data.data.display_url;
        // console.log(res.data.data.display_url);
        const userprofileimage = {
          email: user?.email,
          profileImage: url,
        };
        setisloading(false);
        if (url) {
          fetch(`https://twiller-twitterclone-dz1k.onrender.com/userupdate/${user?.email}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userprofileimage),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("done", data);
            });
        }
      })
      .catch((e) => {
        console.log(e);
        window.alert(e);
        setisloading(false);
      });
  };
  return (
    <div className="mainprofile-container">
      <div className="profile-nav">
        <ArrowBackIcon className="arrow-icon" onClick={() => navigate("/")} />
        <h4 className="heading-4">{username}</h4>
      </div>
      <div className="mainprofile">
        <div className="profile-bio">
          {
            <div>
              <div className="coverImageContainer">
                <img
                  src={
                    loggedinuser[0]?.coverimage
                      ? loggedinuser[0].coverimage
                      : user && user.photoURL
                  }
                  alt=""
                  className="coverImage"
                />
                <div className="hoverCoverImage">
                  <div className="imageIcon_tweetButton">
                    <label htmlFor="image" className="imageIcon">
                      {isloading ? (
                        <LockResetIcon className="photoIcon photoIconDisabled" />
                      ) : (
                        <CenterFocusWeakIcon className="photoIcon" />
                      )}
                    </label>
                    <input
                      type="file"
                      id="image"
                      className="imageInput"
                      onChange={handleuploadcoverimage}
                    />
                  </div>
                </div>
              </div>
              <div className="avatar-img">
                <div className="avatarContainer">
                  <img
                    src={
                      loggedinuser[0]?.profileImage
                        ? loggedinuser[0].profileImage
                        : user && user.photoURL
                    }
                    alt=""
                    className="avatar"
                  />
                  <div className="hoverAvatarImage">
                    <div className="imageIcon_tweetButton">
                      <label htmlFor="profileImage" className="imageIcon">
                        {isloading ? (
                          <LockResetIcon className="photoIcon photoIconDisabled" />
                        ) : (
                          <CenterFocusWeakIcon className="photoIcon" />
                        )}
                      </label>
                      <input
                        type="file"
                        id="profileImage"
                        className="imageInput"
                        onChange={handleuploadprofileimage}
                      />
                    </div>
                  </div>
                </div>
                <div className="userInfo">
                  <div>
                    <h3 className="heading-3">
                      {loggedinuser[0]?.name
                        ? loggedinuser[0].name
                        : user && user.displayname}
                    </h3>
                    <p className="usernameSection">@{username}</p>
                  </div>
                  <Editprofile user={user} loggedinuser={loggedinuser} />
                </div>
                <div className="infoContainer">
                  {loggedinuser[0]?.bio ? <p>{loggedinuser[0].bio}</p> : ""}
                  <div className="locationAndLink">
                    {loggedinuser[0]?.location ? (
                      <div className="loc-weath">
                        <p className="subInfo">
                          <MyLocationIcon /> {loggedinuser[0].location}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                    {loggedinuser[0]?.website ? (
                      <p className="subInfo link">
                        <AddLinkIcon /> {loggedinuser[0].website}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <h4 className="tweetsText">Thoughts</h4>
                <hr />
              </div>
              {post.map((p) => (
                <Post p={p} />
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Mainprofile;