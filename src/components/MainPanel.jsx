import PersonItem from "./PersonItem";

export default function MainPanel({
  selectedPerson,
  isMainPanelVisible,
  onBackClick,
  onShowMoreClick,
  isMoreDetailsVisible,
  isPersonItemVisible,
  isMobileOrTablet,
}) {
  return (
    <div
      className={`main-panel border border-black bg-green-100 w-full p-5
      ${isMainPanelVisible ? "visible" : "invisible"}`}
    >
      <div className="person-item min-w-full">
        {selectedPerson && selectedPerson.name ? (
          <PersonItem
            selectedPerson={selectedPerson}
            onShowMoreClick={onShowMoreClick}
            isMoreDetailsVisible={isMoreDetailsVisible}
            onBackClick={onBackClick}
            isPersonItemVisible={isPersonItemVisible}
          />
        ) : null}
      </div>
    </div>
  );
}
