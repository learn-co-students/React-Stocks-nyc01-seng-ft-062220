import React from 'react'

class Stock extends React.Component {

  clickHander=()=>{
    this.props.clickHandler(this.props.stock)

  }

  render(){
    return(

    <div>
    
    <div className="card">
    <div className="card-body">
    <h5 onClick={this.clickHander} className="card-title">{
      this.props.stock.name
    }</h5>
    <p className="card-text">{
      this.props.stock.price
          }</p>
          </div>
          </div>
          
          
          </div>
    )
  }
};

export default Stock
