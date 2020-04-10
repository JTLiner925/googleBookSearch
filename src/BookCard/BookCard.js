import React, { Component } from "react";
import "./BookCard.css";

export default class BookCard extends Component {
  render() {
    return (
      <div className='bookInfo'>
        <div className='bookPic'></div>
        <div className='bookDesc'>Title Author Price Description</div>
      </div>
    );
  }
}
