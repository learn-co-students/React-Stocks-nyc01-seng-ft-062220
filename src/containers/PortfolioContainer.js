import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

clickHandler = (event) => {
  
  this.props.deleteStock(event)
}

  render() {
    let renderPortfolio = this.props.portfolio.map((stockObj) => <Stock key={stockObj.id} stock={stockObj} clickHandler={this.clickHandler}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           renderPortfolio
          }
      </div>
    );
  }

}

export default PortfolioContainer;
