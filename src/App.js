import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"

class BooksApp extends React.Component {
  render () {
    return (
        <div>
          <Route exact path = '/' render = {() => (
              <div>
                Main page route
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
