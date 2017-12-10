import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookSelf extends Component{





    static propTypes = {
        title : PropTypes.string.isRequired,
        books: PropTypes.array,        
      }

      state = {

        bookShelfs : [
          
                    { "title": 'Currently reading', "type": 'currently' },
                    { "title": 'Want to Read', "type": 'want' },
                    { "title": 'Read', "type": 'read' }
          
                  ]

      }

      

    render(){

       const { books } = this.props


       return (

        <div>
        {this.state.bookShelfs.map((bookShelf)=> (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelf.title}</h2>
              <div className="bookshelf-books">

                  <Book books={books.filter((book)=> book.bookShelf === bookShelf.type)} onRemoveBook={this.props.onRemoveBook} />
                
              </div>
          </div>
          ))}  
        </div>
       )
    }

}

export default BookSelf