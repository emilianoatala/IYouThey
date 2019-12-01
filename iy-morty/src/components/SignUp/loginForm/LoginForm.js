import React,{useState} from 'react'
import {useMutation} from "@apollo/react-hooks"
import { LOGIN_USER } from '../../../mutations'

const LoginForm = props => {
    const [validateUser]=useMutation(LOGIN_USER)
    const [body, setBody]=useState({email:"", password:""})

    const changeData=(field, value)=>{
        let newBody ={...body}
        newBody[field]=value
        setBody(newBody)
    }

    return ( 
        <form className="column-container" onSubmit={(e)=>{
            e.preventDefault();
            validateUser({variables:{input:body}}).then(async response=>{
                localStorage.setItem("user", JSON.stringify(response.data.validateUser))
                await props.refetch()
            })
        }}>
            <label>Email</label>
            <input value={body.email} className="form-item" type="email"  required onChange={e => changeData("email", e.target.value)}/>
            <label>Password</label>
            <input value={body.password} className="form-item" type="password"  required onChange={e=> changeData("password", e.target.value)}/>
            <button className="btn-generic" type="submit">Login</button> 
        </form>
     );
}
 
export default LoginForm;