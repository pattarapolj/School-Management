'use client';

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
        name: 'Mon',
        Present: 60,
        Absent: 40,
    },
    {
        name: 'Tue',
        Present: 70,
        Absent: 60,
    },
    {
        name: 'Wed',
        Present: 75,
        Absent: 30,
    },
    {
        name: 'Thu',
        Present: 80,
        Absent: 30,
    },
    {
        name: 'Fri',
        Present: 73,
        Absent: 22,
    }
];

const AttendanceChart: React.FC = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                    />
                    <YAxis
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false} 
                    />
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray", background: "#F7FCFE" }} />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar
                        dataKey="Present"
                        fill="#FAE27C"
                        legendType='circle'
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="Absent"
                        fill="#C3EBFA"
                        legendType='circle'
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart;