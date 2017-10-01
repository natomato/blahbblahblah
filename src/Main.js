import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import { BOOKS, SHELVES } from './constants'

export default class Main extends React.Component {
  getBooksForShelf(name) {
    return BOOKS.filter(book => book.shelf === name)
  }

  render () {
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            {
              SHELVES.map(shelf => {
                return (
                  <Bookshelf key={shelf} name={shelf} books={this.getBooksForShelf(shelf)} />
                )
              })
            }
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      )
  }
}
