import React from 'react';
import './App.css';

import signIn from 'sign-in-with-burner';

const SignInWithBurner = (props) => {
  return (
    <button class = "pure-button" id="sign-in" onClick={() => handleClick(props.updateAddress)}>
      Sign in with Burner
    </button>
  );
}

function handleClick(updateAddress) {
  signIn({
    burnerUrl: 'https://xdai.io/login',
    siteName: 'Seven Twenty One'

  }).then(address => {
    updateAddress(address);

  }).catch(e => {
    console.log("Error logging in with burner: ", e)

  });
}

export default SignInWithBurner;
