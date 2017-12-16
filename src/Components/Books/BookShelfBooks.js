import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class BookShelfBooks extends Component {


    static propTypes = {
        books: PropTypes.array.isRequired,
        OnChangeBookShelf: PropTypes.func.isRequired
    }


    render() {

        const { books } = this.props

        return (
            <div className="bookshelf-books">
                <BooksGrid books={books} OnChangeBookShelf={this.props.OnChangeBookShelf} />
            </div>
        )
    }
}

export default BookShelfBooks