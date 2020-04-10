import React, { Component } from 'react';
import './BookSearch.css';
import SearchInput from '../SearchInput/SearchInput';
import SearchType from '../SearchType/SearchType';

export default class SearchBar extends Component {
    render(){
        return (
            <header>
                <h1>Google Book Search</h1>
                <SearchInput />
                <SearchType />
            </header>
        )
    }
}