import React, { Component } from 'react';
import './BookType.css';

export default class BookType extends Component{
    render(){
        return(
            <div>
                <label>
                   Book Type: <select value='No Filter'></select>
                </label>
            </div>
        )
    }
} 