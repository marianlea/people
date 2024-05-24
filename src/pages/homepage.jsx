import { useState, useEffect } from "react";
import PeopleApi from "../utils/people_api";
import SideBar from "../components/SideBar";
import MainPanel from "../components/MainPanel";

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

export default function Homepage() {
  const [people, setPeople] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedPerson, setSelectedPerson] = useState({});

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
  };

  return (
    <section className="homepage md:flex">
      <div className="md:flex">
        <SideBar
          people={filteredPeople}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          selectedPerson={selectedPerson}
          onPersonSelect={handleSelectPerson}
        />
        <MainPanel selectedPerson={selectedPerson} />
      </div>
    </section>
  );
}
