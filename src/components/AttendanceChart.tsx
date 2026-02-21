"use client"
"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 73,
    absent: 22,
  },
  {
    name: 'Wed',
    present: 52,
    absent: 66,
  },
  {
    name: 'Thu',
    present: 82,
    absent: 19,
  },
  {
    name: 'Fri',
    present: 47,
    absent: 61,
  },
];


const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-gray-700">Attendance</h1>

    <Image
        src="/moreDark.png"
        alt="More options"
        width={20}
        height={20}
        className="cursor-pointer"
    />
</div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;