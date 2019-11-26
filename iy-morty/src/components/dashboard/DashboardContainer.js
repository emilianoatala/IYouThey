import React from 'react'
import Menu from './menu/Menu';
import "./Dashboard.scss"
import AccountHeader from './account/AccountHeader';
import ChatContainer from '../../commons/chat/ChatContainer';
const DashboardContainer = () => {
    return ( 
        <div className="dashboard-main-container">
        <Menu></Menu>
        <div className="right-section-container column-container">
        <AccountHeader/>
        <ChatContainer/>
        </div>
        </div>
     );
}
 
export default DashboardContainer;