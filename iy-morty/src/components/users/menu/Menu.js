import React from 'react'
import { MENU_LIST } from '../../../helpers/constants';
import "./Menu.scss"
const Menu = () => {
    return ( 
        <div className="menu-container">
            <ul>
            {MENU_LIST.map(item => <li>{item.description}</li>)}
            </ul>
        </div>
     );
}
 
export default Menu;