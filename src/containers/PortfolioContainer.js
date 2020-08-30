import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  portRender = () => {
    
    return this.props.portfolio.map(stock => <Stock stockObj={stock} key={stock.id} clickHandler={this.props.delHandler}/>)
  }


  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.portRender()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
