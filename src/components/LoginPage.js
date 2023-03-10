import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import LoginForm from './LoginForm';

import styles from "./LoginPage.module.css";
import fitnessImage from "../assets/fitness.jpeg";

const LoginPage = () => {
  const [googleLoginFailed, setGoogleLoginFailed] = useState(false);
  const history = useHistory();

  const handleLogin = (formData) => {
    // handle login logic here
    // if login is successful, redirect to DashboardPage
    history.push('/dashboard');
  };

  const handleGoogleLogin = (response) => {
    // handle Google login logic here
    console.log(response);
    // if login is successful, redirect to DashboardPage
    history.push('/dashboard');
  };
  
  const handleGoogleLoginFailure = (error) => {
    // handle Google login failure logic here
    // alert("Login Failed");
    console.log(error);
    // show error message to the user
    setGoogleLoginFailed(true);
  };

  return (
    
    <div className={styles.login_page}>
      <div className={styles.left_container}>
        <img src={fitnessImage} height='60%' width='40%' alt="Fitness" />
        <h1 className={styles.title}>My <span>GOALS</span></h1>
        <p className={styles.description}>An environement to help users track and monitor their physical activity, set fitness goals, and provide personalized workout routines and nutrition plans.</p>
      </div>
      <div className={styles.right_container}>
        <h1>Login to your Account</h1>
        <p>Start Your Fitness Journey</p>
        <LoginForm onSubmit={handleLogin} />
        <GoogleLogin
          clientId="674472313069-o322d2j1reb0p36gctag72uoth9du9m0.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default LoginPage;
