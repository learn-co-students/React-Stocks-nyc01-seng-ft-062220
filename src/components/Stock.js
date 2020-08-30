import React from 'react';

const Stock = (props) => {
 
  return (
    <div data-set-id={props.key} onClick={(e) => props.clickHandler(e)}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{
                props.stockObj.name
              }</h5>
            <p className="card-text">
                {props.stockObj.ticker} : {props.stockObj.price}
              </p>
          </div>
        </div>
    </div>
  )
};

export default Stock
