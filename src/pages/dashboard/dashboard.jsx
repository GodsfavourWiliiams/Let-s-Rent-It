import { useState } from 'react';
import { ReactComponent as SearchIcon} from '../../component/Assets/search.svg';
import { ReactComponent as Hamburger } from '../../component/Assets/darhboard_alt.svg';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div>
     <div
      className="flex bg-gray-100"
    >
      <aside
        className="z-30 hidden w-64 overflow-y-auto bg-white md:block flex-shrink-0"
      >
        <div className="py-4 text-gray-500 h-screen">
          <a
            className="ml-6 text-lg font-bold text-gray-800 "
            href="/"
          >
            Rentals
          </a>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 "
                href="index.html"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
          </ul>
          <ul>
            <li className="relative px-6 py-3">
              <a
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                href="/"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <span className="ml-4">Add Product</span>
              </a>
            </li>
            <li className="relative px-6 py-3">
              <a
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                href="/"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
                <span className="ml-4">Products</span>
              </a>
            </li>
          </ul>
         
        </div>
      </aside>
      {/* mobile view */}
      <aside
        className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white md:hidden ${isSidebar ? "block" : "hidden"}`}
      >
        <div className="py-4 text-gray-500">
          <a
            className="ml-6 text-lg font-bold text-gray-800 "
            href="/"
          >
            Rentals
          </a>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-primary-100 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 "
                href="/"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
          </ul>
          
        </div>
      </aside>
      <div className="flex flex-col flex-1 w-full">
        <header className="z-10 py-4 bg-white shadow">
          <div
            className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 00"
          >
            <button
              className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
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
                  placeholder="Search for Products"
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
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    aria-hidden="true"
                  />
                </button>
                <div className={isOpen ? "block" : "hidden"}>
                  <ul
                   
                    className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md 0"
                    aria-label="submenu"
                  >
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 "
                        href="/"
                      >
                        <svg
                          className="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 "
                        href="/"
                      >
                        <svg
                          className="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          ></path>
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 "
                        href="/"
                      >
                        <svg
                          className="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                        <span>Log out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2
              className="my-6 text-2xl font-semibold text-gray-700 "
            >
              Dashboard
            </h2>
           
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <div
                className="flex items-center p-4 bg-white rounded-lg shadow-xs "
              >
                <div
                  className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p
                    className="mb-2 text-sm font-medium text-gray-600"
                  >
                    Total clients
                  </p>
                  <p
                    className="text-lg font-semibold text-gray-700 "
                  >
                    6389
                  </p>
                </div>
              </div>
              <div
                className="flex items-center p-4 bg-white rounded-lg shadow-xs "
              >
                <div
                  className="p-3 mr-4 text-green-500 bg-green-100 rounded-full"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p
                    className="mb-2 text-sm font-medium text-gray-600"
                  >
                    Account balance
                  </p>
                  <p
                    className="text-lg font-semibold text-gray-700 "
                  >
                    $ 46,760.89
                  </p>
                </div>
              </div>
              <div
                className="flex items-center p-4 bg-white rounded-lg shadow-xs "
              >
                <div
                  className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full "
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p
                    className="mb-2 text-sm font-medium text-gray-600"
                  >
                    New sales
                  </p>
                  <p
                    className="text-lg font-semibold text-gray-700 "
                  >
                    376
                  </p>
                </div>
              </div>
              <div
                className="flex items-center p-4 bg-white rounded-lg shadow-xs "
              >
                <div
                  className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full "
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p
                    className="mb-2 text-sm font-medium text-gray-600"
                  >
                    Pending contacts
                  </p>
                  <p
                    className="text-lg font-semibold text-gray-700 "
                  >
                    35
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr
                      className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50 "
                    >
                      <th className="px-4 py-3">Client</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody
                    className="bg-white divide-y"
                  >
                    <tr className="text-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div
                            className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                          >
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Hans Burger</p>
                            <p className="text-xs text-gray-600">
                              10x Developer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        $ 863.45
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span
                          className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full "
                        >
                          Approved
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        6/10/2020
                      </td>
                    </tr>

                    <tr className="text-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div
                            className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                          >
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Jolina Angelie</p>
                            <p className="text-xs text-gray-600">
                              Unemployed
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        $ 369.95
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span
                          className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full"
                        >
                          Pending
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        6/10/2020
                      </td>
                    </tr>

                    <tr className="text-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div
                            className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                          >
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Sarah Curry</p>
                            <p className="text-xs text-gray-600">
                              Designer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        $ 86.00
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span
                          className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full "
                        >
                          Denied
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        6/10/2020
                      </td>
                    </tr>

                    <tr className="text-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div
                            className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                          >
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Rulia Joberts</p>
                            <p className="text-xs text-gray-600">
                              Actress
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        $ 1276.45
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span
                          className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full "
                        >
                          Approved
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        6/10/2020
                      </td>
                    </tr>

                    <tr className="text-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div
                            className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                          >
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Wenzel Dashington</p>
                            <p className="text-xs text-gray-600">
                              Actor
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        $ 863.45
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span
                          className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full "
                        >
                          Expired
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        6/10/2020
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9 "
              >
                <span className="flex items-center col-span-3">
                  Showing 21-30 of 100
                </span>
                <span className="col-span-2"></span>
                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                  <nav aria-label="Table navigation">
                    <ul className="inline-flex items-center">
                      <li>
                        <button
                          className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Previous"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          1
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          2
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 text-white transition-colors duration-150 bg-primary-100 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          3
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          4
                        </button>
                      </li>
                      <li>
                        <span className="px-3 py-1">...</span>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          8
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          9
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Next"
                        >
                          <svg
                            className="w-4 h-4 fill-current"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
        
    </div>
  )
}

export default Dashboard