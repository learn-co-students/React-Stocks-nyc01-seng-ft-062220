import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  stockList = () => {

    return  this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} clickHandler={this.props.clickHandler}/>)
  }


  render() {
    //console.log(this.props.clickHandler)
    return (
      <div>
        <h2>Stocks</h2>
        {this.stockList()}
      </div>
    );
  }

}

export default StockContainer;
