import "./App.css";
import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Shelves from "./Shelves";
import AddBookButton from "./AddBookButton";
import BookSearchBar from "./BookSearchBar";
import Books from "./Books";

function App() {

  return (
    <div className="app">
      <Routes>

        <Route 
          exact path="/" 
          element={
            // Bookshelves view with respective books
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <Shelves books={''}/>
              <AddBookButton />
            </div>
        }/>

        <Route 
          path="/search" 
          element={
            // Show search book view
            <div className="search-books">
              <BookSearchBar />
              <div className="search-books-results">
                {/* Show result of query */}
                {/* <Books 
                  books={''} 
                /> */}
              </div>
            </div>
        }/>
        
      </Routes>
    </div>
  );
}

export default App;
