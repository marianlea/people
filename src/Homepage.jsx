import { useState, useEffect } from "react";

import PeopleApi from "./utils/people_api";
import MobileHomepage from "./components/MobileHomepage";
import WebHomepage from "./components/WebHomepage";

const user = {
  id: 0,
  name: "Reno Ichikawa",
  username: "Reno8",
  email: "reno@kaiju8.jp",
  address: {
    street: "Sakura Lane",
    suite: "Apt. 108",
    city: "Narashino",
    zipcode: "275-0026",
    geo: {
      lat: "35.6839",
      lng: "140.1233",
    },
  },
  phone: "81-80-1234-5678",
  website: "kaiju8.jp",
  company: {
    name: "Defence Force",
    cathPhrase: "Protecting humanity from Kaiju threats",
    bs: "eliminate kaiju efficiently",
  },
};

export default function Homepage({ isMobileOrTablet }) {
  const [people, setPeople] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedPerson, setSelectedPerson] = useState({});
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isMainPanelVisible, setMainPanelVisible] = useState(!isMobileOrTablet);
  const [isMoreDetailsVisible, setMoreDetailsVisible] = useState(false);
  const [isPersonItemVisible, setPersonItemVisible] =
    useState(isMobileOrTablet);

  const peopleData = async () => {
    try {
      const peopleData = await PeopleApi.all();
      setPeople(peopleData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    peopleData();
  }, []);

  const filteredPeople = Object.keys(people).reduce((acc, initial) => {
    const filtered = people[initial].filter((person) =>
      person.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[initial] = filtered;
    }

    return acc;
  }, {});

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
    if (isMobileOrTablet) {
      setSidebarVisible(false);
      setPersonItemVisible(true);
    }
    setMainPanelVisible(true);
    setPersonItemVisible(true);
  };

  const handleBackClick = () => {
    if (isMobileOrTablet) {
      setMainPanelVisible(false);
      setSidebarVisible(true);
    } else {
      setPersonItemVisible(false);
    }
    setMoreDetailsVisible(false);
  };

  const handleShowMoreDetails = () => {
    isMoreDetailsVisible
      ? setMoreDetailsVisible(false)
      : setMoreDetailsVisible(true);
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
        />
      )}
    </div>
  );
}