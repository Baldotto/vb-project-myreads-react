import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookSelf extends Component{


    static propTypes = {
         books: PropTypes.array,        
      }

      state = {

        bookShelfs : [
          
          { "title": 'Currently reading', "type": 'currentlyReading' },
          { "title": 'Want to Read', "type": 'wantToRead' },
          { "title": 'Read', "type": 'read' }
          
        
        ]

      }

      

    render(){

       const { books } = this.props


       return (

        <div>
        {this.state.bookShelfs.map((bookShelf)=> (
          <div className="bookshelf" key={bookShelf.type}>
            <h2 className="bookshelf-title">{bookShelf.title}</h2>
              <div className="bookshelf-books">

                  <Book books={books.filter((book)=> book.shelf === bookShelf.type)} OnChangeBookShelf={this.props.OnChangeBookShelf} />
                
              </div>
          </div>
          ))}  
        </div>
       )
    }
}

export default BookSelf