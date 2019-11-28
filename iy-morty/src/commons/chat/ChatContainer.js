import React from 'react';
import "./ChatContainer.scss"
import Chat from './chat/Chat';
import ChatInput from './input/ChatInput';
import {useMutation} from "@apollo/react-hooks"
import { SET_POST } from '../../mutations/index';
import { GET_POSTS } from '../../querys';
import {useQuery} from "@apollo/react-hooks"

const ChatContainer = () => {
    const [setPost] = useMutation(SET_POST)
    const {data, loading, error} = useQuery(GET_POSTS)


    return ( 
        <div className="chat-main-container column-container">
        {(()=>{
            if(loading) return "Loading.."
            if(error) return `Error: ${error.message}`
            return ( <Chat info={data}/>)
        })()}
        <ChatInput action={data=>setPost({variables:{input:data}})}/>
        </div>
     );
}
 
export default ChatContainer;