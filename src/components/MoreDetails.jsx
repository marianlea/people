export default function MoreDetails({ selectedPerson }) {
  return (
    <div className="more-details">
      <table>
        <tbody>
          <tr>
            <td colSpan="2">Address</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>{selectedPerson.address.street}</td>
          </tr>
          <tr>
            <td>Suite</td>
            <td>{selectedPerson.address.suite}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{selectedPerson.address.city}</td>
          </tr>
          <tr>
            <td>Zipcode</td>
            <td>{selectedPerson.address.zipcode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
