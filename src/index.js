import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
import {AUTH0_DOMAIN,AUTH0_CLIENT_ID} from './config';

const domain = AUTH0_DOMAIN;
const clientId = AUTH0_CLIENT_ID;


ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);


