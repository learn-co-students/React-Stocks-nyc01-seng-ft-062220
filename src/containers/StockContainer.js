import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  displayStocks =()=>{
   

    return this.props.stocks.map((stock) => <Stock  key ={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} stockObj={stock} addPortfolio={this.props.addPortfolio} />)
    
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.displayStocks()
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
