import React, { Component } from 'react';
import './BookSearch.css';
import SearchInput from '../SearchInput/SearchInput';
import SearchType from '../SearchType/SearchType';
const API_KEY = 'AIzaSyCq81ypL09vSFd4YnaucYabB95flDIKUcI';

export default class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          q: "",
          printType: [],
          filter: []
        };
      }
    
      qChanged(q) {
        this.setState({
          q
        });
      }
    
      printTypeChanged(printType) {
        this.setState({
          printType
        });
      }
    
      filterChanged(filter) {
        this.setState({
          filter
        });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const newSearch = (({q, printType, filter}) => ({q, printType, filter}))(this.state);
        const url ='https://www.googleapis.com/books/v1/volumes';
        const options = {
          method: 'GET',
        //   body: JSON.stringify(newSearch),
      headers: {
      'key': API_KEY
          }
        };
    
        fetch(url, options)
          .then(res => {
            if(!res.ok) {
              throw new Error('Something went wrong, please try again later');
            }
            return res.json();
          })
          .then(data => {
            this.setState({
              q: "",
              printType: [],
              filter: []
            });
            this.props.handleAdd(newSearch);
          })
          .catch(err => {
            this.setState({
              error: err.message
            });
          });
      }
    render(){
        // const searchSummary = Object.keys(this.props.selected)
    // const newSearch = searchSummary.map((q, printType, filter, idx) => {
    //   const featureHash = q + "-" + idx;
    //     const filterOption = this.props.selected[filter];

        const error = this.state.error 
          ? <div className="error">{this.state.error}</div>
          : "";
        //   console.log(error)
        return (
            
            <header>
                
                <form onSubmit={e => this.handleSubmit(e)}>
                <h1>Google Book Search</h1>
                
                <SearchInput
                updateFeature={this.props.updateFeature}
                q={this.props.q}
                filter={this.props.filter}
                printType={this.props.printType}
                selected={this.props.selected} 
                handleSubmit={this.handleSubmit}
                error={error}
                />
                <SearchType 
                handleSubmit={this.handleSubmit}
                error={error}
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}
                q={this.props.q}
                filter={this.props.filter}
                printType={this.props.printType}
                changeHandler={this.props.changeHandler}
                // filterOption={filterOption}
                />
                </form>
            </header>
        )
    };
    // return (
        
    //       {newSearch}
        
    // )
}
