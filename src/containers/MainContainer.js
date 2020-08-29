import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const url = "http://localhost:3000/stocks/"

class MainContainer extends Component {

  state = {
    stocks: [],
    myPortfolio: [],
    renderedStocks: []
  }

  searchHandler = (searchFilter) => {
    let newArray = this.state.stocks.filter(stock => stock.type === searchFilter)
    this.setState({
      renderedStocks: newArray
    })
  }

  compareName = (a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()

    let comparison = 0
    if (nameA > nameB) {
      comparison = 1
    }else if (nameA < nameB) {
      comparison = -1
    }
    return comparison
  }

  comparePrice = (a, b) => {
    const nameA = a.price
    const nameB = b.price

    let comparison = 0
    if (nameA > nameB) {
      comparison = 1
    }else if (nameA < nameB) {
      comparison = -1
    }
    return comparison
  }

  searchSortHandler = (searchFilter) => {
    if (searchFilter === "Alphabetically") {
      let newArray = [...this.state.renderedStocks]
      newArray.sort(this.compareName)

      this.setState({
        renderedStocks: newArray
      })

    } else if (searchFilter === "Price") {
      let newArray = [...this.state.renderedStocks]
      newArray.sort(this.comparePrice)

      this.setState({
        renderedStocks: newArray
      })
    }
  }

  myPortfolioClickHandler = (obj) => {
    if (this.state.myPortfolio.find(item => item.id === obj.id)) {
      let removeArray = this.state.myPortfolio.filter(item => item.id !== obj.id)
      this.setState({
        myPortfolio: removeArray
      })

    } else {
      let newArray = [...this.state.myPortfolio, obj]
      this.setState({
        myPortfolio: newArray
      })
    }
  }

  componentDidMount() {
    const packet = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      }
    }

    fetch(url, packet)
        .then(res => res.json())
        .then(stocks => this.setState({stocks: stocks, renderedStocks: stocks}))
  }

  render() {
    return (
      <div>
        <SearchBar searchHandler={this.searchHandler} searchSortHandler={this.searchSortHandler} />

          <div className="row">
            <div className="col-8">

              <StockContainer key={this.state.renderedStocks.id} stocks={this.state.renderedStocks} myPortfolioClickHandler={this.myPortfolioClickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer key={item => this.state.myPortfolio[item].id} myPortfolio={this.state.myPortfolio} myPortfolioClickHandler={this.myPortfolioClickHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
