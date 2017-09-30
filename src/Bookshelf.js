import React from 'react'
import Books from './Books'
import _ from 'lodash'

const BOOKS = [
  {
    cover: 'https://books.google.com/books/content?id=BwCQaeYMUfIC&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE72LwwgsViOzBCyAozsEsIqNLYlvfyXJ34jS6grUWHfQpCtziAE780FIVI6EHxli8lldjT_TcxjWlmIKK4gVbtTXQo94DZLTIIfqfboRRP-SS76vj0WKNttvjz0p8-u2wiIgavDX',
    // cover: 'http://books.google.com/books/content?id=ydtcufhxbayc&printsec=frontcover&img=1&zoom=1&imgtk=aflre72rritr6u5oug3iy_lphtl2nztvwauzynfe8duuc0vlyabeyeglzpandpewxe6rhi0c2ehrr9gv20lh2dtjpbcucs8ynh5vccah0y2icakotvrztcobqbsfp4ubdqqygisczfgn&source=gbs_api',
    title: 'Ender\'s Game',
    authors: 'Orson Scott Card',
  },
  {
    cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
    title: 'To Kill a Mockingbird',
    authors: 'Harper Lee',
  }
]

export default class Bookshelf extends React.Component {

  renderBookShelfChanger = () => {
    console.log('changed')
    return <BookShelfChanger shelves={this.props.shelves} currShelf={this.props.name}/>
  }

  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <Books books={BOOKS} changer={this.renderBookShelfChanger}/>
        </div>
      </div>
    )
  }
}

class BookShelfChanger extends React.Component {
  static defaultProps = {
    shelves: [],
    currShelf: ''
  }
  render () {
    const {shelves, currShelf } = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={currShelf}>
          <option value="none" disabled>Move to...</option>
          {
            shelves.map(shelf => <option value={_.camelCase(shelf)}>{shelf}</option>)
          }
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
