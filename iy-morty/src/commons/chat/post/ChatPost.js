import React from 'react';
import "./ChatPost.scss"
import moment from "moment"

const ChatPost = ({username, description, createdAt}) => {
    return ( 
        <div className="chat-post-container row-container">
        <div className="info-container column-container">
        <span>{username}<span>  {moment(createdAt).format("DD/MM, h:mm")}</span></span>
        <p>{description}</p>
        </div>
        </div>
     );
}
 
export default ChatPost;