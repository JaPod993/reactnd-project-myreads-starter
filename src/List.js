import React, { Component } from "react"
import PropTypes from "prop-types"

class List extends Component {

    static propTypes = {
      books: PropTypes.object.isRequired
    };

    render() {

        const { books } = this.props;

        return (
            <li>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover'>
                            <img
                                src={books.imageLinks.thumbnail}
                                alt={`book cover of ${books.title}`}
                            />
                        </div>
                        <div className='book-shelf-changer'>
                            <select>
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
