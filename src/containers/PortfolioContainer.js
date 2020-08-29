import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderMyPortfolio = () => {
    return this.props.myPortfolio.map(stock => <Stock key={stock.key} stock={stock} myPortfolioClickHandler={this.props.myPortfolioClickHandler}/>)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          { this.renderMyPortfolio() }
      </div>
    );
  }

}

export default PortfolioContainer;
