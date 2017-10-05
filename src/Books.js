import React from 'react'
import Categorizer from './Categorizer'

export default class Books extends React.Component {
  static defaultProps = {
    collection: [],
    changeShelf: x => x
  }

  handleChangeShelf = (title) =>  {
    return (shelf) => this.props.changeShelf(title, shelf)
  }

  render () {
    return (
      <ol className="books-grid">
        {
          this.props.collection.map((book={}) => {
            return (
              <li key={book.title}>
                <Book {...book} changeShelf={this.handleChangeShelf(book.title)}/>
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
    changeShelf: x => x,
  }

  handleChange = (shelf) => {
    this.props.changeShelf(shelf)
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
