import Globe from "react-globe.gl";
import surface from "../images/lunar-height.jpg";
import bumpMap from "../images/lunar-bumpmap.jpg";
import "../App.css";
import { useState, useEffect } from "react";
import globeData from "../data/globeData";

function Moon({ widthMultiplier, heightMultiplier, selectedYear }) {
  const [markersData, setMarkersData] = useState([]);
  const [ringsData, setRingsData] = useState([]);
  const [globeWidth, setGlobeWidth] = useState(window.innerWidth);
  const [globeHeight, setGlobeHeight] = useState(window.innerHeight);
  const [landingSites, setLandingSites] = useState([]);

  const fetchMarkerAndRingsData = async () => {
    const pointsData = globeData?.map((element) => {
      return {
        id: element.id,
        lat: element.lat,
        lng: element.long,
        label: `Magnitude: ${element.magnitude}`,
        blank: ``,
        magnitude: Number(element.magnitude),
        date: element.timestamp,
        year: Number(element.timestamp.substring(0, 4)),
        comment: element.comment,
      };
    });

    if (selectedYear) {
      const filteredPointsData = pointsData.filter(
        (el) => el.year === selectedYear
      );
      setMarkersData(filteredPointsData);
    } else {
      setMarkersData(pointsData);
    }

    const ringsData = pointsData.map((el) => {
      return {
        lat: el.lat,
        lng: el.lng,
        maxR: el.magnitude * 2,
        propagationSpeed: el.magnitude,
        repeatPeriod: 800,
        year: el.year,
      };
    });

    if (selectedYear) {
      const filtRingsData = ringsData.filter((el) => el.year === selectedYear);
      setRingsData(filtRingsData);
    } else {
      setRingsData(ringsData);
    }
  };

  useEffect(() => {
    fetchMarkerAndRingsData();

    const updateGlobeSize = () => {
      setGlobeWidth(window.innerWidth);
      setGlobeHeight(window.innerHeight);
    };
    
    window.addEventListener("resize", updateGlobeSize);

    return () => {
      window.removeEventListener("resize", updateGlobeSize);
    };
  }, [selectedYear]);

  return (
    <Globe
      width={globeWidth * widthMultiplier}
      height={globeHeight * heightMultiplier}
      globeImageUrl={surface}
      bumpImageUrl={bumpMap}
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      showGraticules={true}
      labelsData={markersData}
      labelText="blank"
      labelSize={1.7}
      labelColor={() => "#D9730D"}
      labelDotRadius={0.7}
      labelDotOrientation="top"
      pointsMerge={true}
      labelAltitude={0.009}
      labelLabel={(d) => `
            <div class='moon-label'>
                <div><b>${d.label}</b></div>
                <div>lat: ${d.lat}°</div>
                <div>lng: ${d.lng}°</div>
                <div class='comment__text'>${d.comment ?? " "}</div>
                <div>Happened:<i> ${d.date}</i></div>
            <div>
            `}
      ringsData={ringsData}
      ringColor={() => "#ff0000"}
      ringMaxRadius="maxR"
      ringPropagationSpeed={(d) => d.propagationSpeed}
      ringRepeatPeriod={(d) => d.repeatPeriod}
    />
  
  );
}

export default Moon;
