import React, { Component } from "react"
import { Link } from "react-router-dom"

class Books extends Component {
    render () {
        <div>
            <div className='list-books-title'>
                <h1>MyReads Udacity Project 7</h1>
            </div>
            <div className='open-search'>
                <Link to='/search'>Add books</Link>
            </div>
        </div>
    }
}

export default Books
