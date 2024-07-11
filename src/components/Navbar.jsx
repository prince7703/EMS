import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ islogin }) {
  console.log("yeah bro", islogin);

  return (
    <div className="shadow-md sticky top-0 z-50">
      <nav className="navbar bg-base-100 ">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to={'/'} >
            EMS
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-4">

          
            {islogin ? (
              <li>
                <Link to={'/logout'} className="btn btn-warning">
                  Logout
                </Link>
              </li>
            ) : 
            (
              <li>
                <Link to={"/login"} className="btn btn-error">
                  Login
                </Link>
              </li>
            )}
             { islogin && (
                <li>
                <Link to={"/assign"} className="btn btn-warning">
                  Start
                </Link>
              </li>
            )
        }
             { islogin && (
                <li>
                <Link to={"/assignments"} className="btn btn-warning">
                  View Assignments
                </Link>
              </li>
            )
        }
          </ul>
        </div>
      </nav>
    </div>
  );
}
