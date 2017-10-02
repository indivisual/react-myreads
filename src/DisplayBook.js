import React, { Component } from 'react'


class DisplayBook extends Component {

    state = { value: '' };

    render() {

        const { book, onMoving } = this.props
        let section = book.shelf !== undefined ? book.shelf : 'none';

        return (
            <div className="book">
               
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
               
                <div className="book-shelf-changer">
                    
                    <select value={section} onChange={(event) => onMoving(book, event.target.value)}>
                        
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.authors }</div>
            </div>
        )
    }
}

export default DisplayBook