import React, {useState} from 'react'
import {useMutation} from "@apollo/react-hooks"
import { CREATE_USER, LOGIN_USER } from '../../../mutations'

const SignupForm = (props) => {
    const [validateUser]=useMutation(LOGIN_USER, {onCompleted:()=>window.location.href="localhost:3000/dashboard"})
    const [createUser]=useMutation(CREATE_USER)
    const [body, setBody]=useState({
        name:"",
        lastname:"",
        email:"",
        password:""})

    const changeData=(field, value)=>{
        let newBody ={...body}
        newBody[field]=value
        setBody(newBody)
    }

    return ( 
        <form className="column-container" onSubmit={(e)=>{
            e.preventDefault();
            createUser({variables:{input:body}}).then(response=>{
                validateUser({variables:{input:response.data.createUser}}).then(async response=>{
                    localStorage.setItem("token", response.data.validateUser.token)
                    await props.refetch()
                })
                
            })
        }}>
            <label>Name</label>
            <input value={body.name} className="form-item" type="text"  required onChange={e=> changeData("name", e.target.value)}/>
            <label>Lastname</label>
            <input value={body.lastname} className="form-item" type="text"  required onChange={e=> changeData("lastname", e.target.value)}/>
            <label>Email</label>
            <input value={body.email} className="form-item" type="email"  required onChange={e=> changeData("email", e.target.value)}/>
            <label>Password</label>
            <input value={body.password} className="form-item" type="password"  required onChange={e=> changeData("password", e.target.value)}/>
            <button className="btn-generic" type="submit">Sign up</button> 
        </form>
     );
}
 
export default SignupForm ;