import React from 'react'
import _ from 'lodash'
import { SHELVES } from './constants'

export default class Categorizer extends React.Component {
  static defaultProps = {
    shelf: ''
  }

  move () {
    //TODO: edit a book
  }

  //option none is to remove a book from all bookshelves
  render () {
    return (
      <div className="book-shelf-changer">
        <select value={_.camelCase(this.props.shelf)} onChange={this.move}>
          <option value="none" disabled>Move to...</option>
          {
            SHELVES.map(shelf => <option value={_.camelCase(shelf)}>{shelf}</option>)
          }
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
