import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import SSRProvider from 'react-bootstrap/SSRProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(
  <StrictMode>
    <SSRProvider>
      <App />
    </SSRProvider>
  </StrictMode>
);