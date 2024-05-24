export default function PeopleItem({ person, onClick, selectedPerson }) {
  return (
    <li
      className={`mb-1 text-xl md:text-base
        ${
          selectedPerson && selectedPerson.id === person.id
            ? "bg-green-100 rounded"
            : "bg-transparent"
        }`}
      onClick={onClick}
    >
      <h1 className="ml-2 p-1">{person.name}</h1>
    </li>
  );
}
