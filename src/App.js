import React, { useState, useEffect } from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import 'typeface-indie-flower';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/HomePage';


function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  return (
    <div className="App">
      <Router>
        <Route exact path="/" return={() => (<Login updateToken={updateToken} />)} />
        <Route exact path="/signup" return={() => (<Signup updateToken={updateToken}/>)} />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
