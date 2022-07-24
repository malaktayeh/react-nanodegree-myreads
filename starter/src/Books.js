import React from "react";
import PropTypes from "prop-types";
import BookDropdown from "./BookDropdown";

const Books = ({ book, change }) => {
    return(
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <a target="_blank" rel="noreferrer" href={book.infoLink ? book.infoLink : ""}>
                        <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                            `url("${book.imageLinks.thumbnail}")`,
                        }}
                        ></div>
                    </a>
                    <BookDropdown book={book} change={change}/>
                </div>
                <div className="book-title">{book.title ? book.title : ""}</div>
                <div className="book-authors">{book.authors !== undefined && book.authors.length > 1 ? (book.authors.map(auth => `${auth}. `)) : `${book.authors}.`}</div>
            </div>
        </li>
    )
} 

Books.protoTypes = {
    book: PropTypes.object.isRequired,
    change: PropTypes.func.isRequired
}  

export default Books;