import "./App.css";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Landing from "./pages/Landing";

// Set a delay of 2 seconds (2000 milliseconds)
const delay = 2 * 1000;

function App() {
  // Define a state variable for loading status, initialized to true
  const [isLoading, setLoading] = useState(true);
  // Define a media query for mobile or tablet devices with a max-width of 991px
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 991px)" });

  // useEffect hook to set a timer that updates the loading status after the delay
  useEffect(() => {
    let timer = setTimeout(() => {
      // Set loading to false after the delay
      setLoading(false);
    }, delay);

    // Clean up the timer on component unmount to avoid memory leaks
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
