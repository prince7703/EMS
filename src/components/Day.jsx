import React from 'react'

export default function Day({ days, onSelect }) {
  return (
    <div className='border border-emerald-500 rounded-md px-5 py-5'>
    <h3  className='font-semibold text-2xl text-center mt-1 mb-1' >Days</h3>
    <hr className=" border-emerald-500 my-4"/>
    <div>

    <ul className='text-xl flex flex-col space-y-3'>
      {days.map(day => (
        <li className='btn btn-accent' key={day.id} onClick={() =>
        {
          onSelect(day)

        } } >
        {day.id}.  {day.day} 
        </li>
      ))}
    </ul>
      </div>
  </div>
  )
}
