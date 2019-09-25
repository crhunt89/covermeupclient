import React, { useState, useEffect } from 'react';
import './App.css';
import 'typeface-indie-flower';
import Auth from './components/auth/Auth'
import Home from './components/home/HomePage';
import Navigation from './components/navbar/Navbar';



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
      {/* <Router>
        <Route exact path="/" return={() => (<Login updateToken={updateToken} />)}/>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" return={() => (<Signup updateToken={updateToken}/>)}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/home" return={() => (<Home clickLogout={clearToken}/>)}/>
        <Route exact path="/home" component={Home} />
      </Router> */}
    </div>
  );
}

export default App;
