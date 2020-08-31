import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(response => response.json())
    .then(data=> {
      this.setState({
        stocks: data
      })
    })
  }

  clickHandler = (event) => {
    let portfolioStock = this.state.stocks.find(stock => stock.id === parseInt(event.target.id))
    console.log("FLAG INSIDE CLICK:", portfolioStock)
    this.setState({portfolio: [...this.state.portfolio, portfolioStock]}) 
  }

  removedStock = (stockObj) => {
    
  }

  

  render() {
   //console.log(this.state.portfolio)
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} clickHandler={this.clickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removedStock={this.removedStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
