import React from "react";
import PropTypes from "prop-types";
import Books from "./Books";

const Shelves = ({ books, change }) => {
    return(
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">                    
                {books.filter(book => book.shelf === "currentlyReading").map(book => 
                  <Books book={book} change={change}/>      
                )}
              </ol>
            </div>
          </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books.filter(book => book.shelf === "wantToRead").map(book => 
                  <Books book={book} change={change}/>
                )}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books.filter(book => book.shelf === "read").map(book => 
                  <Books book={book} change={change}/>
                )}
            </ol>
          </div>
        </div>
      </div>
    )
}

Shelves.protoTypes = {
  books: PropTypes.array,
  change: PropTypes.func
}

export default Shelves;