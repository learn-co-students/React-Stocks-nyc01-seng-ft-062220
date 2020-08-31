import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock'

class MainContainer extends Component {


  state={
    stocks:[],
    radioButton: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp=>resp.json())
    .then(data=> this.setState({stocks:data}))
  }

  renderStocks=()=>{
    return this.state.stocks.map((stock)=><Stock key={stock.id} stock={stock} renderMyStocks={this.renderMyStocks}/>)
  }

  renderMyStocks=(stock_obj)=>{

    let newArray =[...this.state.stocks]
    let newStock = this.state.stocks.find((stock)=> stock ===stock_obj)
    newArray=[...newArray, newStock]
    this.setState({stocks:newArray}, ()=> console.log(this.state))
  }


radioButton=(e)=>{

  if (e.target.value === 'Price'){
    this.setState({radioButton: e.target.value})
    let updatedStock = this.state.stocks.sort((a, b)=>(a.price>b.price)? 1:-1)
    updatedStock.reverse()

    
  }else {

    this.setState({radioButton: e.target.value})
    this.state.stocks.sort((a, b)=>(a.name>b.name)? 1:-1)
    console.log(this.state.searchValue)
  }
}
 
  render() {

    let myStocks =(stock_obj)=> this.state.stocks.filter((stock) => stock === stock_obj)
    return (
      <div>
        <SearchBar button={this.state.radioButton} radioButton={this.radioButton}/>
        <h3>Search bar</h3>

          <div className="row">
            <div className="col-8">

              <StockContainer renderStocks={this.renderStocks} renderMyStocks={this.renderMyStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer renderMyStocks={this.renderMyStocks} myStocks={myStocks}/>
              <h3>PortfolioCont</h3>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
