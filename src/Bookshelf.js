import React from 'react'
import Books from './Books'

export default class Bookshelf extends React.Component {
  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <Books />
        </div>
      </div>
    )
  }
}
