const SearchBox = ({ setSearchValue }) => {
  return (
    <input
      type="text"
      placeholder="search characters"
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchBox;
