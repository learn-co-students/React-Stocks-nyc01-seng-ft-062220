import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock'

class MainContainer extends Component {


  state={
    stocks:[]
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp=>resp.json())
    .then(data=> this.setState({stocks:data}))
  }

  renderStocks=()=>{
    return this.state.stocks.map((stock)=><Stock key={stock.id} stock={stock}/>)
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <h3>Search bar</h3>

          <div className="row">
            <div className="col-8">

              <StockContainer renderStocks={this.renderStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer/>
              <h3>PortfolioCont</h3>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
