function SearchBar({ search, setSearch }) {
  return (
    <input
      className="bg-gray-100 rounded p-1 mr-2 w-65"
      type="text"
      placeholder="Buscar producto"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;