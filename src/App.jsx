import "./App.css";
import Homepage from "./pages/Homepage";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import Landing from "./pages/Landing";

const delay = 2 * 1000;

function App() {
  const [isLoading, setLoading] = useState(true);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 991px)" });

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-full rounded-xl shadow-md">
      {isLoading ? (
        <Landing />
      ) : (
        <Homepage isMobileOrTablet={isMobileOrTablet} />
      )}
    </div>
  );
}

export default App;
