import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'


const api = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    sortStock: [],
    portfolio: []
  }
  //import API here
  componentDidMount(){
    fetch(api)
    .then(resp => resp.json())
    .then(data => this.setState({ stocks: data, sortStock: data}))
  }

  stockHandler = (obj) => {
    //if this obj exists in portfolio then SELL it else BUY it
    if(this.state.portfolio.find(stock => stock.id === obj.id)){
      //console.log("true we have it! lets sell")
      const newStockOwned = this.state.portfolio.filter(stock => stock !== obj)
      this.setState({ portfolio: newStockOwned})
    }else{
      //console.log("false it does not exist in profolio")
      const newStockOwned = [...this.state.portfolio, obj];
      this.setState({ portfolio: newStockOwned})
    }
  }

  sortAlphabetically = () => {
    const sortByName = this.state.stocks.sort((a,b) => (a.name > b.name) ? 1 : -1)
    this.setState({ sortStock: sortByName})
  }

  sortPrice = () => {
    const sortByPrice = this.state.stocks.sort((a,b) => (a.price < b.price) ? 1 : -1)
    this.setState({ sortStock: sortByPrice})
  }

  sortByCategory = e => {
    const sortByCategory = this.state.stocks.filter(stock => stock.type === e.target.value)
    this.setState({ sortStock: sortByCategory })
  }

  render() {
    return (
      <div>
        <SearchBar sortAlphabetically={this.sortAlphabetically} sortPrice={this.sortPrice} sortByCategory={this.sortByCategory}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.sortStock} stockHandler={this.stockHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} stockHandler={this.stockHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
