import React, { Component } from "react"
import * as BooksAPI from "./BooksAPI"
import "./App.css"
import { Route } from "react-router-dom"
import Books from "./books"
import Search from "./search"

class BooksApp extends Component {

  state = {
    books: []
  };

  componentDidMount() {
    this.getMyBooks();
  }

  getMyBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
      console.log('My books are', this.state.books)
    });
  }



  render () {
    return (
        <div>
          <Route exact path = '/' render = {() => (
              <Books books={this.state.books}/>
          )}
          />

          <Route exact path = '/search' render = {() => (
              <Search/>
          )}
          />
        </div>
    )
  }
}

export default BooksApp
