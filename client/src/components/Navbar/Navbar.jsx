import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          HowS My College
        </Link>
        <div className="flex items-center justify-center flex-grow">
          <div className="relative">
            {/* Search College Input */}
            <input
              type="text"
              placeholder="Search College"
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 absolute left-3 top-3 text-gray-400 dark:text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 17a8 8 0 100-16 8 8 0 000 16zm8.707-1.293a1 1 0 11-1.414 1.414l-3.292-3.292a7 7 0 111.414-1.414l3.292 3.292z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Add Photo Button - Linked to AddPhoto component */}
          <Link to="/AddPhoto" className="bg-primary-600 text-white px-3 py-1 rounded-md font-medium focus:outline-none hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 dark:text-white">
            Add Photo
          </Link>
          {/* Profile Button */}
          <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md font-medium focus:outline-none hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
            Profile
          </button>
          {/* Dark/Light Mode Toggle Button */}
          {/* <button className="focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
