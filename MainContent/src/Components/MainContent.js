import React from 'react';
import './MainContent.css'; // Import the CSS file for styling

const MainContent = () => {
    return (
        <div className="main-content">
            <h2>Dashboard Overview</h2>

            <div className="cards-container">
                <div className="card">
                    <h3>Total Users</h3>
                    <p>1500</p>
                </div>
                <div className="card">
                    <h3>Total Revenue</h3>
                    <p>$20,000</p>
                </div>
                <div className="card">
                    <h3>Total Orders</h3>
                    <p>350</p>
                </div>
                <div className="card">
                    <h3>New Signups</h3>
                    <p>50</p>
                </div>
            </div>

            <div className="charts-container">
                <h3>Sales Overview</h3>
                {/* Placeholder for Chart Component */}
                <div className="chart-placeholder">Chart will go here</div>
            </div>

            <div className="recent-activity">
                <h3>Recent Activity</h3>
                <ul>
                    <li>User "John Doe" made a purchase of $50.</li>
                    <li>User "Jane Smith" signed up.</li>
                    <li>User "Tom Brown" updated their profile.</li>
                    <li>User "Emily White" made a purchase of $200.</li>
                </ul>
            </div>
        </div>
    );
};

export default MainContent;