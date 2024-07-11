import React, { useState } from 'react'
import Home from './Home/Home'

import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Assign from './components/Assign';
import AssignmentList from './components/AssignmentList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function App() {
   const [islogin,setlogin]= useState(true);
   const [assignments, setAssignments] = useState([]);
 
  return (
      <div >
        <Navbar islogin={islogin} />
        <Routes>
          <Route index path='/' element={<Home islogin={islogin}/> }/>
          <Route path='/login' element={<Login islogin={islogin} setlogin={setlogin} />} />
          <Route path='/assign'  element={islogin? <Assign islogin={islogin} assignments={assignments} setAssignments={setAssignments} /> :<Login islogin={islogin} setlogin={setlogin} />} />
          <Route path='/assignments'  element={ islogin?  <AssignmentList assignments={assignments} islogin={islogin} />:<Login islogin={islogin} setlogin={setlogin} />} />

        
        </Routes>

        <Footer/>
     
    </div>
  )
}
