import React,{useState, useEffect} from 'react';
import './UserLoggedBox.scss'
import UserCard from '../userCard/UserCard';
import { useSubscription} from "@apollo/react-hooks"
import { USER_LOGGED, USER_DISCONNECTED } from '../../../subscription';

const UserLoggedBox = ({array}) => {
    const [users, setUsers]= useState(array)
    const logged = useSubscription(USER_LOGGED)
    const disconnected = useSubscription(USER_DISCONNECTED)
    
    useEffect(()=>{
        if (logged.data !== undefined ){
            let newUsers= [...users]
            newUsers.push({user:logged.data.userLogged})
            setUsers(newUsers)
        }
    },[logged.data] )
   
    useEffect(()=>{
        if (disconnected.data  !== undefined){
            let newUsers= users.filter(item=>item.user.id !== disconnected.data.userDisconnected.id)
            setUsers(newUsers)
        }
    },[disconnected.data] )

    return ( 
        <div className="user-logged-box-container column-container">
            <div className="cards-container column-container">
            {users !=="" && users.map(item => <UserCard key={item.user.id} data={item.user}/>)}
            </div>
        </div>
     );
}
 
export default UserLoggedBox;