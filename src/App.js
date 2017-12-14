import React, { Component } from 'react'
import ListBooks from './Components/Books/ListBooks'
import SearchBooks from './Components/Books/SearchBooks'
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

  changeBookShelf = (book, value) => {
    let { books } = this.state
    books = books.filter(b => b.id !== book.id).concat({
      ...book,
      shelf : value
      
    })
    
    BooksAPI.update(book,value)
    this.setState({books})
    
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (                     
         <ListBooks
            books={this.state.books} 
            OnChangeBookShelf={this.changeBookShelf}
         />                                                  
        )} />
      <Route exact path='/Search' render={() => (
          <SearchBooks />
        )} />        
      </div>     
    )
  }
}

export default BooksApp
