import React, { Component } from 'react';
import signIn from 'sign-in-with-burner';

import './App.css';

class SignInWithBurner extends Component{
  constructor(props) {
    super(props)

    this.state = {
      address: undefined
    }

    this.handleClick.bind(this);
  }

  handleClick() {
    signIn({
      burnerUrl: 'localhost:3000',
      siteName: 'Seven Twenty One'

    }).then(address => {
      this.setState({address})

    }).catch(e => {
      console.log("Error logging in with burner: ", e)

    });
  }

  signInButton() {
    return (
      <button id="sign-in" onclick="this.handleClick">
        Sign in with Burner
      </button>
    )
  }

  render() {
    return (this.state.address === undefined) ? this.signInButton() : this.state.address;
  }
}

export default SignInWithBurner;
