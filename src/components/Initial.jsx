export default function Initials({ selectedPerson }) {
  return (
    <div className="flex justify-center text-center items-center mt-6">
      <div className="w-24 h-24 rounded-full bg-red-200 flex justify-center text-center items-center">
        <h1 className="text-6xl">{selectedPerson.name[0]}</h1>
      </div>
    </div>
  );
}
