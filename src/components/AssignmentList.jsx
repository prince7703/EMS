import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AssignmentList = ({ assignments,islogin }) => (
  <div className='w-screen flex flex-col justify-center items-center'>
    {/* <Navbar islogin={islogin}/> */}
    <h3 className='text-2xl text-center font-semibold mt-4 mb-6'>Assignments</h3>
    { console.log("inside ass list",assignments) }
    <ul className='min-h-screen w-6/12 flex flex-col space-y-3'>

      {assignments.map((assignment, index) => (
        <li className='px-3 py-2 bg-green-800 w-full text-white ' key={index}>

            <div className='flex justify-between text-white'>
                <span>
          
          {assignment.employee.id}. {" "}
          {assignment.employee.name} 
                </span>
                <span>
                {assignment.day.day} 
                </span>
                <span>

           {assignment.shift.name}
                </span>

                <span>

            ({assignment.shift.time})
                </span>

            </div>


        </li>
      ))}
    </ul>

    {/* <Footer/> */}
  </div>
);

export default AssignmentList;
