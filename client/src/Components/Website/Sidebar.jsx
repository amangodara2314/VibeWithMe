import React, { useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { logoutAction } from "../../Reducers/user";

const Sidebar = () => {
  const { user } = useSelector((store) => store.user);
  const [logout, setLogout] = useState(false);
  const dispatcher = useDispatch();

  return (
    <>
      <div
        className={`w-full min-h-screen ${
          logout ? "flex" : "hidden"
        } items-center justify-center fixed top-0 left-0 bg-gray-900 bg-opacity-50`}
      >
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Logout Confirmation</h2>
          <p className="text-gray-700 mb-6">Are you sure you want to logout?</p>
          <div className="flex justify-between">
            <button
              onClick={() => {
                dispatcher(logoutAction());
                setLogout(false);
              }}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Yes, Logout
            </button>
            <button
              onClick={() => {
                setLogout(false);
              }}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#121212] text-white h-full">
        {/* Sidebar Header */}
        <div className="p-4">
          <div className="text-2xl font-semibold">VibeWithMe</div>
          <hr className="mt-3 text-gray-400" />
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul className="p-2">
            <li className="mb-2">
              <Link
                to="/"
                className="flex items-center cursor-pointer px-4 gap-3 py-2 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white group"
              >
                <TiHome className="text-xl text-white group-hover:text-blue-500 duration-100" />
                <span className="text-lg">Home</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/fav"
                className="flex items-center cursor-pointer gap-3 px-4 py-2 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white group"
              >
                <MdOutlineFavorite className="text-xl text-white group-hover:text-red-500 duration-100" />
                <span className="text-lg">Favorites</span>
              </Link>
            </li>
            <li className="px-2 flex gap-4">
              {user ? (
                <div
                  onClick={() => {
                    setLogout(true);
                  }}
                  className="flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white group"
                >
                  <span className="text-lg">Logout</span>
                  <IoIosLogOut />
                </div>
              ) : (
                <div className="flex justify-center gap-2 w-full flex-wrap">
                  <Link to="/login">
                    <button class="bg-white hover:bg-gray-300 duration-200 text-black font-bold py-2 px-4 rounded-2xl">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button class="bg-white hover:bg-gray-300 duration-200 text-black font-bold py-2 px-4 rounded-2xl">
                      Signup
                    </button>
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
