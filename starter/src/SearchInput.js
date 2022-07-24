import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ searchInput, setSearchInput }) => {

    return(
        <div className="search-books-input-wrapper">
            <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
    )
}


SearchInput.propTypes = {
    searchInput: PropTypes.string,
    setSearchInput: PropTypes.func.isRequired
}

export default SearchInput;