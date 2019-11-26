import React from 'react';
import AccountButton from '../../../commons/accountButton/AccountButton';
import "./AccountHeader.scss"
const AccountHeader = () => {
    return ( 
        <div className="account-header-container row-container">
            <AccountButton/>
        </div>
     );
}
 
export default AccountHeader;