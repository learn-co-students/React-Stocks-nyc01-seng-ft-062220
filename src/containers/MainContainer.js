import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    alph: false,
    price: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(res => this.setState({stocks: res}))
  }

  clickHandler = (e) => {
    let newStock = this.state.stocks.filter(stock => stock.ticker === e.target.querySelector(".card-text").innerText.split(" ")[0])[0]

    this.setState({ portfolio: [...this.state.portfolio, newStock]})
  }

  delHandler = (e) => {
    let newPort = this.state.portfolio.filter(stock => stock.ticker !== e.target.querySelector(".card-text").innerText.split(" ")[0])
    
    this.setState({ portfolio: newPort})
  }

  alphFilter = (e) => {
    let sortedStocks = this.state.stocks.sort(function(a, b){
      if(a.ticker < b.ticker) { return -1; }
      if(a.ticker > b.ticker) { return 1; }
      return 0;
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
    .then(res => res.json())
    .then(res => {
      
      let sortyStocks = res.filter(stock => stock.type === type)
      this.setState({stocks: sortyStocks})
    })

   
  
    // this.setState({
    //   stocks: sortyStocks
    // })
  
  }

  render() {
    return (
      <div>
        <SearchBar catFilter={this.catFilter} priceFilter={this.priceFilter} alphFilter={this.alphFilter} alph={this.state.alph} price={this.state.price}/>

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.clickHandler} stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer delHandler={this.delHandler} portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
