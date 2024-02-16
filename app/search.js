import React from 'react';

const Search = () => {
  return (
    <div class="row">
      <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>search</button>
    </div>
  );
}

export default Search;
