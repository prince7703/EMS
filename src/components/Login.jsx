import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Login({islogin,setlogin}) {
  return (
<>


    <div className=' flex flex-col items-center justify-center min-h-[90vh]'>

      <div className='border border-emerald-500 rounded-md px-5 py-5'>
       <form action="">
        <h1 className='text-3xl mb-4 text-center'>Login form</h1>
        <hr className=" border-emerald-500 my-4"/>
        <div  className='space-y-4 mt-5'>
      

  <input type="text" className="input input-bordered flex items-center gap-2" placeholder="Email" />
  <input type="password" className="input input-bordered flex items-center gap-2" placeholder="password" />

    </div>
    <div className='w-full flex justify-center'>
    <button className='btn btn-success mt-6'> Login</button>

    </div>
    </form> 
      </div>

    </div>


    </>  
  )
}
