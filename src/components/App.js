import React, { Component } from 'react';
import List from "./List"
import SelectedList from "./SelectedList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <SelectedList />
        <List />
      </div>
    );
  }
}

export default App;
