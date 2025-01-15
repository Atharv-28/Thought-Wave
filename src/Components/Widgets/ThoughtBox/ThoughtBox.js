import React, { useState } from "react";
import { Input } from "@mui/material";
import { Avatar, Button } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import axios from "axios";
import "./thoughtBox.css";
import { useUserAuth } from "../../../Context/userAuthContext";
// import useLoggedinuser from "../../../hooks/useLoggedinuser";

const ThoughtBox = () => {
  const [post, setpost] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [isloading, setisloading] = useState(false);
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const { user } = useUserAuth();
  /*
  const [loggedinsuer] = useLoggedinuser();
  const email = user?.email;
  const userprofilepic = loggedinsuer[0]?.profileImage
    ? loggedinsuer[0].profileImage
    : user && user.photoURL;
    */

  const handleUploadMedia = async (e) => {
    /*
    setisloading(true);
    const media = e.target.files[0];
    const formData = new FormData();
    formData.append("file", media);
    formData.append("upload_preset", "ck4cetvf"); 

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dhnplptdz/upload", 
        formData
      );
      setMediaUrl(res.data.secure_url);
      setisloading(false);
    } catch (error) {
      console.error("Error uploading media:", error);
      setisloading(false);
    }
      */
  };

  const handletweet = (e) => {
    e.preventDefault();
    /*
    if (user?.providerData[0]?.providerId === "password") {
      fetch(`https://twiller-twitterclone-dz1k.onrender.com/loggedinuser?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setname(data[0]?.name);
          setusername(data[0]?.username);
        });
    } else {
      setname(user?.displayName);
      setusername(email?.split("@")[0]);
    }
    if (name) {
      const userpost = {
        profilephoto: userprofilepic,
        post: post,
        media: mediaUrl,
        username: username,
        name: name,
        email: email,
      };
      setpost("");
      setMediaUrl("");
      fetch("https://twiller-twitterclone-dz1k.onrender.com/post", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userpost),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    */
  };

  return (
    <div className="widget">
      <h2>Share Your Thoughts</h2>
      <form onSubmit={handletweet}>
        <div className="thoughtBox__input">
          <Avatar
          className="thoughtBox__avatar"
            /*src={
              loggedinsuer[0]?.profileImage
                ? loggedinsuer[0].profileImage
                : user && user.photoURL
            }*/
          />
          <textarea
            type="text"
            placeholder="What's happening?"
            onChange={(e) => setpost(e.target.value)}
            value={post}
            required
            rows="3"
            cols="7"
          />
        </div>
        <div className="imageIcon_thoughtButton">
          <label htmlFor="media" className="imageIcon">
            {isloading ? (
              <p>Uploading Media</p>
            ) : (
              <p>
                {mediaUrl ? "Media Uploaded" : <AddPhotoAlternateOutlinedIcon />}
              </p>
            )}
          </label>
          <input
            type="file"
            id="media"
            className="imageInput"
            accept="image/*,video/*"
            onChange={handleUploadMedia}
          />
          <Button className="thoughtBox__thoughtButton" type="submit">
            Share Thought
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ThoughtBox;
