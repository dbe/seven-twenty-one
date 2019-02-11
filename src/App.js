import Blockies from 'react-blockies';
import React, { Component } from 'react';

import OpenSea from './OpenSea';
import SignInWithBurner from './SignInWithBurner';
import TokenForm from './TokenForm';

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

    return (
      <div>
        <p>{this.state.address}</p>
        { blocky }
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Seven Twenty One</h1>
          {this.renderSignInButton()}
          {this.renderBlocky()}
        </div>
        <div>
          <TokenForm />
        </div>
        <div className="content">
          <OpenSea address={this.state.address}/>
        </div>
      </div>
    );
  }
}

export default App;
