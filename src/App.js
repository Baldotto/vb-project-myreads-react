import React, { Component } from 'react'
import BookSelf from './Components/Books/BookShelf'
import SearchBooks from './Components/Search/SearchBooks'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './External/BooksAPI'


class BooksApp extends Component {
  state = {
    
     books : []
  }

componentDidMount(){
  BooksAPI.getAll().then((books)=>{
    this.setState({books})
  })
}

  removeBook =  (book, target) => {
    this.setState((state) => ({
      books : state.books.filter((b)=>b.id !== book.id) 
    }))
  }

  changeBookShelf = (book, value) => {
    let { books } = this.state
    books = books.filter(b => b.id !== book.id).concat({
      ...book,
      shelf : value
      
    })
    
    BooksAPI.update(book,value)
    this.setState({books})
    
  };

  handleSearchTextChange = (searchText) => {
    this.setState({ booksLoaded: false })
    
    searchText = searchText || ' '
    
    BooksAPI.search(searchText, 10).then(searchResults =>
      this.setState({ 
        searchResults: searchResults.error ? [] : searchResults,
        booksLoaded: true
      })
    )
  }

  render() {
    return (

      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            
              <BookSelf 
                 books={this.state.books} 
                 OnChangeBookShelf={this.changeBookShelf}
              />    

                                       
          </div>
          <div className="open-search">
            <Link to='/search' >Add a book</Link>
          </div>
          </div>
        )} />

      <Route exact path='/Search' render={() => (
          <SearchBooks/>
        )} />

        
      </div>

      
    )
  }
}

export default BooksApp
