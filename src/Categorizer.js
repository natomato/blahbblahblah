import React from 'react'
import { SHELVES } from './constants'

export default class Categorizer extends React.Component {
  static defaultProps = {
    shelf: 'None',
    changeShelf: x => x
  }

  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.shelf
    }
  }

  move = (event) => {
    const shelf = event.target.value
    this.setState({ selected: shelf })
    this.props.changeShelf(shelf)
  }

  // option "none" is like delete, it removes a book from all bookshelves
  render () {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.selected} onChange={this.move}>
          <option value="none" disabled>Move to...</option>
          {
            SHELVES.map(({value, label}) => <option key={value} value={value}>{label}</option>)
          }
          <option value="None">None</option>
        </select>
      </div>
    )
  }
}
