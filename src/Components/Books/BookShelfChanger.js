import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {

    static propTypes = {
        //books: PropTypes.array.isRequired,
        OnChangeBookShelf: PropTypes.func.isRequired
    }


    render() {

        return (
            <div className="book-shelf-changer">
                <select
                    onChange={(e) => this.props.OnChangeBookShelf(this.props.book, e.target.value)}
                    value="move"
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
        )

    }

}

export default BookShelfChanger