import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

//Didn't finish - worked hard but got stuck -- will try to come back to it if there's time

class MainContainer extends Component {

  state = {
    stockArray : [],
    portfolioArray : [],
    alphabetical: false,
    priceSort: false
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(response => response.json())
      .then(stockData => this.setState({stockArray: stockData}))
  }

  addToPortfolio = (stockObj) => {
    console.log(stockObj)
    this.setState({...this.state, portfolioArray: [...this.state.portfolioArray, stockObj]})
    
  }

  deleteFromPortfolio = (stockObj) => {
    let portArrayCopy = [...this.state.portfolioArray]
    //let stockToDelete = newPortArray.findIndex(stockObject => stockObject.id === stockObj.id)
    let newPortArray = portArrayCopy.filter(stockObject => stockObject.id !== stockObj.id)
    this.setState({...this.state, portfolioArray: newPortArray})
    //then reset state with new array
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
        <SearchBar priceBoolean={this.state.priceSort} alphabeticalBoolean={this.state.alphabetical} sortChangeHandler={this.sortChangeHandler}/>

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.addToPortfolio}  stockArray={this.state.stockArray} />

            </div>
            <div className="col-4">

              <PortfolioContainer clickHandler={this.deleteFromPortfolio} portfolioArray={this.state.portfolioArray}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;


