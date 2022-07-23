import React from "react";
import SearchInput from "./SearchInput";

const BookSearchBar = ({ showSearchPage, setShowSearchpage}) => {
    return(
        <div className="search-books-bar">
            <a
                className="close-search"
                onClick={() => setShowSearchpage(!showSearchPage)}
            >
                Close
            </a>
            <SearchInput />
      </div>
    )
}

export default BookSearchBar;