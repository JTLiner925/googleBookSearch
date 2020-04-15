import React, { Component } from "react";
import "./App.css";
import BookResults from "./BookResults/BookResults";
import BookSearch from "./BookSearch/BookSearch";

const API_KEY = 'AIzaSyCq81ypL09vSFd4YnaucYabB95flDIKUcI';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      printType: [],
      filter: [0],
      selected: null
    };
  }
  componentDidMount() {
    // const url = "https://www.googleapis.com/books/v1/volumes";
    // const options = {
    //   method: 'GET',
    //   headers: {
    //   'key': API_KEY,
    //   // "Content-Type": "application/json"
    //   }
    //       }
    const newSearch = (({q, printType, filter}) => ({q, printType, filter}))(this.state);
        const url ='https://www.googleapis.com/books/v1/volumes';
        const options = {
          method: 'GET',
          body: JSON.stringify(newSearch),
      headers: {
      'key': API_KEY
          }
        };
    fetch(url, options)
    
      .then(response => {
        
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        
        return response;
      })
      .then(response => response.json())
      
      .then(data => {
        console.log(data)
        const search = Object.keys(data).map(key => {
          const eachSearch = {
            q: data[key].q[''],
            printType: data[key].printType[0],
            filter: data[key].filter[0]
          }
          return eachSearch;
            }
        );
        this.setState({
          search,
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
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    
    return (
      <div className="App">
        <BookSearch 
        updateFeature={this.updateFeature}
        q={this.state.q}
        filter={this.state.filter}
        printType={this.state.printType}
        changeHandler={selected => this.setSelected(selected)}
        selected={this.props.selected}/> 
        <BookResults />
      </div>
    );
  }
}

export default App;
