import React from 'react'
import Categorizer from './Categorizer'

export default class Books extends React.Component {
  static defaultProps = {
    collection: [],
    changeShelf: x => x
  }

  render () {
    return (
      <ol className="books-grid">
        {
          this.props.collection.map((book={}) => {
            return (
              <li key={book.id}>
                <Book {...book} changeShelf={this.props.changeShelf}/>
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
    id: '',
    shelf: 'none',
    changeShelf: x => x,
  }

  handleChange = (shelf) => {
    this.props.changeShelf(this.props.id, shelf)
  }

  render () {
    const { cover, title, authors, shelf } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${cover})` }}></div>
          <Categorizer shelf={shelf} changeShelf={this.handleChange}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}
