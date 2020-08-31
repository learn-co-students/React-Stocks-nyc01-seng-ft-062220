import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  render() {
    let stock = this.props.data.data.stocks.map(stockObj => <Stock stock={stockObj} clickOnStock={this.props.clickOnStock} sellStock={this.sellStock} />)
    return (
      <div>
        <h2>Stocks</h2>
        {
         stock
        }
      </div>
    );
  }

}

export default StockContainer;
