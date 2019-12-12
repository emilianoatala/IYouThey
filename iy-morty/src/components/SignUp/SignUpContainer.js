import React from 'react'
import FormContainer from './formContainer/FormContainer'
import { Redirect } from "react-router-dom";
import { ROUTES } from '../../helpers/routes';
import "./SignUpContainer.scss"

const SignUpContainer = props => {

    if(props.session)  return (<Redirect to={ROUTES.Dashboard}/>)

    
    return ( 
        <div className="signup-container column-container center">
            <FormContainer refetch={props.refetch}/>
        </div> 
        );
}
 
export default SignUpContainer;