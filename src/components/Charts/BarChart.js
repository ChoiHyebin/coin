import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



export default function App({chartData}) {
  return (
    <BarChart
    //   layout={'vertical'}
      width={1000}
      height={600}
      data={chartData}
    //   barCategoryGap={10}
    //   barGap={20}
      barSize={10}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8"  /> 
    </BarChart>
  );
}
