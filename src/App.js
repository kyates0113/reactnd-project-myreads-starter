import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css';
import Home from './Home';
import Search from './Search';

class BooksApp extends React.Component {
  state = {


    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Home />
        <Search />
      </div>
    )
  }
}

export default BooksApp
