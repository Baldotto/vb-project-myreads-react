import React, { Component } from 'react'
//import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import BookSelf from './Components/Books/BookShelf'
import './App.css'

const booksCurrently = [
  {
    "id": "enders_game",
    "title": "Ender's Game",
    "author": "Orson Scott Card",
    "cover": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
  },
  {
    "id": "arte_da_guerra",
    "title": "Arte da Guerra",
    "author": "Sun Tzu",
    "cover": "https://books.google.com.br/books/content?id=-9V0VX65hCEC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE734UphxFuGTScjHilPPc6jn5TgwA98zehWgCF7dpoaCO9QS3tImhhNC9WoKX_AP4rg6j6ev4oETnvdSN-QxYQrt9Rgn0RafQbxU9ehxojATykgpAUDS7btIk6woLja7829Fqubi"
  },
  {
    "id": "harry_pedra",
    "title": "Harry Potter e a Pedra Filosofal",
    "author": "J.K. Rowling",
    "cover": "https://books.google.com.br/books/content?id=GjgQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70TPBEBRX3mvSbRFXeY4fmOSpUV-58-vFoVQQX6FPmIyDB0dp08Wh24oawXJvYXSLNWvj5z3t64R1AHB8kJq-_sZFglqsFfRdyfhpkD3h7WAO6wOD05AMbJ0nDbrwILOtlwfHZS"
  }
]

const booksWant = [
  {
    "id": "1776",
    "title": "1776",
    "author": "David McCullough",
    "cover": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
  }
]

const booksRead = [
  {
    "id": "hobbit",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "cover": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
  },
  {
    "id": "go",
    "title": "Oh, the Places You'll Go!",
    "author": "Seuss",
    "cover": "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
  }
]

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookSelf books={booksCurrently} title="Currently Reading" />
                <BookSelf books={booksWant} title="Want to Read" />
                <BookSelf books={booksRead} title="Read" />                
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
