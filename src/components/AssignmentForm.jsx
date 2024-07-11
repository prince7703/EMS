import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import ShiftList from './ShiftList';
import AssignmentList from './AssignmentList';
import Day from './Day';
// import { AppContext } from "../context";
const AssignmentForm = ({ days,employees, shifts, onAssign }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedShift, setSelectedShift] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleAssign = () => {
    if (selectedEmployee && selectedShift && setSelectedDay) {
      onAssign(selectedEmployee, selectedShift,selectedDay);
    }
  };

  return (
    <div>
      {/* <h3>Assign Employee to Shift</h3> */}
      <div className='flex  justify-around  items-baseline mt-8'>
       {
        console.log("wrker",employees)
       }
      <EmployeeList employees={employees} onSelect={setSelectedEmployee} />
      <Day  days={days} onSelect={setSelectedDay} />
      <ShiftList shifts={shifts} onSelect={setSelectedShift} />
      </div>
      <div className='w-screen flex items-center justify-center mt-2'>
      <button  className='btn btn-error mt-5 text-white'  onClick={handleAssign}>Assign</button>

      </div>

      <div>
        {/* <AssignmentList assignments={assignments} islogin={islogin}/> */}
      </div>
    </div>
  );
};

export default AssignmentForm;
