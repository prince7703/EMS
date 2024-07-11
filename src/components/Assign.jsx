import React, { useState } from 'react';
// import EmployeeList from './EmployeeList';
// import ShiftList from './ShiftList';
import AssignmentForm from './AssignmentForm.jsx';
import AssignmentList from './AssignmentList';
import Navbar from './Navbar';
import Footer from './Footer';

const Assign = ({islogin,assignments, setAssignments}) => {
  const [employees] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Cat' },
    { id: 4, name: 'Don' },
    // Add more employees as needed
  ]);

  const [shifts] = useState([
    { id: 1, name: 'Morning', time: '9 AM - 1 PM' },
    { id: 2, name: 'Afternoon', time: '1 PM - 5 PM' },
    { id: 3, name: 'Evening', time: '4 PM - 9 PM' },
    { id: 4, name: 'Night', time: '7 PM - 12 PM' },
    // Add more shifts as needed
  ]);

  const [days]=useState([
   { id:1,day:'Monday'},
   { id:2,day:'Tueday'},
   { id:3,day:'Wednesday'},
   { id:4,day:'Thursday'},
   { id:5,day:'Friday'},
   { id:6,day:'Saturday'},

  ])

  // const [assignments, setAssignments] = useState([]);

  const handleAssign = (employee, shift,day) => {
    setAssignments([...assignments, { employee, shift,day }]);
    console.log("inside assign",assignments)
  };

  return (
 
    <div>
      {/* <Navbar islogin={islogin} /> */}
      <div className='min-h-screen '>

     <u>
      <h1 className='font-semibold text-3xl text-center mt-6'>Employee Shift Assignment</h1>
      
      </u> 
      <AssignmentForm days={days} employees={employees} shifts={shifts} onAssign={handleAssign} />
      {/* <AssignmentList assignments={assignments} /> */}
      </div>
      {/* <Footer/> */}
    </div>

  );


};

export default Assign;
