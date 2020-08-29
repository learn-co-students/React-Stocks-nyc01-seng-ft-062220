import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  mapStocks = () => {
    return (
      this.props.stocks.map(stock => {
        return (
          <Stock key={stock.id} stock={stock} stockClickHandler={this.props.stockClickHandler}/>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.mapStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
