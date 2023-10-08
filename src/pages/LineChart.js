import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import globeData from "../data/globeData";

const Diagram = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const chartsData = globeData?.map((element) => {
      return {
        magnitude: Number(element.magnitude),
        pv: Number(element.magnitude),
        year: element.timestamp?.substring(0, 10),
      };
    });

    setData(chartsData);
  }, []);

  return (
    <div className="App">
      <div className="chart__wrapper">
        {data && (
          <div style={{ width: "100%", height: 600 }}>
            <ResponsiveContainer>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 50,
                  right: 50,
                  bottom: 50,
                }}
              >
                <CartesianGrid />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="magnitude"
                  stroke="#11f7b6"
                  fill="#44b685"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diagram;
