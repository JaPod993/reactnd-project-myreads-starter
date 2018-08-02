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
    this.getBooks();
  };

  // fetching books form api
  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
      console.log('My books are', this.state.books)//
    });
  };//

  // Moving books to shelfs
  moveBooks = (book, shelf) => {
      // this part was suggested in my udacity review, thank you for this
      BooksAPI.update(book, shelf);
      book.shelf = shelf;
      this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat(book),
      }));
      console.log(`Book ${book.title} moved to ${shelf}`);//
  };

  render () {
    return (
        <div>
          <Route exact path = '/' render = {() => (
              <Books
                  books={this.state.books}
                  moveBooks={this.moveBooks}
              />
          )}
          />

          <Route exact path = '/search' render = {() => (
              <Search
                  books={this.state.books}
                  moveBooks={this.moveBooks}
              />
          )}
          />
        </div>
    )
  }
}

export default BooksApp
