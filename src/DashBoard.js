import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const DashBoard = () =>{
    const {user,isAuthenticated} = useAuth0();
    console.log(user);
    return(
        isAuthenticated && (
            <div>
                <h1>Hello! {user.nickname}</h1>
                <img src={user.picture} alt={user.name} />
            </div>
        )
    )
}

export default DashBoard;