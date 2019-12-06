import React from 'react';
import './UserLoggedBox.scss'
import UserCard from '../userCard/UserCard';
import { USER_LOGGED } from '../../../subscription';

const UserLoggedBox = ({array}) => {
    const [users, setUsers]= useState([])
    const logged = useSubscription(USER_LOGGED)
    const disconnected = useSubscription(USER_DISCONNECTED)
    const {data, loading, error} = useQuery(GET_USER_LOGGED)
    

    useEffect(()=>{
        setUsers(array)
    },[] )
    

    useEffect(()=>{
        let newUsers={...users}
        newUsers.push()
        setUsers(newUsers)
    },[logged] )

    useEffect(()=>{

    },[disconnected] )

    return ( 
        <div className="user-logged-box-container column-container">
            <h3>Users in the Room</h3>
            <div className="cards-container column-container">
                <UserCard data={{name:"Emiliano Atala"}}/>
            </div>
        </div>
     );
}
 
export default UserLoggedBox;