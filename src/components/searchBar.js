import React, {  useState } from "react";

const Search = React.memo(({ getSearchKeyword }) => {
  const [searchInput, setSearchInput] = useState("");

  

 const searchData = (e) => {
   e.preventDefault()
  getSearchKeyword(searchInput)
  }

  return (
     <div style={{ width: '100vw' }}>
          <form
            onSubmit={(e) => this.searchItem(e)}
            style={{
              width: '100%',
              textAlign: 'center',
              display: 'block',
              border: '0px solid black ',
            }}
            className="form-inline mt-2 mt-md-0"
          >
            <input
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              onClick={(e) => searchData(e)}
              className="searchBttn"
              type="submit"
            >
              Go
            </button>
          </form>
        </div>
  );
});

export default Search;