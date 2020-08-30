import React from 'react'

class Stock extends React.Component {
  
  

  clickHelper = () => {
    this.props.clickHandler(this.props.stockObject, this.props.clicked)
  }

  render() {
  
    return(
      <div>
        <div onClick={this.clickHelper} className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.stockObject.name}</h5>
            <p className="card-text">{this.props.stockObject.price}</p>
          </div>
        </div>
      </div>
    )
        }
};


export default Stock
