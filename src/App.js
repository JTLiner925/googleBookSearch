import React, { Component } from "react";
import "./App.css";
import BookResults from "./BookResults/BookResults";
import BookSearch from "./BookSearch/BookSearch";

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <BookSearch /> 
        <BookResults />
      </div>
    );
  }
}

export default App;
