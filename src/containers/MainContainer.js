import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      originalApi: [],
      portfolio: [],
      stocks: []
    }
  }

  componentDidMount(){
    this.apiFetch()
  }


  addPortfolio=(stock)=>{
    let newPortfolio = this.state.portfolio
    if(!newPortfolio.includes(stock)){
    newPortfolio.push(stock)
    this.setState({...this.state,
    portfolio: newPortfolio })}
  }

  removePortfolio=(stock)=>{
    // let newPortfolio = this.state.portfolio
    // if(!newPortfolio.includes(stock)){
    // newPortfolio.push(stock)
    // this.setState({...this.state,
    // portfolio: newPortfolio })}
    let newPortfolio = this.state.portfolio
    if (newPortfolio.includes(stock)){
      newPortfolio.splice(newPortfolio.indexOf(stock),1)
      this.setState({...this.state,
        portfolio: newPortfolio })
    }

  }

  sortAlpha=()=>{
    console.log("trying to sort alphabetically")
    let newStocks = this.state.originalApi
    this.setState({...this.state,

      stocks: newStocks.sort((a, b) =>  {
        if(a.ticker < b.ticker) { return -1; }
      if(a.ticker > b.ticker) { return 1; }
      return 0;})
    })

  }

  sortNumber=()=>{
    console.log("trying to sort by Numbers")
    let newStocks = this.state.originalApi
    this.setState({...this.state,

      stocks: newStocks.sort((a, b) =>  {return a.price-b.price})
    })


  }

  filterStocks =(event)=>{
    
    if(event.target.value === "All"){
      this.sortAlpha()


    } else{
      
      let newStocks = this.state.originalApi.filter(luis =>  {
        console.log(luis.type,event.target.value)
        return(
        luis.type === event.target.value)})
     
      this.setState({...this.state,

        stocks: newStocks
      })
  

    }
  }


  apiFetch=()=>{
    fetch("http://localhost:3001/stocks")
    .then(response => response.json())
    .then( stocksObj =>{
      this.setState({
        ...this.state,
        originalApi: stocksObj,
        stocks: stocksObj.sort((a, b) =>  {
          if(a.ticker < b.ticker) { return -1; }
        if(a.ticker > b.ticker) { return 1; }
        return 0;})
      })
      }
    )
  }


  render() {
    return (
      <div>
        <SearchBar sortAlpha={this.sortAlpha} sortNumber={this.sortNumber} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addPortfolio={this.addPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} addPortfolio={this.removePortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
