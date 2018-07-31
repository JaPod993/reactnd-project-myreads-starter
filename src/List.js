import React, { Component } from "react"
import PropTypes from "prop-types"

class List extends Component {

    static propTypes = {
      books: PropTypes.object.isRequired,
      moveBooks: PropTypes.func.isRequired
    };

    render() {

        const { books, moveBooks } = this.props;

        return (
            <li>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover'>
                            <img
                                src={books.imageLinks ? books.imageLinks.thumbnail : "No image"}
                                alt={`book cover of ${books.title}`}
                            />
                        </div>
                        <div className='book-shelf-changer'>
                            <select
                                value={books.shelf ? books.shelf : 'none'}
                                onChange={(event) => moveBooks(books, event.target.value)}
                            >
                                <option value='move' disabled>Move to...</option>
                                <option value='currentlyReading'>Currently Reading</option>
                                <option value='wantToRead'>Want to Read</option>
                                <option value='read'>Read</option>
                                <option value='none'>None</option>
                            </select>
                        </div>
                    </div>
                    <div className='book-title'>
                        {books.title}
                    </div>
                    <div className='book-authors'>
                        {books.authors}
                    </div>
                </div>
            </li>
        )
    }
}

export default List
