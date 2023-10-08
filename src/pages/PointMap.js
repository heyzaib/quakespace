import PointMoon from "../components/PointMoon";
import { useState, useEffect } from "react";
import ChartDropdown from "../components/ChartDropdown";
import YearDropdown from "../components/YearDropdown";
import chartData from "../data/chartData";

function LandingPage() {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  const [resize, setResize] = useState(false);

  useEffect(() => {
    setYears(chartData.map((el) => el.year));
    // canvas resize event listener and function
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setResize(false);
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="App">
      <div className="moon-wrapper">
        <div className="filter-wrapper">
              <YearDropdown
                years={years}
                setSelectedYear={setSelectedYear}
                selectedYear={selectedYear}
              />
            </div>
        <PointMoon

          selectedYear={selectedYear}
        />
      </div>
    </div>
  );
}

export default LandingPage;
