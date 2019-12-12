import React, {useState} from 'react';
import "./ChatPost.scss"
import moment from "moment"

const ChatPost = ({username, description, createdAt, id, user}) => {
    const [current] = useState(user&&id === user.id ? true : false)
 
    return ( 
        
        <div className={"chat-post-container row-container" +  (current ? " current" : "")}   >
        <div className={"info-container column-container" +  (current ? " current" : "")}>
        <span>{username}<span> {moment(createdAt).format("DD/MM, h:mm")}</span></span>
        <p>{description}</p>
        </div>
        </div>
     );
}
 
export default ChatPost;