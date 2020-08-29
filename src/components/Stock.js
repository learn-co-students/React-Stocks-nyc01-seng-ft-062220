import React from 'react'

const Stock = (props) => {
  return (
  <div>

    <div className="card" >
      <div className="card-body">
        <h5 id={props.stock.id} onClick={event => props.stockClickHandler(event)} className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
  )
};

export default Stock
