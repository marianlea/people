import { People } from "../utils/people_api.js";
import { useState, useEffect } from "react";
import Markers from "../helpers/Markers.js";
import MobileHomepage from "../components/MobileHomepage.jsx";
import SortPeople from "../helpers/SortPeople.js";
import WebHomepage from "../components/WebHomepage.jsx";

export default function Homepage({ isMobileOrTablet }) {
  // State to hold the list of people
  const [people, setPeople] = useState([]);
  // State for the search input value
  const [searchInput, setSearchInput] = useState("");
  // State for the selected person
  const [selectedPerson, setSelectedPerson] = useState({});
  // State for sidebar visibility
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  // State for main panel visibility, initially set based on device type
  const [isMainPanelVisible, setMainPanelVisible] = useState(!isMobileOrTablet);
  // State for more details visibility
  const [isMoreDetailsVisible, setMoreDetailsVisible] = useState(false);
  // State for the details button text
  const [detailsButtonText, setDetailsButtonText] = useState("show more");
  // State for person item visibility, initially set based on device type
  const [isPersonItemVisible, setPersonItemVisible] =
    useState(isMobileOrTablet);

  // Function to fetch people data from the API
  const peopleData = async () => {
    try {
      // Fetch data from API
      const peopleData = await People.all();
      // Sort and set people data
      setPeople(Markers(SortPeople(peopleData)));
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect hook to fetch people data when the component mounts
  useEffect(() => {
    peopleData();
  }, []);

  // Filter the people data based on the search input
  const filteredPeople = Object.keys(people).reduce((acc, initial) => {
    const filtered = people[initial].filter((person) =>
      person.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (filtered.length > 0) {
      // Add filtered results to accumulator
      acc[initial] = filtered;
    }

    return acc;
  }, {});

  // Handle selecting a person from people list
  const handleSelectPerson = (person) => {
    // Set the selected person
    setSelectedPerson(person);
    if (isMobileOrTablet) {
      // Hide sidebar on mobile/tablet
      setSidebarVisible(false);
      // Show person item on mobile/tablet
      setPersonItemVisible(true);
    }
    // Show main panel
    setMainPanelVisible(true);
    // Show person item
    setPersonItemVisible(true);
  };

  // Handle the back button click from main panel
  const handleBackClick = () => {
    if (isMobileOrTablet) {
      // Hide main panel on mobile/tablet
      setMainPanelVisible(false);
      // Show side bar on mobile/tablet
      setSidebarVisible(true);
    } else {
      // Hide person item on desktop
      setPersonItemVisible(false);
    }
    // Hide more details
    setMoreDetailsVisible(false);
    setDetailsButtonText("show more");
  };

  // Handle the show more details button click
  const handleShowMoreDetails = () => {
    // Toggle more details visibility
    setMoreDetailsVisible((prev) => !prev);
    // Toggle button text
    setDetailsButtonText((prev) =>
      prev === "show more" ? "show less" : "show more"
    );
  };

  return (
    <div className="homepage">
      {isMobileOrTablet ? (
        <MobileHomepage
          selectedPerson={selectedPerson}
          isMainPanelVisible={isMainPanelVisible}
          filteredPeople={filteredPeople}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSelectPerson={handleSelectPerson}
          isSidebarVisible={isSidebarVisible}
          onBackClick={handleBackClick}
          onShowMoreClick={handleShowMoreDetails}
          isMoreDetailsVisible={isMoreDetailsVisible}
          isPersonItemVisible={isPersonItemVisible}
          isMobileOrTablet={isMobileOrTablet}
          detailsButtonText={detailsButtonText}
        />
      ) : (
        <WebHomepage
          selectedPerson={selectedPerson}
          isMainPanelVisible={isMainPanelVisible}
          filteredPeople={filteredPeople}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSelectPerson={handleSelectPerson}
          isSidebarVisible={isSidebarVisible}
          onBackClick={handleBackClick}
          onShowMoreClick={handleShowMoreDetails}
          isMoreDetailsVisible={isMoreDetailsVisible}
          isPersonItemVisible={isPersonItemVisible}
          isMobileOrTablet={isMobileOrTablet}
          detailsButtonText={detailsButtonText}
        />
      )}
    </div>
  );
}
