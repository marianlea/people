import PersonItem from "./PersonItem";

export default function MainPanel({ selectedPerson }) {
  return (
    <main className="main-panel border border-black bg-green-100">
      <PersonItem selectedPerson={selectedPerson} />
    </main>
  );
}
