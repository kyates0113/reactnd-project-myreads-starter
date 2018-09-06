import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

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
		if(query){
			BooksAPI.search(query).then((searchResults) => {
				if(searchResults.error) {
					this.setState({searchResults:[]})
				} else {
					this.setState({searchResults: searchResults})
				}
			})
		} else {
			this.setState({searchResults: []})
		}
	}

	render() {
		return (
			<div className="search-books">
            	<div className="search-books-bar">
             		<Link
             			to="/" 
             			className="close-search"
             			>Close</Link>
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
              					changeShelf = {this.props.changeShelf}
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
