import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App';

// BOOTSTRAP STYLING
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context';
import {MessageProviderWrapper} from './context/userMessage.context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <MessageProviderWrapper>
      <AuthProviderWrapper>
       <App />
       </AuthProviderWrapper>
    </MessageProviderWrapper>
  </Router>
);


