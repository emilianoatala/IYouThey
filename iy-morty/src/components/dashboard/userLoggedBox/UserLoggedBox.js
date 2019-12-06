import React from 'react';
import './UserLoggedBox.scss'
import UserCard from '../userCard/UserCard';

const UserLoggedBox = () => {
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