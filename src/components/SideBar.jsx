import PeopleList from "./PeopleList";
import SearchBar from "./SearchBar";

export default function SideBar({
  searchInput,
  setSearchInput,
  people,
  selectedPerson,
  onPersonSelect,
  isSidebarVisible,
  isMobileOrTablet,
}) {
  return (
    <div
      className={`search-bar shrink-0 w-full p-5
    ${isSidebarVisible ? "visble" : "invisible"}`}
    >
      <h1 className="text-xl">People</h1>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <PeopleList
        people={people}
        selectedPerson={selectedPerson}
        onPersonSelect={onPersonSelect}
        className="min-w-full"
      />
    </div>
  );
}
