import React from "react"
import { Link } from "react-router-dom"
import reactLogo from "../assets/reactLogo.png"
function Navbar() {
  return (
    <div className="sticky inset-x-0 top-0 w-full z-30">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
        <div className="flex justify-between items-center px-4">
          <div>
            <img className="size-20" src={reactLogo} alt="" />
          </div>
          <nav>
            <ul className="flex flex-row space-x-4 p-4">
              <li>
                <Link to="/about-us" className="text-gray-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
          <div className="space-x-2">
            <Link className="btn-login">Login</Link>
            <Link className="btn-login">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
