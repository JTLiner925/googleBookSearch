import React, { Component } from "react";
import "./SearchType.css";
import Select from "../Select/Select";

export default class SearchType extends Component {
  state = {
    printType: ["All", "Books", "Magazines"],
    bookType: ["Partial", "Full", "Free-ebooks", "Paid-ebooks", "ebooks"]
  };
  render() {
    return (
      <div className="SearchType">
        <Select options={this.state.printType} updateFeature={this.props.updateFeature} type="printType" />
        <Select options={this.state.bookType} updateFeature={this.props.updateFeature} type="bookType" />
      </div>
    );
  }
}
