import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Register from './pages/Register';
import Home from "./pages/Home";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        
        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);
