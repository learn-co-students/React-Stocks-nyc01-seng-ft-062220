import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {




  render() {
    return (
      <div>
        <SearchBar data={this.props} clickHandler={this.props.clickHandler} listAlpha={this.props.listAlpha} listPrice={this.props.listPrice} filterStocks={this.props.filterStocks}/>
          <div className="row">
            <div className="col-8">
              <StockContainer clickOnStock={this.props.clickOnStock} data={this.props}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.props.sellStock} data={this.props}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
