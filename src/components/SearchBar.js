import React from 'react';

let price = document.querySelector("#root > div > div > div:nth-child(1) > label:nth-child(3) > input[type=radio]")
let alpha = document.querySelector("#root > div > div > div:nth-child(1) > label:nth-child(2) > input[type=radio]")

const SearchBar = (props) => {
  return (
    <div>
      {/* {console.log(props)} */}
      <strong>Sort by:</strong>
      <label>
        <input name='Alpha' type="radio" value="Alphabetically" checked={null} onChange={props.listAlpha}/>
        Alphabetically
      </label>
      <label>
        <input name='Price' type="radio" value="Price" checked={null} onChange={props.listPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onClick={props.clickHandler} onChange={(choice) => props.filterStocks(choice)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
