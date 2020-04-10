import React, { Component } from 'react';
import './SearchInput.css';

export default class SearchInput extends Component{
    render(){
        return(
            <div>
                <label for='search'>Search:</label>
                <input type='search' id='search'></input>
                <button>Search</button>
            </div>
        )
    }
} 