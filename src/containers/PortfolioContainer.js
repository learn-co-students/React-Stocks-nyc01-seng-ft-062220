import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


  render() {
    let stock = this.props.data.data.portStocks.map(stockObj => <Stock stock={stockObj} sellStock={this.props.sellStock}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            stock
          }
      </div>
    );
  }

}

export default PortfolioContainer;
