import React from 'react';

class SearchBar extends React.Component {
 constructor(){
   super()
   this.state =
   {Alphabetically: false,
  Price: false}
 }

 changeHandler=(event)=>{
   if(event.target.value === "Price"){
   this.setState({
     Price: !this.state.Price,
     Alphabetically: false
   })
   this.props.sortNumber()
  }else{
    this.setState({
      Alphabetically: !this.state.Alphabetically,
      Price: false
    })
   
    this.props.sortAlpha()
   }
 }



  render(){

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.state.Alphabetically} onChange={this.changeHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={this.state.Price} onChange={this.changeHandler}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.props.filterStocks}>
        <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );}
}


export default SearchBar;
