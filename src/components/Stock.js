import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" >
      {/* {console.log(props.sellStock)} */}
      <div className="card-body" onClick={typeof props.clickOnStock === 'function' ? () => props.clickOnStock(props) : () => props.sellStock(props)} >
        <h5 className="card-title">{
            //Company Name
            props.stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            props.stock.ticker
          }</p>
        <p className="card-text">{
            //ticker: stock price
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
);



export default Stock
