import React from 'react'
import Menu from './menu/Menu';
import "./Dashboard.scss"
const DashboardContainer = () => {
    return ( 
        <div className="dashboard-main-container">
        <Menu></Menu>
        </div>
     );
}
 
export default DashboardContainer;