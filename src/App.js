import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  //portfolio container
  state = {
    stocks: [],
    portStocks: []
  }

  clickOnStock = (e) => {
    this.state.portStocks.includes(e.stock) ?
    null
    :
    this.setState({ ...this.state.portStocks.push(e.stock) })

  }

  sellStock = (e) => {
    let idx = this.state.portStocks.indexOf(e.stock)
    let newState = this.state.portStocks.splice(idx, 1)
    this.setState({ ...newState})
  }

  listAlpha = () => {
    console.log(this.state.stocks)
    let sorted = this.state.stocks.sort(function(a, b) {
      if(a.ticker < b.ticker) { return -1; }
      if(a.ticker > b.ticker) { return 1;  }
      return 0;
    })

    this.setState({...this.state, stocks: sorted})
  }

  listPrice = () => {
    console.log(this.state.stocks)
    let sorted = this.state.stocks.sort(function(a, b) {
      if(a.price > b.price) { return -1; }
      if(a.price < b.price) { return 1;  }
      return 0;
    })

    this.setState({...this.state, stocks: sorted})
  }

  filterStocks = (choice) => {
    let filtered = this.state.stocks.filter(stock => stock.type === choice.target.value )
    this.setState({...this.state, stocks: filtered})
  }

  clickHandler = (event) => {
    this.componentDidMount()
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(response => response.json())
      .then(data => this.setState({ stocks: data}))
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer clickHandler={this.clickHandler} clickOnStock={this.clickOnStock} sellStock={this.sellStock} data={this.state} filterStocks={this.filterStocks}listAlpha={this.listAlpha} listPrice={this.listPrice}/>
      </div>
    );
  }
}

export default App;
