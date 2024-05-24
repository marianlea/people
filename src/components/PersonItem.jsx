import Initials from "./Initial";
import MoreDetails from "./MoreDetails";

export default function PersonItem({
  selectedPerson,
  onShowMoreClick,
  isMoreDetailsVisible,
  onBackClick,
  isPersonItemVisible,
}) {
  return (
    <div
      className={`person-item
    ${isPersonItemVisible ? "visible" : "invisible"}`}
    >
      <button className="border border-black" onClick={onBackClick}>
        back
      </button>
      <div className="flex flex-col justify-center items-center ">
        <div className="text-center">
          <Initials selectedPerson={selectedPerson} />
          <h1>{selectedPerson.name}</h1>
          <h3>{selectedPerson.company.name}</h3>
        </div>
        <table>
          <tbody>
            <tr>
              <td>phone</td>
              <td>{selectedPerson.phone}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{selectedPerson.email}</td>
            </tr>
          </tbody>
        </table>
        <button className="border border-black" onClick={onShowMoreClick}>
          show more
        </button>
        {isMoreDetailsVisible ? (
          <MoreDetails selectedPerson={selectedPerson} />
        ) : null}
      </div>
    </div>
  );
}
