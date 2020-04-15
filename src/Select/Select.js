import React, { Component } from "react";

export default class Select extends Component {
  state = {
      type: this.props.type,
      content: ''
  };
  dropDownHandler = (event) => {
      this.setState({
          content: event.target.value
      },
      () => {
      this.updateBooks()
      })
  }
  updateBooks = () => {
      this.props.updateFeature(this.state)
  }

  render() {
    return (
      <select onChange={this.dropDownHandler}>
        {this.props.type === "bookType" ? (
          <option value="none" selected disabled hidden>
            No Filter
          </option>
        ) : null}
        {this.props.options.map(option => {
          return <option value={option} key={option}>{option}</option>;
        })}
      </select>
    );
  }
}
