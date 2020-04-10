import React, { Component } from 'react';
import './SearchInput.css';

export default class SearchInput extends Component{
    render(){
        return(
            <div className='searchBar'>
                <label htmlFor='search'>Search:</label>
                <input type='search' id='search' placeholder="Search term"></input>
                <button>Search</button>
            </div>
        )
    }
} 