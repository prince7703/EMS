import React from 'react';

const ShiftList = ({ shifts, onSelect }) => (
  <div className='border border-emerald-500 rounded-md px-5 py-5'>
    <h3  className='font-semibold text-2xl text-center mt-1 mb-2'>Shifts</h3>
    <hr className=" border-emerald-500 my-4"/>
    <ul className='text-xl flex flex-col  space-y-3 '>
      {shifts.map(shift => (
        <li className='btn btn-primary'  key={shift.id} onClick={() => onSelect(shift)}>
          {shift.name} ({shift.time})
        </li>
      ))}
    </ul>
  </div>
);

export default ShiftList;
