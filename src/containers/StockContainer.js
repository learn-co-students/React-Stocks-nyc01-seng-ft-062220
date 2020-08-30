import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  stockRender = () => {
    
    return this.props.stocks.map(stock => <Stock stockObj={stock} key={stock.id} clickHandler={this.props.clickHandler} />)
  }


  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.stockRender()
        }
      </div>
    );
  }

}

export default StockContainer;
