import React, { Component } from "react";
import "./App.css";
import BookResults from "./BookResults/BookResults";
import BookSearch from "./BookSearch/BookSearch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: [],
      printType: [],
      filter: [],
      selected: null
    };
  }
  componentDidMount() {
    fetch("https://www.googleapis.com/auth/books")
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data).map(key => data[key].item[0]);
        this.setState({
          countries,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  setSelected(selected) {
    this.setState({
      selected
    });
  }
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
