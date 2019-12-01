import React from 'react'
import "./AccountMenu.scss"
import AccountButton from '../accountButton/AccountButton';


const AccountMenu = (props) => {
    const {array, username, lastname, refetch}=props
    return ( 
        <div className="account-menu-container">
            <div className="information-container row-container">
            <AccountButton username={username}/>
            <p>{username} <br/> {lastname}</p>
            </div>
            <ul className="column-container">
            {array && array.map(item=> (<li>{item}</li>))}
                <li className="logout" onClick={()=> {
                    localStorage.removeItem("token")
                        refetch()
                    
                }}>Logout</li>
            </ul>
        </div>
     );
}
 
export default AccountMenu;