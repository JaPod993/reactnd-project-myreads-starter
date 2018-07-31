import React, { Component } from "react"
import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import List from "./List"
import Books from "./books";

class Search extends Component {

    state = {
        query: [],
        fetched: []
    };

    fetch = (event) => {
        const query = event.target.value.trim();
        this.setState({query});

        if (query) {
            BooksAPI.search(query).then((books) => {
                (books instanceof Array) ? this.setState({fetched: books}) : this.setState({fetched: []})
            });
            console.log('Query:', query);
            console.log('fetched', this.state.fetched);
        }
    };

    render() {
        return (
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
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
