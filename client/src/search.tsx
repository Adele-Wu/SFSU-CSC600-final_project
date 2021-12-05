const Search = () => (
    <form action="/" method="get">
      <input type="text" id="header-search" placeholder="Search Songs" name="s" />
      <button type="submit">Search</button>
      <button type="reset">Clear</button>
    </form>
  );

export default Search;