import React, { useState, useEffect } from 'react';
import './App.css';
import 'typeface-indie-flower';
import Auth from './components/auth/Auth'
import Home from './components/home/HomePage';
import Navigation from './components/navbar/Navbar';
import Featured from './components/featured/Featured';
import Voting from './components/voting/Voting';
import Past from './components/past/Past';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  const [sessionToken, setSessionToken] = useState('');
  // const [token, setToken] = useState(undefined)
  
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
  // let storedSessionToken= (token) => {
  //   setToken(token)
  // }
  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken}/> : <Auth updateToken={updateToken}/>)
  }

  return (
    <div className="App">
      <Navigation clickLogout={clearToken}/>
      {protectedViews()}
      <Router>
        <Switch>
          <Route exact path="/voting" component={Voting} />
          <Route exact path="/featured" component={Featured} />
          <Route exact path="/past" component={Past} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
