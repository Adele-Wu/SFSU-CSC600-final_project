const Search = () => (
    <form action="/" method="get">
      <input type="text" id="header-search" placeholder="Search Songs" name="s" />
      <button type="submit">Search</button>
      <button type="reset">Clear</button>
      <select name="Filters" id="Filters">
        <option disabled selected>Filters</option>
        <option value="song">Song</option>
        <option value="artist">Artist</option>
        <option value="album">Album</option>
      </select>
    </form>
  );

export default Search;