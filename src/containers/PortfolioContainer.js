import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


  displayPortfolio =()=>{
   

    return this.props.stocks.map((stock) => <Stock  key ={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} stockObj={stock} addPortfolio={this.props.addPortfolio} />)
    
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.displayPortfolio()
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
