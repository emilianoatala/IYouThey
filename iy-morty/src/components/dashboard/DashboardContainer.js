import React from 'react'
import Menu from './menu/Menu';
import "./Dashboard.scss"
import ChatContainer from '../../commons/chat/ChatContainer';
import UserLoggedBox from './userLoggedBox/UserLoggedBox';
import { GET_POSTS_AND_USER_LOGGED } from '../../querys';
import {useQuery} from "@apollo/react-hooks"

const DashboardContainer = ({refetch, session}) => {
    const {data, loading, error} = useQuery(GET_POSTS_AND_USER_LOGGED)

    return ( 
        <div className="dashboard-main-container">
            <Menu userdata={session} refetch={refetch}/>
            <div className="right-section-container column-container">
                <div className="app-section">
                {(()=>{
                    if (loading) return "Loading..."
                    if (error) return `Error: ${error.mesagge}`
                    else{
                        return(
                            <>
                            <UserLoggedBox array={data.getUserLogged}/>
                            <ChatContainer data={data.getAllPosts}/>
                            </>
                        )
                    } 
                })()}
                    
                </div>
            </div>
        </div>
     );
}
 
export default DashboardContainer;