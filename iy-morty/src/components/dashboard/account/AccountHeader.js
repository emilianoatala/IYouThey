import React,{useState} from 'react';
import "./AccountHeader.scss"
import { userContext } from '../../../helpers/context';
import AccountMenu from '../../../commons/accountMenu/AccountMenu';

const AccountHeader = () => {
    const [showMenu, setShowMenu] = useState(false)
    return ( 
        <userContext.Consumer>
        {(data)=>(
            <div className="account-header-container row-container">
                <div className="action-menu">
                <p onClick={()=>setShowMenu(showMenu=>showMenu=!showMenu)}>. . .</p>
                </div>
                {showMenu && data.user && <AccountMenu username={data.user.name} lastname={data.user.lastname} refetch={data.refetch}/>}
            </div>
        )}     
        </userContext.Consumer>
     );
}
 
export default AccountHeader;