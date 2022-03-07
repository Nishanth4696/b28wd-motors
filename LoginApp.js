import { useState } from 'react';
import React from "react";
import Button from '@mui/material/Button';
import App from '../b28wd-pettycash/src/App';
import { useHistory } from 'react-router-dom';

export function LoginApp() {
  const history = useHistory();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin",
      password: "admin"
    },
   
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) => name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text"  value="admin" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password"  value="admin" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <Button  variant="outlined" type='submit' onClick={() => history.push('./home')} >Submit</Button>
        </div>
      </form>
    </div>
  );

 
  return (
    
    <div className="app">
      
        <div className="login-form">
          
          {isSubmitted ? <App /> : renderForm}
         
          
        </div>

       
      
    </div>
    
  );
}

