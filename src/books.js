import React, { Component } from "react"
import  List from "./List"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"


class Books extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    };

    render () {

        console.log("this is my props", this.props);

        const {books} = this.props;

        return(
            <div>
                <div className='list-books-title'>
                    <h1>MyReads Udacity Project 7</h1>
                </div>
                <div className='list-books-content'>
                    <div className='bookshelf'>
                        <h2 className='bookshelf-title'>
                            Currently Reading
                        </h2>
                        <div className='bookshelf-books'>
                            <ol className='books-grid'>
                                {books.map((books) =>
                                    <List
                                        key={books.id}
                                        books={books}
                                    />
                                )}

                            </ol>
                        </div>
                    </div>
                </div>
                <div className='open-search'>
                    <Link to='/search'>Add books</Link>
                </div>
            </div>
        )
    }
}

export default Books
