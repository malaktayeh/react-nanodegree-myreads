import React from "react";

const AddBookButton = ({ showSearchPage, setShowSearchpage }) => {
    return(
        <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
        </div>
    )
}

export default AddBookButton;