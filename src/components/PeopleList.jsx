import PeopleItem from "./PeopleItem";

export default function PeopleList({ people, onPersonSelect, selectedPerson }) {
  return (
    <ul className="people-list">
      {Object.keys(people).map((initial) => (
        <li key={initial}>
          {initial}
          <ul>
            {people[initial].map((person) => (
              <PeopleItem
                key={person.id}
                person={person}
                onClick={() => onPersonSelect(person)}
                selectedPerson={selectedPerson}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
