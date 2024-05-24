export default function SearchBar(props) {
  const handleChange = (e) => {
    props.setSearchInput(e.target.value);
  };
  return (
    <input
      type="text"
      value={props.searchInput}
      onChange={handleChange}
      className="border border-black"
    ></input>
  );
}
