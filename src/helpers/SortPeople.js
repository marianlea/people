export default function SortPeople(people) {
  return people.toSorted((a, b) => a.name.localeCompare(b.name));
}
