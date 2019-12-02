import React from 'react';
import "./ChatContainer.scss"
import Chat from './chat/Chat';
import ChatInput from './input/ChatInput';
import {useMutation} from "@apollo/react-hooks"
import { SET_POST } from '../../mutations/index';
import { GET_POSTS } from '../../querys';
import {useQuery} from "@apollo/react-hooks"
import {userContext} from "../../helpers/context"

const ChatContainer = () => {
    const [setPost] = useMutation(SET_POST)
    const {data, loading, error} = useQuery(GET_POSTS)


    return ( 
        <userContext.Consumer>

        {(userData)=>(
            <div className="chat-main-container column-container">
        {(()=>{
            if(loading) return "Loading.."
            if(error) return `Error: ${error.message}`
            return ( <Chat info={data} user={userData.user}/>)
        })()}
        
            <ChatInput action={values=>setPost({variables:{input:{...values, user:userData.user.id}}})}/>
        </div>
        )}
        </userContext.Consumer>
     );
}
 
export default ChatContainer;