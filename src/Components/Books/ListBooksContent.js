import React, { Component } from 'react'
import BookSelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooksContent extends Component{

    static propTypes = {
      books: PropTypes.array.isRequired,
      OnChangeBookShelf: PropTypes.func.isRequired
    }


    render(){
        return(       
          <div className="list-books-content">
            <BookSelf 
                 books={this.props.books} 
                 OnChangeBookShelf={this.props.OnChangeBookShelf}
            />    
          </div>       
        )
    }
}

export default ListBooksContent