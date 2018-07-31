import React, { Component } from "react"
import { Link } from "react-router-dom"

class Books extends Component {
    render () {
        <div>
            Main Page!
            <div className='open-search'>
                <Link to='/search'>Add books</Link>
            </div>
        </div>
    }
}

export default Books
