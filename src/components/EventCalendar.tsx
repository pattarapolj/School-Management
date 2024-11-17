"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary data
const events = [
  {
    id: 1,
    title: 'Event 1',
    time: '12:00 PM - 1:00 PM',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Event 2',
    time: '1:00 PM - 2:00 PM',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Event 3',
    time: '2:00 PM - 3:00 PM',
    description: 'Description 3',
  },
  {
    id: 4,
    title: 'Event 4',
    time: '3:00 PM - 4:00 PM',
    description: 'Description 4',
  },
  {
    id: 5,
    title: 'Event 5',
    time: '4:00 PM - 5:00 PM',
    description: 'Description 5',
  }
]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date()); 
  return (
    <div className=''>
      <Calendar className='bg-white p-4 rounded-md ' onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className='flex flex-col'>
        {events.map(event => (
          <div className="p-5 rounded-md border-gray-100 border-t-4 odd:border-t-sky even:border-t-purpleTheme" key={event.id}>
            <div className='flex items-center justify-between'>
               <h1 className='font-semibold text-gray-600'>{event.title}</h1>
               <span className='text-gray-300 text-xs'>{event.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar