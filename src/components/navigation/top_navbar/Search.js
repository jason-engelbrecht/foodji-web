import React from 'react';
import './Search.scss';

function Search() {
    return (
        <form className="Search d-flex input-group w-auto">
            <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                size="50"
            />
            <button className="btn btn-outline-dark" type="button" data-ripple-color="dark">
                <i className="fas fa-search"/>
            </button>
        </form>
    )
}

export default Search;
