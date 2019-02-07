import Blockies from 'react-blockies';
import React, { Component } from 'react';
import SignInWithBurner from './SignInWithBurner';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: undefined
    }
  }

  renderSignInButton() {
    let signInButton;

    if(this.state.address === undefined) {
      signInButton = <SignInWithBurner updateAddress={address => this.setState({address}) }/>;
    }

    return signInButton
  }


  renderBlocky() {
    let blocky;

    if(this.state.address !== undefined) {
      blocky = <Blockies seed={this.state.address}/>
    }

    return blocky;
  }

  render() {
    return (
      <div className="App">
        <h1>Seven Twenty One</h1>
        {this.renderSignInButton()}
        {this.renderBlocky()}
      </div>
    );
  }
}

export default App;
