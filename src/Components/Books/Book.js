import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component{

  static propTypes = {
      books: PropTypes.array.isRequired,
      OnChangeBookShelf: PropTypes.func.isRequired
  }

    render(){
      //console.log('Props',this.props)
      const { books } = this.props

        return (
         
          <ol className="books-grid">
          {books.map((book)=> (
            <li key={book.id}>  
            <div className="book" >
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
                <BookShelfChanger  OnChangeBookShelf={this.props.OnChangeBookShelf} book={book} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
          ))}         
          </ol>)
  
    }
     

}

export default Book