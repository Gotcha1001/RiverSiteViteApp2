import React from 'react';
import { createRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics'; // Import the inject function

import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css';

inject(); // Inject the Vercel Analytics script

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
