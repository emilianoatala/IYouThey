import React from 'react';
import AccountButton from '../../../commons/accountButton/AccountButton'
import './UserCard.scss';

const UserCard = ({data}) => {
    return ( 
        <div className="user-card-container row-container">
            <AccountButton username={data.name}/>
            <p>{data.name}</p>
        </div>
     );
}
 
export default UserCard;