import PeopleList from "./PeopleList";
import SearchBar from "./SearchBar";

export default function SideBar({
  searchInput,
  setSearchInput,
  people,
  selectedPerson,
  onPersonSelect,
}) {
  return (
    <div className={`search-bar shrink-0 w-full h-screen pt-12 p-4 md:p-12`}>
      <div>
        <h1 className="text-3xl font-majorMono">People</h1>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <PeopleList
          people={people}
          selectedPerson={selectedPerson}
          onPersonSelect={onPersonSelect}
          className="min-w-full"
        />
      </div>
    </div>
  );
}
