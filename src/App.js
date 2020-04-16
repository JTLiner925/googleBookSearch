import React, { Component } from "react";
import slugify from 'slugify';
import "./App.css";
import BookResults from "./BookResults/BookResults";
import BookSearch from "./BookSearch/BookSearch";
const API_URL = 'https://www.googleapis.com/books/v1/volumes';
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
  formatQueryParams = (params) => {
    const queryItems = Object.keys(params).map(key => `${key}=${params[key]}`);
    return slugify(queryItems, '+').join('&');
  }
  fetchBooks = (passage, print, book, key) => {
    const params = {
      passage: this.state.q,
      print: this.state.printType,
      book: this.state.bookType,
      key: API_Key 
    };
    const queryString = this.formatQueryParams(params);
    
    const url = API_URL + '?' + queryString;
    console.log(url)
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };
   
    fetch(url, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      console.log(res)
      return res;
    })
    .then(res => res.json())
    .then(data => {
    
      this.setState({
        feature: data.items,
        error: null
      });
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
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
