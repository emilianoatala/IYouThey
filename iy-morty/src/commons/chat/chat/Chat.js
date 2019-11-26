import React from 'react';
import "./Chat.scss"
import ChatPost from '../post/ChatPost';

const Chat = () => {
    return ( 
        <div className="chat">
            <ChatPost username="Emiliano" description="Mandale gas a este chat"/>
            <ChatPost username="Emiliano" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo voluptate rem et repudiandae eligendi quo tenetur sequi aspernatur ad ipsam."/>
        </div>
     );
}
 
export default Chat;

