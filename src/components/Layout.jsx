import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="drawer">
      {/* Checkbox for drawer toggle */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-base-100">
          <div className="flex-none">
            {/* Label toggles the drawer */}
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">ENTNT</a>
          </div>
        </div>

        {/* Main page content goes here */}
        <main className="p-4 flex justify-center items-center min-h-screen">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Drawer Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          className="drawer-overlay"
          aria-label="Close sidebar"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link to="/">Jobs</Link>
          </li>
          <li>
            <Link to="/candidates">Application</Link>
          </li>
          <li>
            <Link to="/assessment">Assessments</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
