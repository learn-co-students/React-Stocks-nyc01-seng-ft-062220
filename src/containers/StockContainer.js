import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    let renderStock = this.props.stockArray.map((stockObj) => <Stock key={stockObj.id} stock={stockObj} clickHandler={this.props.clickHandler} />)
    return (
      <div>
        <h2>Stocks</h2>
        {
          renderStock
        }
      </div>
    );
  }

}

export default StockContainer;
