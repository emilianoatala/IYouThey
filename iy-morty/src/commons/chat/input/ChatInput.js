import React, {useState} from 'react';
import "./ChatInput.scss";

const ChatInput = ({action}) => {
    const [value, setValue]= useState('');
    return ( 
        <div className="chat-input-container row-container">
        <input value={value}
        placeholder="Write something"
        type="text"
        onChange={e => setValue(e.target.value)}
        onKeyPress={e=>{
            if(e.key==="Enter") {
                action({description:value})
                setValue('')
            }
            return
        }}/>
        </div>
     );
}
 
export default ChatInput;