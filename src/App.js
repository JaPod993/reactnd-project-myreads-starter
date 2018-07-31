import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"
import Books from "./books"
import Search from "./search"

class BooksApp extends Component {

  state = {
    books: []
  };

  componetDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
      console.log('My books are', this.state.books)
    });
  }

  render () {
    return (
        <div>
          <Route exact path = '/' render = {() => (
              <div>
              <Books books={this.state.books}/>
              </div>
          )}
          />

          <Route exact path = '/search' render = {() => (
              <div>
                  <Search/>
              </div>
          )}
          />
        </div>
    )
  }
}

export default BooksApp
