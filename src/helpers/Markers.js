export default function Markers(people) {
  const markers = people.reduce((acc, person) => {
    const initial = person.name[0].toUpperCase();
    if (!acc[initial]) {
      acc[initial] = [];
    }

    acc[initial].push(person);
    return acc;
  }, {});
  return markers;
}
