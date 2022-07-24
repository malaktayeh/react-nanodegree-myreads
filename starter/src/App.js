import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import Shelves from "./Shelves";
import AddBookButton from "./AddBookButton";
import SearchView from "./SearchView";

import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  console.log(books)

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
    let newBooks = [...books];
    newBook.shelf = newShelf;

    let isBookOnShelf = false;
    let locationIntheBooksArray = 0;

    isBookOnShelf = books.filter(b => {
      if (book.id === b.id) return true
      return false;
    })

    // book on shelf -> change shelf to selected shelf
    if (isBookOnShelf) {
      locationIntheBooksArray = books.findIndex(el => {
        if (el.id !== book.id) locationIntheBooksArray++;
        else return true;
      })
      newBooks[locationIntheBooksArray] = newBook;
      setBooks(newBooks);
    }
    // new book -> add to respective shelf
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
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <Shelves books={books} change={changeToBooks} />
              <AddBookButton />
            </div>
        }/>

        <Route 
          path="/search" 
          element={
            // Show search book view
            <SearchView change={changeToBooks}/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
