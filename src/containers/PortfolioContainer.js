import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  
  render() {

    console.log(this.props.myStocks())

    // console.log(this.props)
    let stocks =() =>this.props.myStocks().map((stock)=> <Stock key={stock.id} stock={stock} renderMyStocks={this.renderMyStocks}/>)

    
    return (
      <div>
        <h2>My Portfolio</h2>

          {
            stocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
