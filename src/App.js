import React, { useState, useEffect } from 'react';
import './App.css';
import 'typeface-indie-flower';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/home/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';


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
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div className="App">
      <Router>
        <Route exact path="/" return={() => (<Login updateToken={updateToken} />)}/>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" return={() => (<Signup updateToken={updateToken}/>)}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/home" return={() => (<Home clickLogout={clearToken}/>)}/>
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
