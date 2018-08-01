import React, { Component } from "react"
import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import List from "./List"
import { PropTypes } from "prop-types";

class Search extends Component {

    static propTypes = {
      books: PropTypes.array.isRequired,
      moveBooks: PropTypes.func.isRequired
    };

    state = {
        fetched: []
    };

    fetch = (event) => {
        const query = event.target.value.trim();

        if (query) {
            BooksAPI.search(query).then((books) => {
                (books instanceof Array) ? this.setState({fetched: books}) : this.setState({fetched: []});
            });
        }
    };

    render() {

        const {moveBooks} = this.props;

        return (
            <div>
                <div className='search-books'>
                    <div className='search-books-bar'>
                        <Link className='close-search' to='/'>Back</Link>
                        <div className='search-books-input-wrapper'>
                            <input
                                type='text'
                                placeholder='Search by title or author'
                                onChange={this.fetch}
                            />
                        </div>
                    </div>
                    <div className='search-books-results'>
                        <ol className='books-grid'>
                            {this.state.fetched.map(book => (
                                <List
                                    key= {book.id}
                                    books={book}
                                    moveBooks={moveBooks}
                                />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
