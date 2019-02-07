import React, { Component } from 'react';

import './App.css';

class OpenSea extends Component {
  constructor(props) {
    super(props);
  }

  assets(address) {
    const url = "https://api.opensea.io/api/v1/assets?owner=0x0239769a1adf4def9f07da824b80b9c4fcb59593&order_by=current_price&order_direction=asc"

    const fetchOpts = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }


    fetch(url, fetchOpts).then(data => {
      console.log('data: ', data);
    })


    return (
      <ul>
        <li><p>hi</p></li>
        <li><p>there</p></li>
        <li><p>yo</p></li>
        <li><p>{address}</p></li>
      </ul>
    )
  }

  render() {
    return  (
      <div>
        {this.assets(this.props.address)}
      </div>
    )
  }
}

export default OpenSea;
