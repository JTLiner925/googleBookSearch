import React, { Component } from "react";
import "./BookCard.css";

export default class BookCard extends Component {
  render() {
    return (
      <div className='eachBook'>
        <div className='bookTitle'>Title</div>
        <div className='bookDesc'>
        <div className='bookPic'>img</div>
        <div className='bookInfo'>
            <div>Author: Warrem Hollister</div>
            <div>Price: $50.00</div>
            <div className='description'>Description of the book goes here. I'm just trying to fillin in some text here.I'm just trying to fillin in some text here</div> 
        </div>  
        </div>
      </div>
    );
  }
}
