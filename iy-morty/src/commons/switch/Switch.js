import React, {useEffect, useState} from 'react'
import "./Switch.scss"

const Switch = ({menu, action}) => {
    const [position, setPosition]=useState(0)

    useEffect(()=>{
        action(position)
    }, [position])
    
    return ( 
        <div className="switch-container row-container">
            {menu.map((item, index)=>( 
                <div key={index} className={position===index ? "active":"inactive"} onClick={()=>setPosition(index)}>{item}</div>
            ))}
        </div>
     );
}
 
export default Switch;