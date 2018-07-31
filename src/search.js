import React, { Component } from "react"
import { Link } from "react-router-dom"

class Search extends Component {
    render() {
        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <div className='search-books-input-wrapper'>
                        <input
                            type='text'
                            placeholder='Search by title or author'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
