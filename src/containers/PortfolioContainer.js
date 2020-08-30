import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  portfolioStockCreator = () => {
    return this.props.portfolioArray.map(stockObj => <Stock clicked={true} clickHandler={this.props.clickHandler} key={stockObj.id} stockObject={stockObj} />)
  }

  render() {
    //console.log("in portfolio:", this.props.portfolioArray)
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.portfolioStockCreator()}
      </div>
    );
  }

}

export default PortfolioContainer;
