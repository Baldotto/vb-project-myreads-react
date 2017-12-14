import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Book from '../Books/Book'
import * as BooksAPI from '../../External/BooksAPI'


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
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.searchText}
                  onChange={(event)=>this.handleSearchTextChange(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                      {this.state.searchResults.map((book)=> (
                        <li key={book.id}>  
                        <Book book={book} />
                      </li>
                      ))}
              </ol>              
            </div>
          </div>
        )

    }

}

export default SearchBooks

