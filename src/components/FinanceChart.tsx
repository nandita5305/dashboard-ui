"use client";

import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Feb', content: 3000, completed: 1398 },
    { name: 'Mar', content: 2000, completed: 9800 },
    { name: 'Apr', content: 2780, completed: 3908 },
    { name: 'May', content: 1890, completed: 4800 },
    { name: 'Jun', content: 2390, completed: 3800 },
    { name: 'Jul', content: 3490, completed: 4300 },
    { name: 'Aug', content: 3490, completed: 4300 },
    { name: 'Sep', content: 4100, completed: 2500 },
    { name: 'Oct', content: 3200, completed: 2100 },
    { name: 'Nov', content: 3800, completed: 2800 },
    { name: 'Dec', content: 4500, completed: 3200 },
    { name: 'Jan', content: 4000, completed: 2400 },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
            <XAxis dataKey="name" axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false} tickMargin={10}/>
            <YAxis axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
            />
            <Tooltip />
            <Legend
                align="center"
                verticalAlign="top"
                wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line type="monotone" dataKey="content" stroke="#C3EBFA" strokeWidth={5}/>
            <Line type="monotone" dataKey="completed" stroke="#CFCEFF" strokeWidth={5}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;