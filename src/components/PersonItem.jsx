import Initials from "./Initial";
import MoreDetails from "./MoreDetails";

export default function PersonItem({
  selectedPerson,
  onShowMoreClick,
  isMoreDetailsVisible,
  onBackClick,
  isPersonItemVisible,
  isMobileOrTablet,
  detailsButtonText,
}) {
  return (
    <div
      className={`person-item w-full min-h-full
    ${isPersonItemVisible ? "visible" : "invisible"}`}
    >
      <button onClick={onBackClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </button>
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <Initials selectedPerson={selectedPerson} />
          <h1 className="mt-4 text-xl">{selectedPerson.name}</h1>
          <h3 className="mt-0.5 text-gray-500 text-lg">
            {selectedPerson.company.name}
          </h3>
        </div>
        <div
          className={`grid gap-2 my-4
        ${isMobileOrTablet ? "grid-cols-[15%_85%]" : "grid-cols-[40%_60%]"}`}
        >
          <div className="flex items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
          <div>{selectedPerson.phone}</div>
          <div className="flex items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div>{selectedPerson.email}</div>
        </div>
        <button className="border border-black" onClick={onShowMoreClick}>
          {detailsButtonText}
        </button>
        {isMoreDetailsVisible ? (
          <MoreDetails selectedPerson={selectedPerson} />
        ) : null}
      </div>
    </div>
  );
}
