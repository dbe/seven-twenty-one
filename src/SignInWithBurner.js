import React, { Component } from 'react';
import './App.css';

import signIn from 'sign-in-with-burner';

class SignInWithBurner extends Component{
  constructor(props) {
    super(props)

    this.state = {
      address: undefined
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    signIn({
      burnerUrl: 'http://localhost:3001',
      siteName: 'Seven Twenty One'

    }).then(address => {
      console.log('this: ', this);
      this.setState({address})

    }).catch(e => {
      console.log("Error logging in with burner: ", e)

    });
  }

  signInButton() {
    return (
      <button id="sign-in" onClick={this.handleClick}>
        Sign in with Burner
      </button>
    )
  }

  render() {
    return (this.state.address === undefined) ? this.signInButton() : this.state.address;
  }
}

export default SignInWithBurner;
