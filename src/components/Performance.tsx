'use client'

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    { name: 'Group A', value: 82, fill: '#c3ebfa' },
    { name: 'Group B', value: 18, fill: '#fae27c' },
]

const Performance = () => {
    return (
        <div className='bg-white p-4 rounded-md h-80 relative'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Performance</h1>
                <Image src="/moreDark.png" alt="" width={16} height={16} />
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        fill="#8884d8"
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className='text-xl font-bold'>8.2</h1>
                <p className='text-xs text-gray-300'>out of 10</p>
            </div>
            <h2 className='absolute font-medium top-2/3 text-center left-0 right-0'>1st Semester - 2nd Semester</h2>
        </div>
    )
}

export default Performance