import React from 'react';

const Search = () => {
  return (
<div>
    <form>
      <input type="text" className="form-control" id="query" name="query" placeholder="Search..." />
      <button type="submit" className="btn btn-danger mt-2">
        Go
      </button>
    </form>
</div>

  );
}

export default Search;
