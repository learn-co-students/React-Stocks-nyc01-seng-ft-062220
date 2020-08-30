import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  createStocks = () => {
    return this.props.stockArray.map(stockObj => <Stock clicked={false} key={stockObj.id} clickHandler={this.props.clickHandler} stockObject={stockObj} />)
  }

  render() {
    //console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {this.createStocks()}
      </div>
    );
  }

}

export default StockContainer;
