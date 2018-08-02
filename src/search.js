import React, { Component } from "react"
import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import List from "./List"
import { PropTypes } from "prop-types";
import { Debounce } from 'react-throttle';

class Search extends Component {

    static propTypes = {
      books: PropTypes.array.isRequired,
      moveBooks: PropTypes.func.isRequired
    };

    state = {
        fetched: []
    };

    fetch = (event) => {
        const query = event.target.value;

        if (query !== '') {
            BooksAPI.search(query).then((books) => {
                if (typeof books === "object" && books.error) {
                    console.log('brak wynikow');
                } else {
                    books.map((book) => {
                        this.props.books.map((b) => {
                            (b.id === book.id ? book.shelf = b.shelf : "none");
                        })
                    });
                }
                this.setState({ fetched: books && books.length ? books : [] });
            });
        }  else if (query === '') {
            this.setState({ fetched: [] });
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
                            <Debounce time="200" handler="onChange">
                                <input
                                    type='text'
                                    placeholder='Search by title or author'
                                    onChange={this.fetch}
                                />
                            </Debounce>
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
