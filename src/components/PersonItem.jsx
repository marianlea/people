export default function PersonItem({ selectedPerson }) {
  return (
    <div className="person-item">
      <h1>{selectedPerson.name}</h1>
    </div>
  );
}
