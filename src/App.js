import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import DisplayBook from './DisplayBook'
import escapeRegExp from 'escape-string-regexp'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.refresher = this.refresher.bind(this);
    this.updateShelf = this.updateShelf.bind(this);
  }
  state = {
    showSearchPage: false,
    books : [],
    query: ''
  }

  refresher() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  componentDidMount() {
    this.refresher()
  }

  updateShelf( book, newShelf ) {  
    BooksAPI.update(book, newShelf).then(this.refresher);
  }

  searchBooks(query,limit) {
    BooksAPI.search(query, limit).then((data) => {
      this.setState( { query: query.trim(), books: data } )
    });
  }

  updateQuery = (query) => {
    this.setState( { query: query.trim() } )
  }

  clearQueue = () => {
    this.setState( { query: '' } )
  }

  render() {

    const { query } = this.state

    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={query}
                  onChange={(event) => {
                    this.searchBooks(event.target.value)
                    this.setState( { query: '' } )
                    }}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { query && this.state.books.map( book => (
                  <li key={book.id}>
                    <DisplayBook book={book} onMoving={ this.updateShelf }></DisplayBook>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )} />
          
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks books={ this.state.books }  searching={false} onMove={ this.updateShelf }></ListBooks>
            <div className="open-search">
              <Link to="/search">Search a book</Link>
            </div>
          </div>
        )} />
          
        
      </div>
    )
  }
}

export default BooksApp
