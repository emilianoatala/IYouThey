import React from 'react';
import "./Chat.scss"
import ChatPost from '../post/ChatPost';
import {useQuery} from "@apollo/react-hooks"
import { GET_POSTS } from '../../../querys';

const Chat = () => {
    const {data, loading, error} = useQuery(GET_POSTS,{
        pollInterval:10
    })
    return ( 
        <div className="chat">
        {(()=>{
            if(loading) return "Loading.."
            if(error) return `Error: ${error.message}`
            return (data.getAllPosts.map(item=> <ChatPost username="Emiliano" description={item.description} createdAt={item.createdAt}/>))
            })()}
        </div>
     );
}
 
export default Chat;

