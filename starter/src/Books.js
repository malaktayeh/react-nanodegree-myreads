import React from "react";
import BookDropdown from "./BookDropdown";

const Books = ({ book }) => {
    return(
        <>
            <li>
                <div className="book">
                    <div className="book-top">
                        <a target="_blank" href={book.infoLink}>
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
                        <BookDropdown />
                    </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.length > 1 ? (book.authors.map(auth => `${auth}. `)) : `${book.authors}.`}</div>
                </div>
            </li>
        </>
    )
} 

export default Books;