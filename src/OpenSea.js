import React, { Component } from 'react';

import { OpenSeaPort, Network } from 'opensea-js';
import Web3 from 'web3';

import './App.css';

class OpenSea extends Component {
  constructor(props) {
    super(props);

    let provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')
    this.seaport = new OpenSeaPort(provider, {networkName: Network.Main})

    this.fetchAssets()

    this.state = {
      assets: []
    }
  }

  fetchAssets() {
    this.seaport.api.getAssets().then(response => {
      console.log('assets: ', response.assets);

      console.log('response.assets: ', response.assets);
      this.setState({assets: response.assets})
    })
  }

  renderAssets() {
    console.log("in renderassets")
    console.log('this.state: ', this.state);

    let assets = this.state.assets.filter(asset => asset.imageUrl).map(asset => this.renderAsset(asset))

    return (
      <div id="assets" className="pure-g">
        { assets }
      </div>
    )
  }

  renderAsset(asset) {
    console.log("in render asset")
    console.log('this.state: ', this.state);
    console.log('asset: ', asset);

    return (
      <div className="pure-u-1 pure-u-sm-1-3" key={asset.openseaLink}>
        <div className="card">
          <img src={asset.imageUrl} />
          <div className="container">
            <p>{asset.assetContract.name}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    console.log("in render")
    console.log('this.state: ', this.state);
    return  (
      <div>
        {this.renderAssets()}
      </div>
    )
  }
}

export default OpenSea;
