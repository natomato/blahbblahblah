import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import Main from './Main'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Main}/>
        <Route path='/search' component={Search}/>
      </div>
    )
  }
}

export default BooksApp
