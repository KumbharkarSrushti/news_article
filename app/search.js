import React from 'react';

const Search = () => {
  return (
<div className="search-container">
    <form  className="search-form">
      <input type="text" className="form-control" id="query" name="query" placeholder="Search..." />
      <button type="submit" className="btn btn-danger">Go</button>
    </form>
</div>

  );
}

export default Search;
