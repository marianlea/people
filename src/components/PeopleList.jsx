import PeopleItem from "./PeopleItem";

export default function PeopleList({ people, onPersonSelect, selectedPerson }) {
  return (
    <ul className="people-list">
      {Object.keys(people).map((initial) => (
        <li key={initial}>
          <h1 className="text-lg text-gray-400 border-b border-gray-400 mt-2 mb-1 md:text-sm">
            {initial}
          </h1>
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
