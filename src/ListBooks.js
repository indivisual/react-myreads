import React, { Component } from 'react'
import DisplayBook from './DisplayBook'


class ListBooks extends Component {

  render() {

    const types = [
      { slug: 'Currently Reading', tag: 'currentlyReading' },
      { slug: 'Want to Read', tag: 'wantToRead' },
      { slug: 'Read', tag: 'read' }
    ]
    
    const { books, onMove } = this.props
      
    return (
        <div className="list-books-content">
          <div>
          { types.map( (type, i) => (
            <div className="bookshelf" key={i}>
              <h2 className="bookshelf-title">{type.slug}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    books.filter( book => book.shelf === type.tag ).map( book => (
                      <li key={book.id}>
                        <DisplayBook book={book} onMoving={onMove}></DisplayBook>
                      </li>
                    ))       
                  }
                </ol>
              </div>
            </div>
            ))
          }
          </div>
        </div>
    )
  }
}

export default ListBooks