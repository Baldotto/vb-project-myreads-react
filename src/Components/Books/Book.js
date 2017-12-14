import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component{

  static propTypes = {
      book: PropTypes.object.isRequired,
      OnChangeBookShelf: PropTypes.func.isRequired
  }

    render(){
      //console.log('Props',this.props)
      //const { books } = this.props

        return (        
          <div className="book" >
             <div className="book-top">
               <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + this.props.book.imageLinks.smallThumbnail + ')' }}></div>
               <BookShelfChanger  OnChangeBookShelf={this.props.OnChangeBookShelf} book={this.props.book} />
             </div>
             <div className="book-title">{this.props.book.title}</div>
             <div className="book-authors">{this.props.book.authors}</div>
           </div>
            
        ) 
    }
}

export default Book