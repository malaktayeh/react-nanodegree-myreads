import React from "react";
import PropTypes from "prop-types";

const BookDropdown = ({ book, change }) => {
    
    return(
        <div className="book-shelf-changer">
            <select 
                value={book.shelf ? book.shelf : "none" } 
                onChange={(e) => change(book, e.target.value)}
                >
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