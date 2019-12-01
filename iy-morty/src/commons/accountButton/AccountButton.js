import React from 'react';
import "./AccountButton.scss"
const AccountButton = ({username}) => {
    return ( 
        <div className="account-button-container row-container center">
         <span>{username.substr(1,1)}</span>
        </div>
     );
}
 
export default AccountButton;