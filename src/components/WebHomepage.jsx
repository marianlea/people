import MainPanel from "./MainPanel";
import SideBar from "./SideBar";

export default function WebHomepage({
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
  isMobileOrTablet,
  detailsButtonText,
}) {
  return (
    <div className="web-homepage">
      <div className="md: grid col-auto grid-cols-2">
        <SideBar
          people={filteredPeople}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          selectedPerson={selectedPerson}
          onPersonSelect={handleSelectPerson}
          isSidebarVisible={isSidebarVisible}
          isMobileOrTablet={isMobileOrTablet}
        />
        <MainPanel
          selectedPerson={selectedPerson}
          isMainPanelVisible={isMainPanelVisible}
          onBackClick={onBackClick}
          onShowMoreClick={onShowMoreClick}
          isMoreDetailsVisible={isMoreDetailsVisible}
          isPersonItemVisible={isPersonItemVisible}
          isMobileOrTablet={isMobileOrTablet}
          detailsButtonText={detailsButtonText}
        />
      </div>
    </div>
  );
}
