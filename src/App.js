import React, { Component } from "react";
// import slugify from 'slugify';
import "./App.css";
import BookResults from "./BookResults/BookResults";
import BookSearch from "./BookSearch/BookSearch";
// const API_URL = 'https://www.googleapis.com/books/v1/volumes/';
const API_Key = 'AIzaSyCq81ypL09vSFd4YnaucYabB95flDIKUcI';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: 'joel richardson',
      printType: 'all',
      bookType: 'full',
    };
  }
 
  fetchBooks = () => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&bookType=${this.state.bookType}&printType=${this.state.printType}&key=${API_Key}`;
  console.log(url)
    fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      
      return res;
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        q: data.q,
        bookType: data.bookType,
        printType: data.printType,
        error: null
      });
    })
  }
  updateFeature = (feature) => {
    this.setState({
      [feature.type]:feature.content
    })
  
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <BookSearch 
        
        updateFeature={this.updateFeature}
        fetchBooks={this.fetchBooks}
        />
        <BookResults />
      </div>
    );
  }
}

export default App;
