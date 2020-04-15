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
    // const searchSummary = Object.keys(this.props.selected)
    // const newSearch = searchSummary.map((q, printType, filter, idx) => {
    //   const featureHash = q + "-" + idx;
    //     const filterOption = this.props.selected[filter];

    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );
    //   console.log(error)
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

            // filterOption={filterOption}
          />
      </header>
    );
  }
  // return (

  //       {newSearch}

  // )
}
