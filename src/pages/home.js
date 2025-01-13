import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Sidebar/sideBar";
import Widget from "../Components/Widgets/widget";
import { useUserAuth } from "../Context/userAuthContext";
import "../Styles/home.css";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handlelogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="homePage">
      <SideBar handlelogout={handlelogout} user={user} />
      <Outlet />
      <Widget />
    </div>
  );
};

export default Home;
