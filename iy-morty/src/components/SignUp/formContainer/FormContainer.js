import React, {useState} from 'react'
import Switch from '../../../commons/switch/Switch'
import SignupForm from '../signupForm/SignupForm'
import "./FormContainer.scss"
import LoginForm from '../loginForm/LoginForm'

const FormContainer = ({refetch}) => {
    const [position, setPosition]=useState(0)
    return ( 
        <div className="form-container column-container">
        <Switch action={(position)=>setPosition(position)} menu={["Sign Up", "Login"]}/>
        {position === 0 && <SignupForm  refetch={refetch}/>}
        {position === 1 && <LoginForm  refetch={refetch}/>}
        </div>
     );
}
 
export default FormContainer;