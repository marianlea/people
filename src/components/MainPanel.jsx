import PersonItem from "./PersonItem";

export default function MainPanel({
  selectedPerson,
  isMainPanelVisible,
  onBackClick,
  onShowMoreClick,
  isMoreDetailsVisible,
  isPersonItemVisible,
  detailsButtonText,
}) {
  return (
    <div
      className={`main-panel w-full min-h-screen overflow-hidden bg-green-100 pt-12 p-4 md:p-12
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
            detailsButtonText={detailsButtonText}
          />
        ) : null}
      </div>
    </div>
  );
}
