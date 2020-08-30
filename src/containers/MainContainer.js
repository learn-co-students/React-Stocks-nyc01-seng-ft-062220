import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

//Didn't finish - worked hard but got stuck -- will try to come back to it if there's time

class MainContainer extends Component {

  state = {
    stockArray : [],
    portfolioArray : []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(response => response.json())
      .then(stockData => this.setState({stockArray: stockData}))
  }

  clickHandler = (stockObj, clickBoolean) => {
    let newArray = [...this.state.portfolioArray]
    let removalIndex
    if(clickBoolean === true) {
      removalIndex = this.state.portfolioArray.findIndex(item => item.id === stockObj.id)
      newArray[removalIndex] = ""
    } else if (clickBoolean === false) {
        this.setState({...this.state, portfolioArray: [...this.state.portfolioArray, stockObj]})
    }
    
    
    
  }

  //explore this later - this is aa much better solve
  // myPortfolioClickHandler = (obj) => {
  //   if (this.state.myPortfolio.find(item => item.id === obj.id)) {
  //     let removeArray = this.state.myPortfolio.filter(item => item.id !== obj.id)
  //     this.setState({
  //       myPortfolio: removeArray
  //     })

  //   } else {
  //     let newArray = [...this.state.myPortfolio, obj]
  //     this.setState({
  //       myPortfolio: newArray
  //     })
  //   }
  // }


  render() {
    
    //console.log("in maincontainer:", this.state.portfolioArray)
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.clickHandler}  stockArray={this.state.stockArray} />

            </div>
            <div className="col-4">

              <PortfolioContainer clickHandler={this.clickHandler} portfolioArray={this.state.portfolioArray}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
