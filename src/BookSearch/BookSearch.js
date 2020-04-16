import React, { Component } from "react";
import "./BookSearch.css";
import SearchInput from "../SearchInput/SearchInput";
import SearchType from "../SearchType/SearchType";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      printType: [],
      filter: []
    };
  }

  qChanged(q) {
    this.setState({
      q
    });
  }

  printTypeChanged(printType) {
    this.setState({
      printType
    });
  }

  filterChanged(filter) {
    this.setState({
      filter
    });
  }

  render() {
    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );
    return (
      <header>
          <h1>Google Book Search</h1>
          <SearchInput 
          fetchBooks={this.props.fetchBooks}
          updateFeature={this.props.updateFeature} error={error} />
          <SearchType
            handleSubmit={this.handleSubmit}
            error={error}
            updateFeature={this.props.updateFeature}
          />
      </header>
    );
  }
  // return (

  //       {newSearch}

  // )
}
