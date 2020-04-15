import React, { Component } from 'react';
import './SearchInput.css';

export default class SearchInput extends Component{
  state = {
    type: 'q',
    content: ''
  }
  submitHandler = (event) => {
    event.preventDefault()
    this.props.updateFeature(this.state)
  }
  changeHandler = (event) => {
    this.setState({
      content: event.target.value
    })
  }
  render(){
        const error = this.props.error 
          ? <div className="error">{this.props.error}</div>
          : "";
        return(
            <form className='searchBar' onSubmit={this.submitHandler}>
                { error }
                <label htmlFor='search'>Search:</label>
                <input type='text' id='search' placeholder="Search term" required
                onChange={this.changeHandler}></input>
                <button type='submit'
                >Search</button>
            </form>
        )
  }
} 