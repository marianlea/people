export default function SearchBar({ searchInput, setSearchInput }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <input
      type="text"
      value={searchInput}
      onChange={handleChange}
      className="border border-black my-3 w-full p-0.5 pl-1 text-xl md:text-base rounded-sm"
      placeholder="search"
    ></input>
  );
}
