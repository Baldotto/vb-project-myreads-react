import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {



    static propTypes = {
        OnChangeBookShelf: PropTypes.func.isRequired
    }


    render() {

        return (
            <div className="book-shelf-changer">
                <select
                    onChange={(e) => this.props.OnChangeBookShelf(this.props.book, e.target.value)}
                    value={this.props.book.shelf === "currentlyReading"
                        || this.props.book.shelf === "wantToRead"
                        || this.props.book.shelf === "read" ? this.props.book.shelf : "none"}
                >
                    <option value="none" disabled >Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none" defaultValue="true">None</option>
                </select>
            </div>
        )

    }

}

export default BookShelfChanger