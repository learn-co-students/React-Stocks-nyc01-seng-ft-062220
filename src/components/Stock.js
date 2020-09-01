import React from 'react'

const Stock = (props) => {
  
  const clickHandler =() => {props.addPortfolio(props.stockObj)}
  
  
  return (
  <div>

    <div className="card" onClick={clickHandler}>
      <div className="card-body">
        <h5 className="card-title">{
           props.name
          }</h5>
        <p className="card-text">{
            props.price
          }</p>
      </div>
    </div>


  </div>
);
}

export default Stock
