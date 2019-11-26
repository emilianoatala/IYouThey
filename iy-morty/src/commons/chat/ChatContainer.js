import React from 'react';
import "./ChatContainer.scss"
import Chat from './chat/Chat';
import ChatInput from './input/ChatInput';
const ChatContainer = () => {
    return ( 
        <div className="chat-main-container column-container">
        <Chat/>
        <ChatInput/>
        </div>
     );
}
 
export default ChatContainer;