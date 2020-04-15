import React, { Component } from "react";
import "./App.css";
import BookResults from "./BookResults/BookResults";
import BookSearch from "./BookSearch/BookSearch";

const API_Key = 'AIzaSyCq81ypL09vSFd4YnaucYabB95flDIKUcI';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: 'joel richardson',
      printType: '',
      bookType: '',
    };
  }
  fetchBooks = () => {
    const search = this.state.q;
    const printType = this.state.printType;
    const bookType = this.state.bookType;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=${printType}&filter=${bookType}&key=${API_Key}`
console.log(url)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&printType=${printType}&filter=${bookType}&key=${API_Key}`)
    // .then(res => {
    //   if(!res.ok) {
    //     throw new Error('Something went wrong, please try again later.');
    //   }
    //   return res;
    // })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // this.setState({
      //   feature: data,
      //   error: null
      // });
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
