import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';
class App extends Component {
  
  produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Pineapple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Pear", type: "Fruit" },
    { name: "Strawberry", type: "Fruit" },
    { name: "Orange", type: "Fruit" },
    { name: "Lettuce", type: "Vegetable" },
    { name: "Cucumber", type: "Vegetable" },
    { name: "Eggplant", type: "Vegetable" },
    { name: "Squash", type: "Vegetable" },
    { name: "Bell pepper", type: "Vegetable" },
    { name: "Onion", type: "Vegetable" },
  ];

  render() {
    return (
      <div className="App">
        <HelloWorld name="Elaf Mustafa" />
        <Counter />
        <FilteredList items={this.produce} />
      </div>
    );
  }
}

export default App;
