import { PropagateLoader } from "react-spinners";

export default function Landing() {
  return (
    <div className="landing h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-majorMono mb-5">People</h1>
      <PropagateLoader color="#000" />
    </div>
  );
}
