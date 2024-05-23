import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export default function Wishlist({ data }) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="mt-10">
      <h1 className="text-3xl text-center font-bold bg-gray-100 p-10">Books</h1>
      <select className="select w-full max-w-[150px] bg-green-400 text-white text-md font-bold my-6 block mx-auto">
        <option disabled selected>
          Sort By
        </option>
        <option>Rating</option>
        <option>Number of Pages</option>
        <option>Publisher Year</option>
      </select>
      <div className="mt-6 w-full">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:text-gray-800 border-b">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } dark:border-gray-600 dark:text-gray-600`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </Link>
          <Link
            to={`wishlist-books`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books</span>
          </Link>
        </div>
        <Outlet context={[data]} />
      </div>
    </div>
  );
}

Wishlist.propTypes = {
  data: PropTypes.array,
};
