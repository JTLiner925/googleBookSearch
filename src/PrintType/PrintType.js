import React, { Component } from 'react';
import './PrintType.css';

export default class PrintType extends Component{
    changeSelection(value) {
        if (value === "None") {
          this.props.changeHandler(null);
        } else {
          const printType = this.props.industryIdentifiers.printType.find(
            printType => printType.name === value
          );
          this.props.changeHandler(printType);
        }
      }
    
      render() {
        const options = this.props.printType.map((printType, i) => (
          <option value={printType.name} key={i}>
            {printType.name}
          </option>
        ));
        console.log(options)
        return(
            <div className='PrintType'>
                <label htmlFor='printType'>
                   Print Type: 
                </label>
                <select 
                id="printType"
                name="printType"
                onChange={e => this.changeSelection(e.target.value)}
                className='printSelect'>
                    <option value="None">Select one...</option>
                    {options}
                </select>
            </div>
        )
    }
} 