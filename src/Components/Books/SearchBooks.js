import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from '../../External/BooksAPI'
import BooksGrid from '../../Components/Books/BooksGrid'


class SearchBooks extends Component{

  state = {
    searchResults: []
  }

  handleSearchTextChange = (searchText) => {
        
    searchText = searchText || ' '
    
    BooksAPI.search(searchText, 10).then(searchResults =>
      this.setState({ 
        searchResults: searchResults.error ? [] : searchResults
      })
    )
  }

  render(){
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/" >Close</Link>
            <div className="search-books-input-wrapper">
              <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.searchText}
                onChange={(event)=>this.handleSearchTextChange(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
             <BooksGrid books={this.state.searchResults} OnChangeBookShelf={this.props.OnChangeBookShelf} />           
          </div>
        </div>
    )
  }
}

export default SearchBooks

