import React, { Component } from "react";


import LocalStorageLayout from "./components/LocalStorageLayout";
import MenuBar from "./components/MenuBar";

class App extends Component {
  render() {
    return (
      <div className="container">
      
        <MenuBar />
        <LocalStorageLayout />
      </div>
    );
  }
}

export default App;
