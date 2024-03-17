import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

 
export default function App({chartData}) {
  return (
    <LineChart 
      width={1000}
      height={600}
      data={chartData}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Line dataKey="value" fill="blue"  stroke="orange"  
            strokeWidth={3} 
            strokeDasharray="5 5"
            activeDot={{ r : 20 }}
            label
        />

    </LineChart>
  );
}
