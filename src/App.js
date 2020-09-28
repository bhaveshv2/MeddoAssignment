import React from 'react';
import DashBoard from './DashBoard';
import Login from './Login';
import Logout from './Logout';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();
  if(isLoading){
    return <div>Loading... </div>
  }

  return (
    <div className="App">
        <Login/>
        <Logout/>
        <DashBoard/>
    </div>
  );
}

export default App;
