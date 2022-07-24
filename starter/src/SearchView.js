import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BookSearchBar from "./BookSearchBar";
import Books from "./Books";

import * as BooksAPI from "./BooksAPI";

const SearchView = ({ change }) => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getBooks = async () => {
            try {
                // get data from BooksAPI
                const res =  await BooksAPI.search(searchInput, 50);  
                
                // if res is undefined or an error occured, reset searchResults
                if (typeof(res) === undefined) setSearchResults([]) 
                else if (res.error) setSearchResults([]) 
                // else save API data in state
                else setSearchResults(res);
            } catch (err) {console.log(err.message)}
        setLoading(false)
        };
    
        getBooks();
    }, [searchInput]);

    return(
            <div className="search-books">
                <BookSearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
                    <div className="search-books-results">
                        {console.log(loading)}
                        {console.log(searchResults)}
                        <ol className="books-grid">         
                            {
                            loading ? 
                                <p>Loading . . .</p> :
                                searchResults.map(book => <Books book={book} key={book.id} change={change} /> )
                            }
                            
                        </ol>
                    </div>
                </div>
    )
}

SearchView.propTypes = {
    change: PropTypes.func
} 

export default SearchView;