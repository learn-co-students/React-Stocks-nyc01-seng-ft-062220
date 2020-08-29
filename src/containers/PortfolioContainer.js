import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  mapPortfolio = () => {
    return (
      this.props.portfolio.map(stock => {
        return (
          <Stock key={stock.id} stockClickHandler={this.props.stockClickHandler} stock={stock} />
        )
      })
    )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.mapPortfolio()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
