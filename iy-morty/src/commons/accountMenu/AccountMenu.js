import React from 'react'
import "./AccountMenu.scss"
import AccountButton from '../accountButton/AccountButton';
import { LOGOUT_USER } from '../../mutations';
import { useMutation } from '@apollo/react-hooks';
import { userContext } from '../../helpers/context';


const AccountMenu = (props) => {
    const {array, username, lastname, refetch}=props
    const [logout] = useMutation(LOGOUT_USER)
    return ( 
        <div className="account-menu-container">
            <div className="information-container row-container">
            <AccountButton username={username}/>
            <p>{username} <br/> {lastname}</p>
            </div>
            <userContext.Consumer>
                {userdata=>{
                    console.log(userdata.user)
                    return (
                    <ul className="column-container">
                    {array && array.map(item=> (<li>{item}</li>))}
                        <li className="logout" onClick={async ()=> {
                            localStorage.removeItem("token")
                            await logout({variables:{id:userdata.user.id}})
                            refetch()  
                        }}>Logout</li>
                    </ul>
                )}}
            </userContext.Consumer>
           
        </div>
     );
}
 
export default AccountMenu;