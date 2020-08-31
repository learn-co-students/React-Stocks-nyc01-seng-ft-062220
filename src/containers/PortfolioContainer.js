import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderMyStock=()=>this.props.myPortfolio.map((stock)=> <Stock key={stock.id} stock={stock} clickHandler={this.props.portfolioClickHandler}/>)

  
  render() {

    return (
      <div>
        <h2>My Portfolio</h2>

          {
            this.renderMyStock()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
