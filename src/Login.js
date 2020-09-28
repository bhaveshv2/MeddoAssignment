import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const Login = () =>{
    const {loginWithRedirect,isAuthenticated} = useAuth0();
    return(
       !isAuthenticated && (
        <div className="login-btn">
            <h1>Login with Auth0</h1>
            <button onClick={()=>loginWithRedirect()}>
                Login
            </button>
        </div>
       )
    )
}

export default Login;