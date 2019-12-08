import React,{lazy} from 'react';
import "./ChatContainer.scss"
import {useMutation} from "@apollo/react-hooks"
import { SET_POST } from '../../mutations/index';
import {userContext} from "../../helpers/context"
const ChatInput = lazy(() => import('./input/ChatInput'));
const Chat = lazy(() => import('./chat/Chat'));


const ChatContainer = ({data}) => {
    const [setPost] = useMutation(SET_POST)
    return ( 
        <userContext.Consumer>
        {(userData)=>(
            <div className="chat-main-container column-container">
                <Chat info={data} user={userData.user}/>
                <ChatInput action={values=>setPost({variables:{input:{...values, user:userData.user.id}}})}/>
            </div>
        )}
        </userContext.Consumer>
     );
}
 
export default ChatContainer;