import React from "react";
import PropTypes from "prop-types";
import Shelves from "./Shelves";
import AddBookButton from "./AddBookButton";

const ShelvesView = ({ change, books }) => {

    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Shelves books={books} change={change} />
            <AddBookButton />
        </div>
    )
}

ShelvesView.propTypes = {
    books: PropTypes.array.isRequired,
    change: PropTypes.func.isRequired
}

export default ShelvesView;