import React from "react";

const SearchBar = props => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={}
          onChange={props.sort}
        />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={null} />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={event => props.onFilterChange(event)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          <option value="all">ALL</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
