import React from 'react';
import "./ChatContainer.scss"
import Chat from './chat/Chat';
import ChatInput from './input/ChatInput';
import {useMutation} from "@apollo/react-hooks"
import { SET_POST } from '../../mutations/index';

const ChatContainer = () => {
    const [setPost] = useMutation(SET_POST)
    return ( 
        <div className="chat-main-container column-container">
        <Chat/>
        <ChatInput action={data=>setPost({variables:{input:data}})}/>
        </div>
     );
}
 
export default ChatContainer;