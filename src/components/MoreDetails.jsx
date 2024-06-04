export default function MoreDetails({ selectedPerson }) {
  return (
    <div className="more-details">
      <div className="more-details">
        <div className="grid grid-cols-[40%_60%] gap-2 my-4">
          <div className="text-end text-lg text-gray-500">Address</div>
          <div></div>
          <div className="text-end text-gray-600">Street</div>
          <div>{selectedPerson.address.street}</div>
          <div className="text-end text-gray-600">Suite</div>
          <div>{selectedPerson.address.suite}</div>
          <div className="text-end text-gray-600">City</div>
          <div>{selectedPerson.address.city}</div>
          <div className="text-end text-gray-600">Zipcode</div>
          <div>{selectedPerson.address.zipcode}</div>
        </div>
      </div>
    </div>
  );
}
