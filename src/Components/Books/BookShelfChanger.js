import React, { Component } from 'react'

class BookShelfChanger extends Component{

    render(){

            return(
                <div className="book-shelf-changer">
                    <select 
                    onChange={(e)=>this.props.OnChangeBookShelf(this.props.book, e.target.value)}
                    value="none1"
                    >
                    <option value="none1" disabled>Move to...</option>
                    <option value="currently">Currently Reading</option>
                    <option value="want">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none" >None</option>
                    </select>
                </div>
            )

    }

}

export default BookShelfChanger