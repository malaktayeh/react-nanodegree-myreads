import React from "react";
import Shelves from "./Shelves";
import AddBookButton from "./AddBookButton";
import { useState } from "react";
import PropTypes from "prop-types";

const ShelvesView = ({ change, books} ) => {

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
    books: PropTypes.array,
    change: PropTypes.func
}

export default ShelvesView;