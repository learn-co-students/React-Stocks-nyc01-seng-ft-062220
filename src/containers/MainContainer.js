import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  
  state = {
    stocks: [],
    myStocks: [],
    filteredStocks: []
  }
  getStock = () => {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(stockResp => this.setState({stocks: stockResp}))
  }

  clickHandler = (stockObj) => {
    stockObj.remove ?
    this.setState({myStocks: this.state.myStocks.filter( stock => stock.id !== stockObj.id)})
    :
    this.state.myStocks.find(stock => stock.id === stockObj.id) ? null : this.setState({myStocks: [...this.state.myStocks, stockObj]})
  }

  radioHandler = (category) => {
    category === "Alphabetically" ?
    this.sortAlphabetically()
    :
    this.sortByPrice()
  }

  filterHandler = (category) => {
    this.setState({filteredStocks: this.state.stocks.filter(stockObj => stockObj.type === category)})
  }

  sortAlphabetically = () => {
    this.setState({stocks: this.state.stocks.sort((a,b) => {
        if (a.name < b.name) return -1 ;
        else if (a.name > b.name) return 1;
        return 0
      }), myStcosk: this.state.myStocks.sort((a,b) => {
        if (a.name < b.name) return -1 ;
        else if (a.name > b.name) return 1;
        return 0
      }), filteredStocks: this.state.filteredStocks.sort((a,b) => {
        if (a.name < b.name) return -1 ;
        else if (a.name > b.name) return 1;
        return 0
      })
    })
  }

  sortByPrice = () => {
    this.setState({stocks: this.state.stocks.sort((a,b) => {
        return a.price - b.price
      }), myStcosk: this.state.myStocks.sort((a,b) => {
        return a.price - b.price
      }), filteredStocks: this.state.filteredStocks.sort((a,b) => {
        return a.price - b.price
      })
    })
  }

  componentDidMount(){
    this.getStock()
  }
  
  render() {
    return (
      <div>
        <SearchBar radioHandler={this.radioHandler} filterHandler={this.filterHandler} />
          <div className="row">
            <div className="col-8">
              <StockContainer stockArray={this.state.filteredStocks.length ? this.state.filteredStocks : this.state.stocks} clickHandler={this.clickHandler} />
            </div>
            <div className="col-4">
              <PortfolioContainer myStockArray={this.state.myStocks} clickHandler={this.clickHandler}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
