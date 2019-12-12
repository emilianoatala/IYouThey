import React from 'react'
import "./Menu.scss"
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { LOGOUT_USER } from '../../../mutations';
import { useMutation } from '@apollo/react-hooks';
import HomeIcon from '@material-ui/icons/Home';
const Menu = ({refetch, userdata}) => {
    const [logout] = useMutation(LOGOUT_USER)
    return ( 
        <div className="menu-container column-container">
            <ul className="column-container center">
             <li className="selected column-container center"><HomeIcon/></li>
            </ul>
            <PowerSettingsNewIcon onClick={async ()=> {
                localStorage.removeItem("token")
                await logout({variables:{id:userdata.id}})
                refetch()  
            }}/>
        </div>
     );
}
 
export default Menu;