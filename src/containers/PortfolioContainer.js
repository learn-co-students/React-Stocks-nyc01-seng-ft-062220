import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


  clickHandler = (event) => {
    let removeStock = this.props.portfolio.find(stock => stock.id === parseInt(event.target.id))
    this.props.removedStock(removeStock)
  }

  portfolioList = () => {

    return  this.props.portfolio.map(stock => <Stock key={stock.id} stock={stock} clickHandler={this.clickHandler}/>)
  }

  


  render() {
    
   
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.portfolioList()} 
      </div>
    );
  }

}

export default PortfolioContainer;
