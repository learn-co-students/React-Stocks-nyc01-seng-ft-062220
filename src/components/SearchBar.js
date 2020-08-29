import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name="sort" onChange={event => {props.sortAlphabetically() }}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="sort" onChange={event => {props.sortByPrice()}}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={event => {props.sortByCategory(event)}}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
