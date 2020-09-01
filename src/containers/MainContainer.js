import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state= {
    stocks: [],
    favoriteStocks: [],
    alph: false,
    price: false
  }

  alphFilter = (e) => {
    let sortedStocks = this.state.stocks.sort(function(a, b){
      if(a.ticker < b.ticker) { return -1; }
      if(a.ticker > b.ticker) { return 1; }
      return 0
    })

    let toggle = !this.state.alph
    
    this.setState({
      stocks: sortedStocks,
      alph: toggle
    })
    
  }

  priceFilter = (e) => {
    let sortedStocks = this.state.stocks.sort(function(a, b){
      if(a.price < b.price) { return -1; }
      if(a.price > b.price) { return 1; }
      return 0;
    })

    let toggle = !this.state.price
    
    this.setState({
      stocks: sortedStocks,
      price: toggle
    })
    
  }

  catFilter = (e) => {
    let type = e.target.value
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(data => {
      
      let sortyStocks = data.filter(stock => stock.type === type)
      this.setState({stocks: sortyStocks})
    })

  
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stockArray => this.setState({stocks: stockArray}))
  }

  clickHandler = (stockObj) => {
    console.log('clicked')
    console.log(stockObj)
    let selectStock = this.state.stocks.find((stock) => stock.id === stockObj.id)
    this.setState({favoriteStocks: [...this.state.favoriteStocks, selectStock]})
   //use state on react web tools to see if state is there for favStocks Array
  }

  deleteStock = (stockObj) => {
    console.log(stockObj)
    let newArr = [...this.state.favoriteStocks]
    let update = newArr.filter((stock) => stock.id !== stockObj.id)
    this.setState({favoriteStocks: update})

  }

  alphSortChangeHandler = (e) => {
    console.log(e.target.value)
  }

  priceSortChangeHandler = (e) => {
  console.log(e.target.value)
  }



  render() {
    return (
      <div>
        <SearchBar catFilter={this.catFilter} priceFilter={this.priceFilter} alphFilter={this.alphFilter} alph={this.state.alph} price={this.state.price}/>

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.clickHandler} stockArray = {this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer deleteStock={this.deleteStock} portfolio={this.state.favoriteStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
