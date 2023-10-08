import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import chartData from "../data/chartData";

export default function Chart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const mappedData = chartData.map(({ year, amount }) => {
      return { name: year, amount };
    });
    setData(mappedData);
  }, []);

  return (
    <div className="App">
      <div className="chart__wrapper">
        {data && (
          <div style={{ width: "100%", height: 600 }}>
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={70}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 35, right: 35 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="amount" fill="#44b685" animationDuration={1500} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
