import React from 'react'
import _ from 'lodash'

export default class Books extends React.Component {
  static defaultProps = {
    books: [],
    changer: () => { throw Error('Missing a function to render book selector') },
  }

  render () {
    return (
      <ol className="books-grid">
        {
          this.props.books.map((book={}) => {
            return (
              <li key={book.title}>
                <Book {...book} changer={this.props.changer} />
              </li>
            )
          })
        }
      </ol>
    )
  }
}

class Book extends React.Component {
  static defaultProps = {
    cover: 'https://books.google.com/books/content?id=Sg32DAAAQBAJ&printsec=frontcover&img=1&zoom=5',
    title: 'none',
    authors: 'unknown',
    changer: _.noop,
  }

  render () {
    const { cover, title, authors } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${cover})` }}></div>
          { this.props.changer() }
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}
