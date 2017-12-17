import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'
import * as BooksAPI from '../../External/BooksAPI'
import BooksGrid from '../../Components/Books/BooksGrid'


class SearchBooks extends Component {

  constructor() {
    super()
    this.state = {
      searchResults: []
    }
  }

  handleSearchTextChange = (searchText) => {

    searchText = searchText.trim()

    if (searchText.length > 0) {
      BooksAPI.search(searchText, 10).then((searchResults) =>
        this.props.myBooks.map((book) => (
          searchResults = searchResults.filter((b) => b.id !== book.id).concat(book),
          this.setState({
            searchResults: searchResults.error ? [] : searchResults
          })))
      )
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" >Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="100" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.searchText}
                onChange={(event) => this.handleSearchTextChange(event.target.value)}
              />
            </Debounce>
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

