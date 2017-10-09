import React from 'react'
import { Route } from 'react-router-dom'
import Main from './Main'
import Search from './Search'
import { update, getAll } from './BooksAPI'
import './App.css';

export default class BooksApp extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    getAll().then(books => {
      const results = books.map(book => {
        return {
          title: book.title,
          authors: book.authors,
          cover: book.imageLinks.smallThumbnail,
          shelf: book.shelf,
          id: book.id
        }
      })
      this.setState({books: results})
    })
  }

  handleChangeShelf = (id, shelf) => {
    update({id}, shelf).then(this.getAllBooks)
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => <Main books={this.state.books} changeShelf={this.handleChangeShelf} />}
        />
        <Route
          path='/search'
          render={() => <Search changeShelf={this.handleChangeShelf} />}
        />
      </div>
    )
  }
}
