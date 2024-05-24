export default function MoreDetails({ selectedPerson }) {
  return (
    <div className="more-details">
      <div className="more-details">
        <div className="grid grid-cols-[40%_60%] gap-2 my-4">
          <div className="text-end text-lg">Address</div>
          <div></div>
          <div className="text-end">Street</div>
          <div>{selectedPerson.address.street}</div>
          <div className="text-end">Suite</div>
          <div>{selectedPerson.address.suite}</div>
          <div className="text-end">City</div>
          <div>{selectedPerson.address.city}</div>
          <div className="text-end">Zipcode</div>
          <div>{selectedPerson.address.zipcode}</div>
        </div>
      </div>
    </div>
  );
}
