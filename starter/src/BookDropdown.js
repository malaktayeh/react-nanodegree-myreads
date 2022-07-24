import React from "react";
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom'

import * as BooksAPI from "./BooksAPI";

const BookDropdown = ({ book, change }) => {
    const location = useLocation();

    return(
        <div className="book-shelf-changer">
            <select 
                value={location.pathname === "/search" ? "none" : book.shelf } 
                onChange={(e) => {
                    BooksAPI.update(book, e.target.value);
                    change(book, e.target.value)}
                }>
                <option disabled>
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
    book: PropTypes.object.isRequired,
    change: PropTypes.func.isRequired
}  

export default BookDropdown; 