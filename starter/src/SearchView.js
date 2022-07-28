import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BookSearchBar from "./BookSearchBar";
import Books from "./Books";

import * as BooksAPI from "./BooksAPI";

const SearchView = ({ books, change, searchInput, setSearchInput, searchResults, setSearchResults}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let result; 

        const getBooks = async () => {
            try {
                // get data from BooksAPI
                const res =  await BooksAPI.search(searchInput, 50);  
                
                // if res is undefined or an error occured, reset searchResults
                if (typeof(res) === undefined) setSearchResults([]) 
                else if (res.error) setSearchResults([]) 
                // else save API data in state
                else {
                    // before saving query results, check if any of the books are already on a shelf
                    // if book is already on a shelf, add key value pair to result object
                    result = res.map(foundBook => {
                        return {
                            description: foundBook.description,
                            authors: foundBook.authors,
                            id: foundBook.id,
                            imageLinks: foundBook.imageLinks,
                            infoLink: foundBook.infoLink,
                            previewLink: foundBook.previewLink,
                            shelf: books.find(book => book.id === foundBook.id) ? 
                                books.find(book => book.id === foundBook.id).shelf : 
                                "none",
                            title: foundBook.title
                        }
                    })
                    setSearchResults(result);
                }
            } catch (err) {console.log(err.message)}
        };

        if (searchInput.trim() !== "") {
            getBooks();
        }

        setLoading(false)
    }, [books, searchInput, setSearchResults]);

    return(
        <div className="search-books">
            <BookSearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
            <div className="search-books-results">
                <ol className="books-grid">         
                    {
                    loading ? 
                        <li>Loading . . .</li> 
                        :
                        searchResults.length === 0 || searchInput === "" ?
                            <li>No results found. Try searching for something else.</li> 
                            :
                            searchResults.map(book => <Books key={book.id} book={book} change={change} /> )

                    }
                    
                </ol>
            </div>
        </div>
    )
}

SearchView.propTypes = {
    books: PropTypes.array.isRequired,
    change: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired,
    searchResults: PropTypes.array.isRequired,
    setSearchResults: PropTypes.func.isRequired
} 

export default SearchView;