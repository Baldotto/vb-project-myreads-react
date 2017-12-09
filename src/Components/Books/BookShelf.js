import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookSelf extends Component{

    static propTypes = {
        title : PropTypes.string.isRequired,
        booksWant: PropTypes.array.isRequired
      }

    render(){

       const { booksWant } = this.props


       return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              
                 <Book books={booksWant} />
              
            </div>
        </div>
       )
    }

}

export default BookSelf