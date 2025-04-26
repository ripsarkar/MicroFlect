import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul className="sidebar-menu">
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#settings">Settings</a></li>
                <li><a href="#help">Help</a></li>
                <li><a href="#logout">Logout</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;