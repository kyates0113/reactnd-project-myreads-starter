import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css';
import Home from './Home';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    bookList: []
  }

  componentDidMount(){
    BooksAPI.getAll().then(( books ) =>{
      this.setState({ bookList: books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then(( books ) =>{
      this.setState({ bookList: books })
    })
  }

  render() {
    return (
      <div className="app">
       {/* <Home 
          bookList={this.state.bookList}
          changeShelf={this.changeShelf}
        />*/}

        <Search />
       

      </div>
    )
  }
}

export default BooksApp
