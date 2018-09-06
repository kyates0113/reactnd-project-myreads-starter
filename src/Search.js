import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
	state = {
		query: '',
		searchResults: []
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		})
		this.getSearchedBooks(query)
	}

	getSearchedBooks = (query) => {
		BooksAPI.search(query).then((searchResults) => {
			this.setState({searchResults: searchResults})
		})
	}

	render() {


		return (
			<div className="search-books">
            	<div className="search-books-bar">
             		<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              		<div className="search-books-input-wrapper">
                 		<input 
                 			type="text" 
                 			placeholder="Search by title or author"
                 			value ={this.state.query}
                 			onChange={(event) => 
                 				this.updateQuery(event.target.value)
            
                 			}
                 		/>
		            </div>
        		</div>
            	<div className="search-books-results">
              		<ol className="books-grid">
              			{this.state.searchResults.map(searchResults => (
              				<li key={searchResults.id}> 
              				<Book 
              					book={searchResults}
          					/>
          					</li>
              			))
              		}

              		</ol>
            	</div>
          	</div>
		);
	}

}

export default Search;
