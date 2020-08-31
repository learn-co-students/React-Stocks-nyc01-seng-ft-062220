import React from 'react'

class Stock extends React.Component{

  render(){
   
    return(

      <div>
      <div className="card">
        <div id={this.props.stock.id} className="card-body" onClick={this.props.clickHandler}>
          <h5 id={this.props.stock.id} className="card-title">{this.props.stock.name}</h5>
          <p  id={this.props.stock.id} className="card-text">{this.props.stock.ticker + " " + this.props.stock.price}</p>
        </div>
      </div>
  
  
    </div>

    )
  }


}
  
  


export default Stock
