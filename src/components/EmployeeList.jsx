import React from 'react';

const EmployeeList = ({ employees, onSelect }) => (
  <div className='border border-emerald-500 rounded-md px-5 py-5'>
    <h3  className='font-semibold text-2xl text-center mt-1 mb-2' >Employees</h3>
    <hr className=" border-emerald-500 my-4"/>
    <div>

    <ul className='text-xl flex flex-col space-y-3'>
      {employees.map(employee => (
        <li className='btn btn-primary' key={employee.id} onClick={() =>
        {
          onSelect(employee)

        } } >
        {employee.id}.  {employee.name} 
        </li>
      ))}
    </ul>
      </div>
  </div>
);

export default EmployeeList;
