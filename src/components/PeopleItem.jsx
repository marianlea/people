export default function PeopleItem({ person, onClick, selectedPerson }) {
  return (
    <li
      className={
        selectedPerson && selectedPerson.id === person.id
          ? "bg-green-400"
          : "bg-transparent"
      }
      onClick={onClick}
    >
      {person.name}
    </li>
  );
}
