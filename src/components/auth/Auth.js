import React from 'react';
import Login from './Login';
import Signup from './Signup'

const Auth = (props) => {
  return(
    <div> 
    {<Login updateToken={props.updateToken}/>}
    {<Signup updateToken={props.updateToken}/>}
     </div>
     );
}

export default Auth;