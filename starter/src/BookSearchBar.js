import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const BookSearchBar = ( props ) => {
    return(
        <div className="search-books-bar">
            <Link
                className="close-search"
                to="/"
            >
                Close
            </Link>
            <SearchInput />
      </div>
    )
}

export default BookSearchBar;