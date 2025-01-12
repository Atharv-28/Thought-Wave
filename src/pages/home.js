import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Sidebar/sideBar";
import Widget from "../Components/Widgets/widget";
import "../Styles/home.css";

const Home = () => {
    const navigate = useNavigate();
    const user={
        displayName: "User",
        email: "abc@xyz.com"
    }

    const handlelogout = async () => {
        try {
            // Handle logout logic here
            console.log("Logout");
            navigate("/login");
        } catch (error) {
            console.error(error.message);
            window.alert(error.message);
        }
    }

  return (
    <div className="homePage">
        <SideBar handlelogout={handlelogout} user={user} />
        <Outlet />
        <Widget />
    </div>
  );
};

export default Home;
