import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import PropTypes from "prop-types";


const BookSearchBar = ({ searchInput, setSearchInput }) => {
    return(
        <div className="search-books-bar">
            <Link
                className="close-search"
                to="/"
            >
                Close
            </Link>
            <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    )
}

BookSearchBar.propTypes = {
    searchInput: PropTypes.string,
    setSearchInput: PropTypes.string
}


export default BookSearchBar;