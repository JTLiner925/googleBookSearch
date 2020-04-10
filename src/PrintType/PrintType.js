import React, { Component } from 'react';
import './PrintType.css';

export default class PrintType extends Component{
    render(){
        return(
            <div>
                <label>
                   Print Type: <select value='All'></select>
                </label>
            </div>
        )
    }
} 