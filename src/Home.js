import React, {Component} from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';

class Home extends Component {

	render() {
		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     
                        {
                          this.props.bookList
                            .filter(book => book.shelf === 'currentlyReading')
                            .map(book => (
                              <li key={book.id}>
                              <Book 
                                book={book}
                                changeShelf={this.props.changeShelf}
                                shelf="currentlyReading"
                                />
                              </li>
                            ))
                        }
                     
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                          this.props.bookList
                            .filter(book => book.shelf === 'wantToRead')
                            .map(book => (
                              <li key={book.id}>
                              <Book
                              book={book}
                              changeShelf={this.props.changeShelf}
                              shelf="wantToRead"
                               />
                              </li>
                            ))
                        }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                          this.props.bookList
                            .filter(book => book.shelf === 'read')
                            .map(book => (
                              <li key={book.id}>
                              <Book 
                              book={book}
                              changeShelf={this.props.changeShelf}
                              shelf="read"
                              />
                              </li>
                            ))
                        }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link 
                to = "/Search"
              >Add a book</Link>
            </div>
          </div>
		);
	}
};

export default Home;
