import React, { Component } from 'react';
import './App.css';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

  
    this.state = {
      search: "",
      type: "All", 
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

 
  onFilter = (type) => {
    this.setState({ type });
  }

  
  filterItem = (item) => {
    if (this.state.type === "All") {
      return item.name.toLowerCase().search(this.state.search) !== -1;
    } else {
      return (
        item.name.toLowerCase().search(this.state.search) !== -1 &&
        item.type.toLowerCase() === this.state.type.toLowerCase()
      );
    }
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce search</h1>
        <select value={this.state.type} onChange={(e) => this.onFilter(e.target.value)} className="form-control">
          <option value="All">All</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
        </select>

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
