import React from 'react';
import './App.css';
import Login from './auth/Login';
import Signup from './auth/Signup';
import 'typeface-indie-flower';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home/HomePage';


function App() {
  
  return (
    <div className="App">
<Router>
  <Route exact path= "/signup" component={Signup}/>
  <Route exact path= "/login" component={Login}/>
  <Route exact path= "/home" component={Home}/>
  {/* <Route exact path= "/uploadpage" component={UploadPage}/> */}
</Router>
    </div>
  );
}

export default App;
