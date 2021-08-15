import React, {useState, useEffect} from "react";
import fire from './firebase';
import './App.css';

import Links from "./components/Links";

import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Page from './components/Home/Home.jsx';



function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');

  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch( err =>{

        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;

        }
    });
  };

  const handleSingup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch( err =>{

      switch(err.code){
        case "auth/-email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
  });
};

const handleLogout = () => {
   fire.auth().signOut();
};

const authListener = () => {
  fire.auth().onAuthStateChanged(user => {
    if(user){
      clearInputs();
      setUser(user);
    } else {
      setUser("")
    }
  });
};

 useEffect(() => {
    authListener();
 }, [])

  return (
    <>
    {user ? (
        <>
        <Header/>
        <Links handleLogout={handleLogout}/>
        <Footer/>
        </>
      ):(
        <>
        <Header/>
        <Page
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSingup={handleSingup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />
        <Footer/>
        </>
      )}
      </>
  );
};

export default App;