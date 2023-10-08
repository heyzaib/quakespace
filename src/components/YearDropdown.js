import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useState } from "react";

export default function YearDropdown({ years, setSelectedYear, selectedYear }) {
  const [chartParent] = useAutoAnimate(/* optional config */);
  const [showDropdown, setShowDropdown] = useState(false);

  const yearsContainer = () => {
    return (
      <div className="options-wrapper">
        <p
          className="dropdown-item"
          onClick={() => {
            setSelectedYear(null);
            setShowDropdown(false);
          }}
        >
          All
        </p>
        <div>
          {years.map((el, index) => {
            return (
              <p
                className="dropdown-item"
                key={index}
                onClick={() => {
                  setShowDropdown(false);
                  setSelectedYear(el);
                }}
              >
                {el}
              </p>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div ref={chartParent} className="dropdown">
      <div className="select" onClick={() => setShowDropdown(!showDropdown)}>
        {selectedYear ? <p>{selectedYear}</p> : <p>Years (Time Period)</p>}

        <i className="arrow down"></i>
      </div>

      {showDropdown && yearsContainer()}
    </div>
  );
}
