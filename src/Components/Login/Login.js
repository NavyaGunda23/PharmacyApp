import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  
      const navigate = useNavigate();

      const handleClick = () => {
        // 👇️ navigate programmatically
        navigate('../UserPage/UserPage');
      };

 

  // JSX code for login form
  const renderForm = (
   <div className="form">
      <form >
        <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         
        </div>
        <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         
        </div>
        <div >
         <button onClick={handleClick} className="btn">Submit</button>
        </div>
      </form>
   </div>
  );

  return (
   <div className="app">
      <div className="Login">
        <div className="title">Sign In</div>
        {renderForm}
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
      </div>
   </div>
  );
}

export default Login;