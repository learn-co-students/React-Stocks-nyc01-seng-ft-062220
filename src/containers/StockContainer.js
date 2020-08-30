import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        {
          this.props.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
