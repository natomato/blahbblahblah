import React from 'react'
import Books from './Books'
import * as BooksAPI from './BooksAPI'

export default class Bookshelf extends React.Component {
  handleChangeShelf = (title, shelf) => {
    this.props.changeShelf(title, shelf);
  }

  componentWillMount () {
    //TODO: get books
    // BooksAPI.getAll().then((result) => this.setState({collection: result}))
  }

  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <Books collection={this.props.books} changeShelf={this.handleChangeShelf}/>
        </div>
      </div>
    )
  }
}
