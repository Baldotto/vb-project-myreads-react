import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component{

  static propTypes = {
      book: PropTypes.object.isRequired,
      OnChangeBookShelf: PropTypes.func.isRequired
  }

    render(){

      const { book } = this.props

        return (        
          <div className="book" >
             <div className="book-top">
               <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
               <BookShelfChanger  OnChangeBookShelf={this.props.OnChangeBookShelf} book={book} />
             </div>
             <div className="book-title">{book.title}</div>
             <div className="book-authors">{book.authors}</div>
           </div>
            
        ) 
    }
}

export default Book