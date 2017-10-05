import React from 'react'
import Books from './Books'
import _ from 'lodash'

export default class Bookshelf extends React.Component {
  handleChangeShelf = (title, shelf) => {
    this.props.changeShelf(title, shelf);
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
