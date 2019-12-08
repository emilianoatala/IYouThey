import React, {useState} from 'react';
import "./ChatInput.scss";
import CreateIcon from '@material-ui/icons/Create';
import SendIcon from '@material-ui/icons/Send';

const ChatInput = ({action}) => {
    const [value, setValue]= useState('');

const send =()=>{
    action({description:value})
    setValue('')
}

    return ( 
        <div className="chat-input-container row-container center">
            <div className="input-outline row-container" >
            <label className="row-container center" htmlFor="input"><CreateIcon/>-</label>
                <input value={value}
                id="input"
                placeholder="Write something"
                type="text"
                onChange={e => setValue(e.target.value)}
                onKeyPress={e=>{
                    if(e.key==="Enter" && value!=="") {
                        send()
                    }
                    return
                }}/>
                <SendIcon onClick={()=>{
                    if (value!==""){
                        send()
                    }
                }}/>
            </div>
        </div>
     );
}
 
export default ChatInput;