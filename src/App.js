import React, { Component } from "react";
import "./App.css";
// import BookResults from "./BookResults/BookResults";
import BookSearch from "./BookSearch/BookSearch";

const API_Key = 'AIzaSyCq81ypL09vSFd4YnaucYabB95flDIKUcI';
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
    const url = "https://www.googleapis.com/auth/books/v1/volumes";
    const options = {
      method: 'GET',
      'key': API_Key,
          }

    fetch(url, options)
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
        {/* <BookResults /> */}
      </div>
    );
  }
}

export default App;
