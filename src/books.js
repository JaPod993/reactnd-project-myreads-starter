import React, { Component } from "react"
import  List from "./List"
import { Link } from "react-router-dom"


class Books extends Component {
    render () {
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
                            <List/>
                        </ol>
                    </div>
                </div>
            </div>
            <div className='open-search'>
                <Link to='/search'>Add books</Link>
            </div>
        </div>
    }
}

export default Books
