import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App" >
          
          <Router>
              <Landing/>        
          </Router>
       
    </div>
  );
}

export default App;
