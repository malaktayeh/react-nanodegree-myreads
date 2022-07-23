import React from "react";
import PropTypes from "prop-types";

import * as BooksAPI from "./BooksAPI";

const BookDropdown = ({ book, change }) => {
    return(
        <div className="book-shelf-changer">
            <select 
                value={book.shelf ? book.shelf : 'none'} 
                onChange={(e) => {
                    BooksAPI.update(book, e.target.value);
                    change(book, e.target.value)}
                }>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookDropdown.protoTypes = {
    book: PropTypes.object,
    change: PropTypes.func
  }  

export default BookDropdown; 