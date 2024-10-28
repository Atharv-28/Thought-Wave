import React from 'react';
import './sideBar.css'; // Make sure to create and style this CSS file

const SideBar = () => {
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