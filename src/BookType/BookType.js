import React, { Component } from 'react';
import './BookType.css';

export default class BookType extends Component{
    render(){
        return(
            <div className='BookType'>
                <label>
                   Book Type: 
                </label>
                <select className='bookSelect'>
                    <option>No Filter</option>
                </select>
            </div>
        )
    }
} 