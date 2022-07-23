import "./App.css";
import { useState } from "react";
import Shelves from "./Shelves";
import AddBookButton from "./AddBookButton";
import BookSearchBar from "./BookSearchBar";
import Books from "./Books";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        // Book search view
        <div className="search-books">
          <BookSearchBar 
            showSearchPage={showSearchPage} 
            setShowSearchpage={setShowSearchpage}  
          />
          <div className="search-books-results">
            {/* Show result of query */}
            {/* <Books 
              books={''} 
            /> */}
          </div>
        </div>
      ) : (
        // Bookshelves view with respective books
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelves books={''}/>
          <AddBookButton 
            showSearchPage={showSearchPage} 
            setShowSearchpage={setShowSearchpage} 
          />
        </div>
      )}
    </div>
  );
}

export default App;
