import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"
import Books from "./books"

class BooksApp extends Component {
  render () {
    return (
        <div>
          <Route exact path = '/' render = {() => (
              <div>
              <Books/>
              </div>
          )}
          />

          <Route exact path = '/search' render = {() => (
              <div>
                  Search page
              </div>
          )}
          />
        </div>
    )
  }
}

export default BooksApp
