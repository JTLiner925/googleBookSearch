import React, { Component } from 'react';
import './SearchType.css';
import PrintType from '../PrintType/PrintType';
import BookType from '../BookType/BookType';

export default class SearchType extends Component{
    render(){
        return(
            <div className='SearchType'>
                <PrintType />
                <BookType />
            </div>
        )
    }
} 