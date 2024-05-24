import "./App.css";
import Homepage from "./pages/Homepage";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 991px)" });

  return (
    <div className="h-full rounded-xl shadow-md">
      <Homepage isMobileOrTablet={isMobileOrTablet} />
    </div>
  );
}

export default App;