import React, { useState } from 'react';
import { BeakerIcon } from '@heroicons/react/outline';

function MainDashboard() {
  const [show, setShow] = useState(true);
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <>
      <main className="">
        {/* Vertical navigation starts */}
        <div className="flex flex-no-wrap h-full">
          <div className="h-full bg-gray-900 p-4">
            <div className="flex w-full h-full">
              <div className=" flex flex-col h-full justify-between">
                <div className="">
                  <div className="flex items-center">
                    {/* <svg
                      width={34}
                      height={34}
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                        fill="pink"
                      />
                    </svg> */}
                    {show && (
                      <div className="mx-auto mt-4" id="closed">
                        <h1 className="">Cardano Goat</h1>
                      </div>
                    )}
                  </div>
                  <div className="mt-10 flex items-center relative">
                    {show ? (
                      <div
                        arial-label="search"
                        className="w-56 relative w-full"
                      >
                        <div className="absolute p-2">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.1665 1.66667C13.3065 1.66667 16.6665 5.02667 16.6665 9.16667C16.6665 13.3067 13.3065 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16667C1.6665 5.02667 5.0265 1.66667 9.1665 1.66667ZM9.1665 15C12.389 15 14.9998 12.3892 14.9998 9.16667C14.9998 5.94333 12.389 3.33333 9.1665 3.33333C5.94317 3.33333 3.33317 5.94333 3.33317 9.16667C3.33317 12.3892 5.94317 15 9.1665 15ZM16.2373 15.0592L18.5948 17.4158L17.4157 18.595L15.059 16.2375L16.2373 15.0592Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <input
                          type="seach"
                          className="w-full py-2 pl-10 bg-gray-800 rounded text-base leading-none text-white placeholder-white"
                          placeholder="Search"
                        />
                      </div>
                    ) : (
                      <div>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.1665 1.66667C13.3065 1.66667 16.6665 5.02667 16.6665 9.16667C16.6665 13.3067 13.3065 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16667C1.6665 5.02667 5.0265 1.66667 9.1665 1.66667ZM9.1665 15C12.389 15 14.9998 12.3892 14.9998 9.16667C14.9998 5.94333 12.389 3.33333 9.1665 3.33333C5.94317 3.33333 3.33317 5.94333 3.33317 9.16667C3.33317 12.3892 5.94317 15 9.1665 15ZM16.2373 15.0592L18.5948 17.4158L17.4157 18.595L15.059 16.2375L16.2373 15.0592Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="-mt-5" onClick={() => setShow(!show)}>
                      {show ? (
                        <button
                          aria-label="minimize sidebar"
                          id="close"
                          className="w-6 h-6 right-0 -mr-7 bg-indigo-500 absolute shadow rounded-full flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 4L6 8L10 12"
                              stroke="white"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          id="open"
                          className=" w-6 h-6 right-0 -mr-7 bg-indigo-500 absolute shadow rounded-full flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                          <svg
                            aria-label="expand sidebar"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12L10 8L6 4"
                              stroke="white"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props*/}
                    <ul aria-orientation="vertical">
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="Overview"
                        className="cursor-pointer mt-10"
                      >
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
                      </li>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="People"
                        className="cursor-pointer mt-6"
                      >
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
                      </li>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="Workflow"
                        className="cursor-pointer mt-6"
                      >
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
                      </li>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="Campaignns"
                        className="cursor-pointer mt-6"
                      >
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
                      </li>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="Messages"
                        className="cursor-pointer mt-6"
                      >
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
                      </li>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="stack"
                        className="cursor-pointer mt-6"
                      >
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
                      </li>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="Notifications"
                        className="cursor-pointer mt-6"
                      >
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
                      </li>
                    </ul>
                    {show && (
                      <div className="w-full mt-10">
                        <p className="text-base leading-4 pl-3 cursor-pointer text-gray-400">
                          Overview
                        </p>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          People
                        </p>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          Workflow
                        </p>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          Campaignns
                        </p>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          Messages
                        </p>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          Stacky
                        </p>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          Notificationsy
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="flex items-center justify-between relative"
                  id="profile"
                >
                  {show ? (
                    <>
                      <div className="flex items-center">
                        <p className="text-base leading-4 pl-3 text-gray-100">
                          Lavada Marlon
                        </p>
                      </div>

                      <div
                        className=""
                        onMouseEnter={() => setTooltipStatus(1)}
                        onMouseLeave={() => setTooltipStatus(0)}
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00016 14.6666C4.31816 14.6666 1.3335 11.682 1.3335 7.99998C1.3335 4.31798 4.31816 1.33331 8.00016 1.33331C11.6822 1.33331 14.6668 4.31798 14.6668 7.99998C14.6668 11.682 11.6822 14.6666 8.00016 14.6666ZM7.3335 7.33331V11.3333H8.66683V7.33331H7.3335ZM7.3335 4.66665V5.99998H8.66683V4.66665H7.3335Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      {tooltipStatus == 1 && (
                        <div
                          role="tooltip"
                          className="z-20 md:w-52 top-0 md:-mt-2 -mt-8 absolute transition duration-150 ease-in-out  ml-8 shadow bg-white p-4 rounded opacity-0"
                        >
                          <svg
                            className="absolute left-0 -ml-2 -mt-1.5 bottom-0 top-0 h-full"
                            width="9px"
                            height="16px"
                            viewBox="0 0 9 16"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="Tooltips-"
                                transform="translate(-874.000000, -1029.000000)"
                                fill="#FFFFFF"
                              >
                                <g
                                  id="Group-3-Copy-16"
                                  transform="translate(850.000000, 975.000000)"
                                >
                                  <g
                                    id="Group-2"
                                    transform="translate(24.000000, 0.000000)"
                                  >
                                    <polygon
                                      id="Triangle"
                                      transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                                      points="4.5 57.5 12.5 66.5 -3.5 66.5"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <p className="text-sm font-bold text-gray-800 pb-1">
                            Profile Picture and name
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center justify-between "></div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full" />
        </div>
        {/* Vertical navigation ends */}
      </main>
    </>
  );
}

export default MainDashboard;
