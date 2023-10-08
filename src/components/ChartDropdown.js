import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Link } from "react-router-dom";

import { useState } from "react";

export default function ChartDropdown() {
  const [chartParent] = useAutoAnimate(/* optional config */);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div ref={chartParent} className="dropdown">
      <div className="select" onClick={() => setShowDropdown(!showDropdown)}>
        <p>Analytics</p>
        <i className="arrow down"></i>
      </div>
      {showDropdown && (
        <div className="options-wrapper">
          <Link to="/linechart" className="dropdown-item">
            Line Analytics
          </Link>
          <Link to="/barchart" className="dropdown-item">
            Bar Analytics
          </Link>
        </div>
      )}
    </div>
  );
}
