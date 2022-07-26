import React from "react";
import PropTypes from "prop-types";
import Books from "./Books";

const shelves = [
  { title: 'Currently Reading', key: 'currentlyReading' },
  { title: 'Want To Read', key: 'wantToRead' },
  { title: 'Read', key: 'read' }
];

const Shelves = ({ books, change }) => {
    return(
      <div className="list-books-content">
        {
          shelves.map(shelf => 
            <div key={shelf.key} className="bookshelf">
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">                    
                  {books.filter(book => book.shelf === shelf.key).map(book => 
                    <Books key={book.id} book={book} change={change} />      
                  )}
                </ol>
              </div>
          </div>
            )
        }
    </div>
  )
}

Shelves.protoTypes = {
  books: PropTypes.array.isRequired,
  change: PropTypes.func.isRequired
}

export default Shelves;