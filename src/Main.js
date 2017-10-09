import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import { SHELVES } from './constants'

export default class Main extends React.Component {
  static defaultProps = {
    books: []
  }
  getBooksForShelf(shelf) {
    return this.props.books.filter(book => book.shelf === shelf)
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
              SHELVES.map(({label, value}) => {
                return (
                  <Bookshelf
                    key={value}
                    name={label}
                    books={this.getBooksForShelf(value)}
                    changeShelf={this.props.changeShelf}
                  />
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
