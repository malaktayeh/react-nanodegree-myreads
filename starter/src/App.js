import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import ShelvesView from "./ShelvesView";
import SearchView from "./SearchView";

import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // get books on shelves upon first render
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);


  const changeToBooks = (book, newShelf) => {
    // check if this book already is on one of our shelves, or if it a new book that needs to be added
    let newBook = book;
    
    BooksAPI.update(book, newShelf);

    let newBooks = [...books];
    newBook.shelf = newShelf;

    let isBookOnShelf = false;
    let locationIntheBooksArray = 0;

    for (let i = 0, l = books.length; i < l; i++) {
        if (book.id === books[i].id) {
          isBookOnShelf = true;
          break;
        }
    }

    // book on shelf -> change shelf to selected shelf locally
    if (isBookOnShelf) {
      // eslint-disable-next-line array-callback-return
      locationIntheBooksArray = books.findIndex(el => {
        if (el.id !== book.id) locationIntheBooksArray++;
        else return true;
      })
      newBooks[locationIntheBooksArray] = newBook;
      setBooks(newBooks);
    }
    // new book -> add to respective shelf locally
    else {
      newBooks.push(newBook);
      setBooks(newBooks);
    }
  }

  return (
    <div className="app">
      <Routes>

        <Route 
          exact path="/" 
          element={
            // Bookshelves view with respective books
            <ShelvesView 
              books={books} 
              change={changeToBooks} 
            />
        }/>

        <Route 
          path="/search" 
          element={
            // Show search book view
            <SearchView 
              change={changeToBooks} 
              searchInput={searchInput} 
              setSearchInput={setSearchInput} 
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
        }/>
      </Routes>

    </div>
  );
}

export default App;
