import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookSelf extends Component{

    static propTypes = {
        title : PropTypes.string.isRequired,
        books: PropTypes.array
        
      }

    render(){

       const { books } = this.props


       return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              
                 <Book books={books}  />
              
            </div>
        </div>
       )
    }

}

export default BookSelf