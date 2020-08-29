import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
 
  constructor () {
    super()
    this.state = {
      isLoaded : false,
      portfolio: [],
      alphabetChecked: false,
      priceChecked:false
    }
  }

  componentDidMount () {
    fetch("http://localhost:3000/stocks")
      .then(response => response.json())
      .then(stockList => {
        this.setState({
          isLoaded : true,
          stocks : stockList,
          masterList: stockList
        }) 
      })
  }

  findStock = (arrayOfStocks, id) => {
    return(arrayOfStocks.find(stock => {
      return (
        id === stock.id
      )
    }))
  }

  sortByCategory = (event) => {
    console.log(this.state.stocks)
    const filteredArray = this.state.masterList.filter(stock  => {
      console.log(event.target.value === stock.type)
      return (
        event.target.value === stock.type
      )
    })

    this.setState({stocks:filteredArray})
  }

  togglePrice = () => {
    this.setState({ priceChecked : !this.state.priceChecked})
  }

  toggleAlphabet = () => {
    this.setState({ alphabetChecked : !this.state.alphabetChecked})
  }

  sortAlphabetically = () => {
    this.state.stocks.sort((A,B) => {
      return A.ticker.localeCompare(B.ticker, 'en', {'sensitivity': 'base'})
    })
    this.state.portfolio.sort((A,B) => {
      return A.ticker.localeCompare(B.ticker, 'en', {'sensitivity': 'base'})
    })
    this.setState({
      stocks: this.state.stocks,
      portfolio: this.state.portfolio
    })
  }

  sortByPrice = () => {
    this.state.stocks.sort((A,B) => {
      return(B.price - A.price) 
    })
    this.state.portfolio.sort((A,B) => {
      return(B.price - A.price) 
    })


    this.setState({stocks: this.state.stocks,
                    portfolio: this.state.portfolio
                  })
  }

  stockClickHandler = (event) => {
    const selectedStock = this.findStock(this.state.stocks,parseInt(event.target.id,10))
    this.setState({portfolio: [...this.state.portfolio,selectedStock] })
  }

  portfolioClickHandler = (event) => {
    const selectedStock = this.findStock(this.state.portfolio,parseInt(event.target.id,10))
    const filteredPortfolio = this.state.portfolio.filter(stock => {
      return (
        stock.id !== selectedStock.id
      )
    })
    this.setState({portfolio: filteredPortfolio })
  }

  render() {
    return (
      <div>
        <SearchBar sortByCategory={this.sortByCategory} sortAlphabetically={this.sortAlphabetically} togglePrice={this.togglePrice} toggleAlphabet={this.toggleAlphabet} priceChecked={this.state.priceChecked} alphabetChecked={this.state.alphabetChecked} sortByPrice={this.sortByPrice}/>

          <div className="row">
            <div className="col-8">

              {this.state.isLoaded === true ? <StockContainer stockClickHandler={this.stockClickHandler} stocks={this.state.stocks}/> : "Loading!"}

            </div>
            <div className="col-4">

              <PortfolioContainer stockClickHandler={this.portfolioClickHandler} portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
