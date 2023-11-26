import React from "react";
import Logo from '../assets/logo.png';

const Navbar = () => {
    return (
        
        <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mr-10">
          <div className="flex h-28 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center mx-auto mr-40">
                <a href="index.html">
                  <img className="h-48 w-auto" src="logo.png" alt="Voyage Logo"/>
                </a>
              </div>
              <div className="hidden md:flex md:space-x-8 ">
                <a href="index.html" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"><b>Home</b></a>
                <a href="topDestinations.html" className="inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900"><b>Top Destinations</b></a>
                <a href="tourPackages.html" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"><b>Tour Packages</b></a>
                <a href="register.html" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"><b>Register</b></a>
                <a href="contactUs.html" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"><b>Contact Us</b></a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="login.html" target="_blank">
                  <button type="button" className="relative inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Login
                  </button>
                </a>
                
              </div>
              
            </div>
          </div>
        </div>
      
      </nav>
    
    );
}

export default Navbar;
