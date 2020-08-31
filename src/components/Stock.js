import React from 'react'

const Stock = (props) => {

  let addStock = () => {
    props.clickHandler(props.stock)
  }

  let removeStock = () => {
    props.stock.remove = true
    props.clickHandler(props.stock)
  }

  return(
    <div className="card">
      <div className="card-body" onClick={props.portfolio ? removeStock : addStock}>
        <h5 className="card-title">{props.stock.name}</h5>
        <p className="card-text">{props.stock.ticker}: {props.stock.price}</p>
      </div>
    </div>
  )  
};

export default Stock
