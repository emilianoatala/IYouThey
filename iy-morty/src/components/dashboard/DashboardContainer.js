import React from 'react'
import Menu from './menu/Menu';
import "./Dashboard.scss"
import AccountHeader from './account/AccountHeader';
import ChatContainer from '../../commons/chat/ChatContainer';
import UserLoggedBox from './userLoggedBox/UserLoggedBox';
import { GET_USER_LOGGED } from '../../querys';
import {useQuery} from "@apollo/react-hooks"

const DashboardContainer = () => {
    const {data, loading, error} = useQuery(GET_USER_LOGGED)
    
    return ( 
        <div className="dashboard-main-container">
            <Menu></Menu>
            <div className="right-section-container column-container">
                <AccountHeader/>
                <div className="app-section">
                {(()=>{
                    if (loading) return "Loading..."
                    if (error) return `Error: ${error.mesagge}`
                    else return <UserLoggedBox array={data.getUserLogged}/>
                })()}
                    <ChatContainer/>
                </div>
            </div>
        </div>
     );
}
 
export default DashboardContainer;