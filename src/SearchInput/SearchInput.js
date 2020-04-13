import React from 'react';
import './SearchInput.css';

export default function SearchInput(props){
        const error = props.error 
          ? <div className="error">{props.error}</div>
          : "";
        return(
            <div className='searchBar'>
                { error }
                <label htmlFor='search'>Search:</label>
                <input type='search' id='search' placeholder="Search term" required></input>
                <button type='submit'
                onChange={e => this.changeSelection(e.target.value)}
                >Search</button>
            </div>
        )
} 