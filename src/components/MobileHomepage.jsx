import MainPanel from "./MainPanel";
import SideBar from "./SideBar";

export default function MobileHomepage({
  selectedPerson,
  isMainPanelVisible,
  filteredPeople,
  searchInput,
  setSearchInput,
  handleSelectPerson,
  isSidebarVisible,
  onBackClick,
  onShowMoreClick,
  isMoreDetailsVisible,
  isPersonItemVisible,
}) {
  return (
    <div className="mobile-homepage h-full">
      {isMainPanelVisible ? (
        <MainPanel
          selectedPerson={selectedPerson}
          isMainPanelVisible={isMainPanelVisible}
          onBackClick={onBackClick}
          onShowMoreClick={onShowMoreClick}
          isMoreDetailsVisible={isMoreDetailsVisible}
          isPersonItemVisible={isPersonItemVisible}
        />
      ) : (
        <SideBar
          people={filteredPeople}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          selectedPerson={selectedPerson}
          onPersonSelect={handleSelectPerson}
          isSidebarVisible={isSidebarVisible}
        />
      )}
    </div>
  );
}
