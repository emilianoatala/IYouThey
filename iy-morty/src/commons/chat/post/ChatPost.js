import React from 'react';
import "./ChatPost.scss"

const ChatPost = ({username, description, createdAt}) => {
    return ( 
        <div className="chat-post-container row-container">
        <div className="info-container column-container">
        <span>{username}<span>  25/11 - 14:04</span></span>
        <p>{description}</p>
        </div>
        </div>
     );
}
 
export default ChatPost;