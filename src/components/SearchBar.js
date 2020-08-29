import React from 'react';

class SearchBar extends React.Component {

    state = {
        sortBy: ''
    }

    onChangeHandler = (e) => {
        this.props.searchHandler(e.target.value)
    }

    onChangeHandlerRadio = (e) => {
        this.props.searchSortHandler(e.target.value)
    }


    render() {
        return (
            <div>
                <strong>Sort by:</strong>
                <label>
                    <input type="radio" value="Alphabetically" checked={null} onChange={this.onChangeHandlerRadio}/>
                    Alphabetically
                </label>
                <label>
                    <input type="radio" value="Price" checked={null} onChange={this.onChangeHandlerRadio}/>
                    Price
                </label>


                <br/>

                <label>
                    <strong>Filter:</strong>
                    <select onChange={this.onChangeHandler}>
                        <option value="Tech">Tech</option>
                        <option value="Sportswear">Sportswear</option>
                        <option value="Finance">Finance</option>
                    </select>
                </label>
            </div>
        );
    }
}


export default SearchBar;
