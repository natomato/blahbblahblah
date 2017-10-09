import React from 'react'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import Books from './Books'
import _ from 'lodash'

export default class Search extends React.Component {

  constructor () {
    super()
    this.state = {
      search: '',
      searchResults: [],
      error: ''
    }
    this.searchBooks = _.debounce(this.searchBooks, 200)
  }

  handleSearchTerm = (event) => {
    const term = event.target.value
    this.setState({
      search: term
    })
    if (term) {
      this.searchBooks(term)
    }
  }

  searchBooks(term) {
    search(term, 20).then(books => {
      if (!books || books.error) {
        this.setState({
          search: term,
          error: books ? books.error : `No books found for query: "${term}"`
        })
      } else {
        const results = books.map(book => {
          const {title, authors, imageLinks, id} = book;
          return {
            title,
            authors,
            cover: imageLinks ? imageLinks.smallThumbnail : null,
            id
          }
        })
        this.setState({
          error: '',
          search: term,
          searchResults: results
        })
      }
    })
  }

  render () {
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.search}
                onChange={this.handleSearchTerm}
              />
            </div>
          </div>
          <div className="search-books-results">
            {
              this.state.error ?
                <p>{this.state.error}</p>
              :
                <ol className="books-grid">
                  <Books collection={this.state.searchResults} changeShelf={this.props.changeShelf} />
                </ol>
            }
          </div>
        </div>
    )
  }
}
