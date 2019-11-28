import React, {useState, useEffect} from 'react';
import "./Chat.scss"
import ChatPost from '../post/ChatPost';
import { useSubscription} from "@apollo/react-hooks"
import { SUBCRIBE_POST } from '../../../subscription';

const Chat = ({info}) => {
    const [post, setPosts]= useState({})
    const { data} = useSubscription(
        SUBCRIBE_POST)

    useEffect(()=>{
       info&& setPosts(info)
    }, [])
    console.log(data)

    return ( 
        <div className="chat">
         {post.getAllPosts&&post.getAllPosts.map(item=> <ChatPost username="Emiliano" description={item.description} createdAt={item.createdAt}/>)} 
        </div>
     );
}
 
export default Chat;

