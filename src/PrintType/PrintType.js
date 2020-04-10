import React, { Component } from 'react';
import './PrintType.css';

export default class PrintType extends Component{
    render(){
        return(
            <div className='PrintType'>
                <label>
                   Print Type: 
                </label>
                <select className='printSelect'>
                    <option>All</option>
                </select>
            </div>
        )
    }
} 