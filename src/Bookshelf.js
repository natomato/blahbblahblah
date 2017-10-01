import React from 'react'
import Books from './Books'
import _ from 'lodash'

const READING='Currently Reading'

export default class Bookshelf extends React.Component {
  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <Books collection={this.props.books}/>
        </div>
      </div>
    )
  }
}
