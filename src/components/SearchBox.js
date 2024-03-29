import React from "react";

function SearchBox({ searchField, searchChange }) {
  return (
    <div className="pa4">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
