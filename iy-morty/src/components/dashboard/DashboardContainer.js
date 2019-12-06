import React from 'react'
import Menu from './menu/Menu';
import "./Dashboard.scss"
import AccountHeader from './account/AccountHeader';
import ChatContainer from '../../commons/chat/ChatContainer';
import UserLoggedBox from './userLoggedBox/UserLoggedBox';

const DashboardContainer = props => {

    return ( 
        <div className="dashboard-main-container">
            <Menu></Menu>
            <div className="right-section-container column-container">
                <AccountHeader/>
                <div className="app-section">
                    <UserLoggedBox/>
                    <ChatContainer/>
                </div>
            </div>
        </div>
     );
}
 
export default DashboardContainer;