import React, {useState, useEffect} from 'react';
import "./Chat.scss"
import ChatPost from '../post/ChatPost';
import { useSubscription} from "@apollo/react-hooks"
import { SUBCRIBE_POST } from '../../../subscription';

const messagesEndRef = React.createRef()

const Chat = ({info}) => {
    const [post, setPosts]= useState({})
    const { data} = useSubscription(
        SUBCRIBE_POST)

    const scrollToBottom = () => {
        let scroll = messagesEndRef.current && messagesEndRef.current.scrollHeight + 3000
        messagesEndRef.current.scrollTo(0,scroll)
      }

    useEffect(()=>{
       setPosts(info)
    }, [info])
    

    useEffect(()=>{
        if(data&&data.newPost!=={}){
        const newData = {...post}
        newData.getAllPosts.push(data.newPost)
        setPosts(newData)
        }
    },[data])

    
    useEffect(scrollToBottom,[post])

    return ( 
        <div className="chat" ref={messagesEndRef}>
         {post.getAllPosts&&post.getAllPosts.map(item=> <ChatPost username="Emiliano" description={item.description} createdAt={item.createdAt}/>)} 
        </div>
     );
}
 
export default Chat;

