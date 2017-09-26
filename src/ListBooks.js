import React, { Component } from 'react'
import DisplayBook from './DisplayBook'


class ListBooks extends Component {

    

    render() {

        const types = ['Currently Reading', 'Want to Read', 'Read']
        
        return (
            <div className="list-books-content">
              <div>
                  { for (var i=0; i < types.length; i++) {
                    oliiii
                  }}
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <DisplayBook></DisplayBook>
                      </li>
                      <li>
                        <DisplayBook></DisplayBook>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <DisplayBook></DisplayBook>
                      </li>
                      <li>
                        <DisplayBook></DisplayBook>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <DisplayBook></DisplayBook>
                      </li>
                      <li>
                        <DisplayBook></DisplayBook>
                      </li>
                      <li>
                        <DisplayBook></DisplayBook>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default ListBooks