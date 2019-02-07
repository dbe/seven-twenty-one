import React, { Component } from 'react';

import { OpenSeaPort, Network } from 'opensea-js';
import Web3 from 'web3';

import './App.css';

class OpenSea extends Component {
  constructor(props) {
    super(props);

    let provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')
    this.seaport = new OpenSeaPort(provider, {networkName: Network.Main})


    this.state = {
      assets: [],
      showAll: true
    }
  }

  componentDidMount() {
    this.fetchAssets()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps: ', prevProps);
    console.log('this.state.showAll: ', this.state.showAll);
    if (prevProps.address !== this.props.address || prevState.showAll !== this.state.showAll) {
      console.log("About to fetch")
      this.fetchAssets();
    }
  }

  handleToggle() {
    this.setState({
      showAll: !this.state.showAll
    })
  }

  fetchAssets() {
    let owner = this.state.showAll ? undefined : this.props.address;

    this.seaport.api.getAssets({
      owner: owner
    }).then(response => {
      this.setState({assets: response.assets})
    })
  }

  renderAssets() {
    let assets = this.state.assets.filter(asset => asset.imageUrl).map(asset => this.renderAsset(asset))

    return (
      <div className="pure-g">
        {assets.length === 0 ? <p className="pure-u-1">No ERC-721s :(</p> : assets}
      </div>
    )
  }

  renderAsset(asset) {
    return (
      <div className="pure-u-1 pure-u-md-1-3" key={asset.openseaLink}>
          <div className="card">
            <a href={asset.openseaLink}>
              <img src={asset.imageUrl} />
              <div className="container">
                <p>{asset.assetContract.name}</p>
              </div>
            </a>
          </div>
        </div>
    )
  }

  render() {
    return  (
      <div id="assets" >
        <div className="pure-g">
          <p className="filter pure-u-1">{this.state.showAll ? "All ERC-721s" : "Only yours"}</p>
          <button className={"pure-button toggle " + (this.props.address === undefined ? 'pure-button-disabled' : '')} onClick={this.handleToggle.bind(this)} >{this.state.showAll ? "Show mine" : "Show all"}</button>
        </div>
        {this.renderAssets()}
      </div>
    )
  }
}

export default OpenSea;
