import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock'

class MainContainer extends Component {

  state={
    stocks:[],
    radioButton: "",
    filteredArray:[],
    filterValue: "",
    myStock:[]
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp=>resp.json())
    .then(data=> this.setState({stocks:data}))
  }

  clickHandler=(stock_obj)=>{

    let newArray = [...this.state.myStock]
    let clickedStock = this.state.stocks.find((stock)=>stock.id === stock_obj.id)
    newArray.push(clickedStock)
     this.setState({myStock:newArray})
  }

  portfolioClickHandler=(stock_obj)=>{
    
    let newArray =[...this.state.myStock]
    let updatedArray = newArray.filter((stock)=>stock.id !== stock_obj.id)
    this.setState({myStock:updatedArray})
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

  handleFilter =(e)=>{

    this.setState({filterValue:e.target.value})

    if (e.target.value === 'Tech'){

      let filteredArray =[...this.state.stocks]
      let techArray = filteredArray.filter((stock)=>stock.type === 'Tech')
      this.setState({filteredArray: techArray})

    } else if ( e.target.value === 'Sportswear'){

      let filteredArray =[...this.state.stocks]
      let sportArray = filteredArray.filter((stock)=>stock.type === 'Sportswear')
      this.setState({filteredArray: sportArray})

    }else{

      let filteredArray =[...this.state.stocks]
      let financeArray = filteredArray.filter((stock)=>stock.type === 'Finance')
      this.setState({filteredArray: financeArray})

    }
  }

  filteredStocks=()=>{
    if(this.state.filterValue === ''){
      return this.state.stocks
    } else {
      return this.state.filteredArray
    }
  }
 
  render() {

    return (
      <div>
        <SearchBar button={this.state.radioButton} radioButton={this.radioButton} handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer filteredStocks={this.filteredStocks()} clickHandler={this.clickHandler}/>
            </div>
            <div className="col-4">
              <PortfolioContainer portfolioClickHandler ={this.portfolioClickHandler} myPortfolio={this.state.myStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
