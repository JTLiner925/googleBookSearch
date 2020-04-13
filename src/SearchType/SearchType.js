import React, { Component } from 'react';
import './SearchType.css';
import PrintType from '../PrintType/PrintType';
import BookType from '../BookType/BookType';

export default class SearchType extends Component{
    render(){
        return(
            <div className='SearchType'>
                <PrintType 
                handleSubmit={this.handleSubmit}
                error={this.props.error}
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}
                q={this.props.q}
                filter={this.props.filter}
                printType={this.props.printType}
                changeHandler={this.props.changeHandler}
                />
                <BookType 
                error={this.props.error}
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}
                q={this.props.q}
                filter={this.props.filter}
                printType={this.props.printType}
                changeHandler={this.props.changeHandler}/>
            </div>
        )
    }
} 