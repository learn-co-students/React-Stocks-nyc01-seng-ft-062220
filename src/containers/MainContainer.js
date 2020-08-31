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
    this.setState({portfolio: [...this.state.portfolio, portfolioStock]}) 
  }

  removedStock = (stockObj) => {
    let cancelMe = this.state.portfolio.filter(stocks => stocks.id !== stockObj.id)
    this.setState({portfolio: cancelMe})
  }

  priceSort = (priceObj) => {
    this.setState({
      stocks: priceObj
    })
  }

  nameSort = (nameObj) => {
    this.setState({
      stocks: nameObj
    })
  }

  

  render() {
    return (
      <div>
        <SearchBar stocks={this.state.stocks} priceSort={this.priceSort} nameSort={this.nameSort}/>

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
