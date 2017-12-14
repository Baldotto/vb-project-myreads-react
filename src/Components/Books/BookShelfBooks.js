import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelfBooks extends Component{


    static propTypes = {
         books: PropTypes.array.isRequired,
         OnChangeBookShelf: PropTypes.func.isRequired     
      }


    render(){

        const { books } = this.props

         return(
             <div className="bookshelf-books">

                  <ol className="books-grid" >
                      {books.map((book)=> (
                        <li key={book.id}>  
                        <Book book={book} OnChangeBookShelf={this.props.OnChangeBookShelf} />
                      </li>
                      ))}
                  </ol>
             </div>
         )   

    }

}

export default BookShelfBooks