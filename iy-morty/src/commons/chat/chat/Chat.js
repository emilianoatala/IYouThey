import React, {useState, useEffect} from 'react';
import "./Chat.scss"
import ChatPost from '../post/ChatPost';
import { useSubscription} from "@apollo/react-hooks"
import { SUBCRIBE_POST } from '../../../subscription';

const messagesEndRef = React.createRef()

const Chat = ({info, user}) => {
    const [post, setPosts]= useState([])
    const { data } = useSubscription(SUBCRIBE_POST)

    const scrollToBottom = () => {
        let scroll = messagesEndRef.current && messagesEndRef.current.scrollHeight + 3000
        messagesEndRef.current.scrollTo(0,scroll)
      }

    useEffect(()=>{
       setPosts(info)
    }, [info])
    

    useEffect(()=>{
        if(data&&data.newPost!=={}){  
        const newData = [...post]
        newData.push(data.newPost)
        setPosts(newData)
        }
    },[data])

    
    useEffect(scrollToBottom,[post])

    return ( 
        <div className="chat" ref={messagesEndRef}>
         {post && post.map(item=> <ChatPost username={item.user&&item.user.name} description={item.description} createdAt={item.createdAt} user={user} id={item.user&&item.user.id}/>)} 
        </div>
     );
}
 
export default Chat;

