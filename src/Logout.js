import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () =>{
    const {logout,isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
            <div className="login-btn">
                <h1>DashBoard</h1>
                <button onClick={()=>logout()}>
                    LogOut
                </button>
            </div>
        )
    )
}

export default Logout;