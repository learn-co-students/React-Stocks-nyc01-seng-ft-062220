import React from 'react';

class SearchBar extends React.Component {

  state ={
    alphabetically: false,
    price: false
  }

  checkHandler = (e) => {
    e.target.value === "Alphabetically" ?
    this.setState({alphabetically: true, price: false})
    :
    this.setState({alphabetically:false, price: true})
    this.props.radioHandler(e.target.value)
  }

  selectFilter = (e) => {
    this.props.filterHandler(e.target.value)
  }

  render(){
    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.alphabetically} onChange={this.checkHandler}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.price} onChange={this.checkHandler}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.selectFilter}>
            <option>All</option>
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
