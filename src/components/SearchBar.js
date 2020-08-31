import React from 'react';


class SearchBar extends React.Component {

 

  toggleButton = (event) => {
    if(event.target.value === "Alphabetically"){
      this.sortByABC()
    }else if(event.target.value === "Price"){
      this.sortByPrice()
    }
  }

  sortByPrice = () => {
    let stockPrice = this.props.stocks
    let leanOnMe = stockPrice.sort(function(a,b){return b.price-a.price});
    this.props.priceSort(leanOnMe)
  }

  sortByABC = () => {
    let stockName = this.props.stocks
    let pleasePassMe = stockName.sort(function(a,b){
      if(a < b) return -1;
      else if (a > b) return 1;
      return 0
    })
    this.props.nameSort(pleasePassMe)
  }

  render(){

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sort" value="Alphabetically" checked={null} onChange={this.sortByABC}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sort" value="Price" checked={null} onChange={this.sortByPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}
}


export default SearchBar;
