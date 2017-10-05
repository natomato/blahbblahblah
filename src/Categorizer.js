import React from 'react'
import _ from 'lodash'
import { SHELVES } from './constants'

export default class Categorizer extends React.Component {
  static defaultProps = {
    shelf: '',
    changeShelf: x => x
  }

  move = (event) => {
    const shelf = event.target.value
    this.props.changeShelf(shelf)
  }

  //option none is to remove a book from all bookshelves
  render () {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.shelf} onChange={this.move}>
          <option value="none" disabled>Move to...</option>
          {
            SHELVES.map(shelf => <option value={shelf}>{shelf}</option>)
          }
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
