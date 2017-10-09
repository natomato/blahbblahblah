import React from 'react'
import Books from './Books'

export default class Bookshelf extends React.Component {
  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <Books collection={this.props.books} changeShelf={this.props.changeShelf}/>
        </div>
      </div>
    )
  }
}
