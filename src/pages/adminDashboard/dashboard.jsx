import { useState } from 'react';
import { ReactComponent as SearchIcon} from '../../component/Assets/search.svg';
import { ReactComponent as Hamburger } from '../../component/Assets/darhboard_alt.svg';
import { ReactComponent as Profile } from '../../component/Assets/User_circle.svg';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {FaTimes} from "react-icons/fa";
import useBreadcrumbs from 'use-react-router-breadcrumbs';



const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const routes = [{ path: '/dashboard/route', breadcrumb: null }];
  const breadcrumbs = useBreadcrumbs(routes, { excludePaths: ['/', '/no-breadcrumb/for-this-route'] });

 
  return (
    <div>
     <div className="flex bg-gray-100">
      <aside className="z-30 hidden w-64 overflow-y-auto bg-white md:block flex-shrink-0">
        <div className="py-4 text-gray-500 h-screen">
          <Link
            className="ml-6 text-lg font-bold text-gray-800 "
            to="/"
          >
            Rentals
          </Link>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <NavLink to="/dashboard"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 " end
              >
                 {({ isActive }) => (
                   <div className="">
                    <span
                      className={
                        isActive ? "absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg" : undefined
                      }
                    >
                    </span>
                       <div className="flex items-center">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            ></path>
                          </svg>
                    
                        <span className="ml-4">Dashboard</span>
                      </div>
                    </div>
                  )}
                
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink to="addItem"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              >
                 {({ isActive }) => (
                   <div className="">
                    <span
                      className={
                        isActive ? "absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg" : "hidden"
                      }
                    >
                    </span>
                    <div className="flex items-center">
                      <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                          ></path>
                        </svg>
                    
                        <span className="ml-4">Add Product</span>
                      </div>
                    </div>
                  )}
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink to="products"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              >
                {({ isActive }) => (
                   <div className="">
                    <span
                      className={
                        isActive ? "absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg" : "hidden"
                      }
                    >
                    </span>
                       <div className="flex items-center">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            ></path>
                          </svg>
                    
                        <span className="ml-4">Products</span>
                      </div>
                    </div>
                  )}
              </NavLink>
            </li>

            <li className="relative px-6 py-3">
               
              <NavLink to="settings"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
              >
                 {({ isActive }) => (
                   <div className="">
                    <span
                      className={
                        isActive ? "absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg" : "hidden"
                      }
                    >
                    </span>
                       <div className="flex items-center">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                             <path
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            ></path>
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                    
                        <span className="ml-4">Settings</span>
                      </div>
                    </div>
                  )}
                 
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink to="profile"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
              >
                 {({ isActive }) => (
                   <div className="">
                    <span
                      className={
                        isActive ? "absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg" : "hidden"
                      }
                    >
                    </span>
                       <div className="flex items-center">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                             <path
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              ></path>
                          </svg>
                        <span className="ml-4">Profile</span>
                      </div>
                    </div>
                  )}
               
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      {/* mobile view */}
      <aside
        className={`fixed inset-y-0 z-40 flex-shrink-0 w-64 transition-all duration-700 ease-in-out overflow-y-auto bg-white md:hidden ${isSidebar ? "left-0" : "-left-80"}`}
      >
        <div className="py-4 text-gray-500 transition-all duration-700 ease-in-out">
          <div className="flex items-center justify-between">
            <NavLink to="/"
              className="ml-6 text-lg font-bold text-gray-800 "
            >
              Rentals
            </NavLink>
            <button
              className="p-1 mr-5 -ml-1 rounded-md"
              aria-label="Menu"
              onClick={() => setIsSidebar(false)}
            >
              <FaTimes/>
            </button>
          </div>

          <ul className="mt-6">
            <li className="relative px-6 py-3">
            <NavLink to="/dashboard"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 " end
              >
                 {({ isActive }) => (
                   <div className="">
                    <span
                      className={
                        isActive ? "absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg" : undefined
                      }
                    >
                    </span>
                       <div className="flex items-center">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            ></path>
                          </svg>
                    
                        <span className="ml-4">Dashboard</span>
                      </div>
                    </div>
                  )}
                
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
            <NavLink to="addItem"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              >
                 {({ isActive }) => (
                   <div className="">
                    <span
                      className={
                        isActive ? "absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg" : "hidden"
                      }
                    >
                    </span>
                    <div className="flex items-center">
                      <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                          ></path>
                        </svg>
                    
                        <span className="ml-4">Add Product</span>
                      </div>
                    </div>
                  )}
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
            <NavLink to="products"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
              >
                {({ isActive }) => (
                   <div className="">
                    <span
                      className={
                        isActive ? "absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg" : "hidden"
                      }
                    >
                    </span>
                       <div className="flex items-center">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            ></path>
                          </svg>
                    
                        <span className="ml-4">Products</span>
                      </div>
                    </div>
                  )}
              </NavLink>
            </li>

            <li className="relative px-6 py-3">
            <NavLink to="settings"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
              >
                 {({ isActive }) => (
                   <div className="">
                    <span
                      className={
                        isActive ? "absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg" : "hidden"
                      }
                    >
                    </span>
                       <div className="flex items-center">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                             <path
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            ></path>
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                    
                        <span className="ml-4">Settings</span>
                      </div>
                    </div>
                  )}
                 
              </NavLink>
            </li>
            <li className="relative px-6 py-3">
              <NavLink to="profile"
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
              >
                 {({ isActive }) => (
                   <div className="">
                    <span
                      className={
                        isActive ? "absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg" : "hidden"
                      }
                    >
                    </span>
                       <div className="flex items-center">
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                             <path
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              ></path>
                          </svg>
                        <span className="ml-4">Profile</span>
                      </div>
                    </div>
                  )}
               
              </NavLink>
            </li>
          </ul> 
        </div>
      </aside>
      <div className="flex  flex-col flex-1 w-full">
        <header className="z-20 py-4 bg-white shadow">
          <div
            className="container flex items-center justify-between h-full px-3 mx-auto text-purple-600"
          >
            <button
              className="p-1 mr-5 -ml-1 rounded-md md:hidden"
              aria-label="Menu"
              onClick={() => setIsSidebar(!isSidebar)}
            >
              <Hamburger/>
            </button>
            <div className="flex justify-center flex-1 lg:mr-32">
              <div
                className="relative w-full max-w-xl mr-6 focus-within:text-purple-500"
              >
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <SearchIcon/>
                </div>
                <input
                  className="w-full pl-8 pr-2 py-3 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md  focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  placeholder="Search for User"
                  aria-label="Search"
                />
              </div>
            </div>
            <ul className="flex items-center flex-shrink-0 space-x-6">
              
              
              <li className="relative">
                <button
                  className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                  aria-label="Account"
                  aria-haspopup="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Profile
                    className="object-cover w-10 h-10 rounded-full"
                  />
                </button>
                <div className={isOpen ? "block" : "hidden"}>
                  <ul
                   
                    className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md 0"
                    aria-label="submenu"
                  >
                    <li className="flex">
                      <span
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 "
                      >
                        <svg
                          className="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                        <span>Log out</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <main className="h-full overflow-y-auto ">
          <div className="container px-3 mx-auto grid">
            <div className="my-8 w-full">
              <div
                className="rounded-lg border border-light bg-white py-4 px-4 shadow-card sm:px-6 md:px-8"
              >
                <ul className="flex items-center">
                  <li className="flex items-center">
                    <Link
                      to=""
                      className="flex items-center text-base font-semibold text-black "
                    >
                      <span className="pr-2">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          className="fill-current"
                        >
                          <path
                            d="M13.3503 14.6503H10.2162C9.51976 14.6503 8.93937 14.0697 8.93937 13.3729V10.8182C8.93937 10.5627 8.73043 10.3537 8.47505 10.3537H6.54816C6.29279 10.3537 6.08385 10.5627 6.08385 10.8182V13.3497C6.08385 14.0464 5.50346 14.627 4.80699 14.627H1.62646C0.929989 14.627 0.349599 14.0464 0.349599 13.3497V5.24431C0.349599 4.89594 0.535324 4.5708 0.837127 4.385L6.96604 0.506501C7.29106 0.297479 7.73216 0.297479 8.05717 0.506501L14.1861 4.385C14.4879 4.5708 14.6504 4.89594 14.6504 5.24431V13.3265C14.6504 14.0697 14.07 14.6503 13.3503 14.6503ZM6.52495 9.54086H8.45184C9.14831 9.54086 9.7287 10.1215 9.7287 10.8182V13.3497C9.7287 13.6052 9.93764 13.8142 10.193 13.8142H13.3503C13.6057 13.8142 13.8146 13.6052 13.8146 13.3497V5.26754C13.8146 5.19786 13.7682 5.12819 13.7218 5.08174L7.61608 1.20324C7.54643 1.15679 7.45357 1.15679 7.40714 1.20324L1.27822 5.08174C1.20858 5.12819 1.18536 5.19786 1.18536 5.26754V13.3729C1.18536 13.6284 1.3943 13.8374 1.64967 13.8374H4.80699C5.06236 13.8374 5.2713 13.6284 5.2713 13.3729V10.8182C5.24809 10.1215 5.82848 9.54086 6.52495 9.54086Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.51145 1.55106L13.465 5.33294V13.3497C13.465 13.412 13.4126 13.4644 13.3503 13.4644H10.193C10.1307 13.4644 10.0783 13.412 10.0783 13.3497V10.8182C10.0783 9.92832 9.34138 9.19112 8.45184 9.19112H6.52495C5.63986 9.19112 4.89529 9.92522 4.9217 10.8237V13.3729C4.9217 13.4352 4.86929 13.4877 4.80699 13.4877H1.64967C1.58738 13.4877 1.53496 13.4352 1.53496 13.3729V5.33311L7.51145 1.55106ZM1.27822 5.08174L7.40714 1.20324C7.45357 1.15679 7.54643 1.15679 7.61608 1.20324L13.7218 5.08174C13.7682 5.12819 13.8146 5.19786 13.8146 5.26754V13.3497C13.8146 13.6052 13.6057 13.8142 13.3503 13.8142H10.193C9.93764 13.8142 9.7287 13.6052 9.7287 13.3497V10.8182C9.7287 10.1215 9.14831 9.54086 8.45184 9.54086H6.52495C5.82848 9.54086 5.24809 10.1215 5.2713 10.8182V13.3729C5.2713 13.6284 5.06236 13.8374 4.80699 13.8374H1.64967C1.3943 13.8374 1.18536 13.6284 1.18536 13.3729V5.26754C1.18536 5.19786 1.20858 5.12819 1.27822 5.08174ZM13.3503 15H10.2162C9.32668 15 8.58977 14.2628 8.58977 13.3729V10.8182C8.58977 10.7559 8.53735 10.7035 8.47505 10.7035H6.54816C6.48587 10.7035 6.43345 10.7559 6.43345 10.8182V13.3497C6.43345 14.2396 5.69654 14.9768 4.80699 14.9768H1.62646C0.736911 14.9768 0 14.2396 0 13.3497V5.24431C0 4.77131 0.251303 4.33591 0.651944 4.08836L6.77814 0.211575C7.21781 -0.0705255 7.80541 -0.0705251 8.24508 0.211576C8.24546 0.211821 8.24584 0.212066 8.24622 0.212311L14.3713 4.08838C14.7853 4.34424 15 4.78759 15 5.24431V13.3265C15 14.2587 14.2671 15 13.3503 15ZM14.1861 4.385L8.05717 0.506501C7.73216 0.297479 7.29106 0.297479 6.96604 0.506501L0.837127 4.385C0.535324 4.5708 0.349599 4.89594 0.349599 5.24431V13.3497C0.349599 14.0464 0.929989 14.627 1.62646 14.627H4.80699C5.50346 14.627 6.08385 14.0464 6.08385 13.3497V10.8182C6.08385 10.5627 6.29279 10.3537 6.54816 10.3537H8.47505C8.73043 10.3537 8.93937 10.5627 8.93937 10.8182V13.3729C8.93937 14.0697 9.51976 14.6503 10.2162 14.6503H13.3503C14.07 14.6503 14.6504 14.0697 14.6504 13.3265V5.24431C14.6504 4.89594 14.4879 4.5708 14.1861 4.385Z"
                          />
                        </svg>
                      </span>
                      {breadcrumbs.map(({ breadcrumb, match }) =>
                      <p key={match.pathname} className="flex items-center " >
                       
                        {breadcrumb}
                        
                        <span className="px-3 breadcrumb">
                            <svg
                              width="7"
                              height="12"
                              viewBox="0 0 7 12"
                              className="fill-current"
                            >
                              <path
                                d="M0.879233 11.4351C0.808625 11.4351 0.720364 11.3998 0.667408 11.3469C0.543844 11.2233 0.543844 11.0291 0.649756 10.9056L5.09807 6.17483C5.18633 6.08657 5.18633 5.92771 5.09807 5.82179L0.649756 1.09105C0.526192 0.967487 0.543844 0.773315 0.667408 0.649751C0.790972 0.526187 0.985145 0.543839 1.10871 0.667403L5.55702 5.39815C5.85711 5.73353 5.85711 6.26309 5.55702 6.58083L1.10871 11.3292C1.0381 11.3998 0.967493 11.4351 0.879233 11.4351Z"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.229332 10.5281L4.48868 5.99831L0.24288 1.48294C-0.133119 1.09849 -0.0312785 0.549591 0.267983 0.25033C0.652758 -0.134445 1.2069 -0.0332381 1.50812 0.267982L1.52041 0.280272L5.9781 5.02138C6.46442 5.56491 6.47872 6.42661 5.96853 6.96778V6.96778L1.50834 11.7289C1.36051 11.8767 1.15353 12 0.879227 12C0.660517 12 0.428074 11.9064 0.267983 11.7463C-0.0719543 11.4064 -0.0699959 10.8773 0.220873 10.538L0.229332 10.5281ZM5.55702 6.58083C5.85711 6.26309 5.85711 5.73353 5.55702 5.39815L1.10871 0.667403C0.985145 0.543839 0.790972 0.526187 0.667408 0.649751C0.543844 0.773315 0.526192 0.967487 0.649756 1.09105L5.09807 5.82179C5.18633 5.92771 5.18633 6.08657 5.09807 6.17483L0.649756 10.9056C0.543844 11.0291 0.543844 11.2233 0.667408 11.3469C0.720364 11.3998 0.808625 11.4351 0.879233 11.4351C0.967493 11.4351 1.0381 11.3998 1.10871 11.3292L5.55702 6.58083Z"
                              />
                            </svg>
                        </span>
                      </p>
                      )}
                      
                    </Link>
                    
                  </li>
                  
                </ul>
              </div>
            </div>

          
            <Outlet/>
          </div>
        </main>
      </div>
    </div>  
        
    </div>
  )
}

export default Dashboard
