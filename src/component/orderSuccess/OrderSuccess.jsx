import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
// import {FaStar} from "react-icons/fa";
import Header from '../header-component/header';


const OrderSuccess = () => {
    const [isOpen, setIsOpen] = useState(false);
    const  [IsFixed, setIsFixed] = useState(false);

    const onScrollTOp = () => {
    window.scrollY >= 35 ? setIsFixed(true) : setIsFixed(false)
    }

    window.addEventListener('scroll', onScrollTOp)
    
  return (
    <>
    <Header/>
        <div className={`${IsFixed ? 'mt-60' : 'mt-16'} flex flex-col`}>
          <div className="grid md:grid-cols-2 space-y-4 lg:flex-row px-4">
            <div className="p-8 mx-auto flex items-center rounded-lg bg-gray-100">
                <div className=" flex items-center">
                    <div className="text-4xl sm:text-6xl text-center gap-4 grid sm:grid-cols-4 grid-cols-2 lg:flex-row ">
                        <div className="w-24 p-2 bg-white text-primary-100 rounded-lg">
                            <div className="font-mono leading-none">14</div>
                            <div className="font-mono uppercase text-sm leading-none">Days</div>
                        </div>
                        <div className="w-24  p-2 bg-white text-primary-100 rounded-lg">
                            <div className="font-mono leading-none">00</div>
                            <div className="font-mono uppercase text-sm leading-none">Hours</div>
                        </div>
                        <div className="w-24  p-2 bg-white text-primary-100 rounded-lg">
                            <div className="font-mono leading-none">00</div>
                            <div className="font-mono uppercase text-sm leading-none">Minutes</div>
                        </div>
                        <div className="w-24  p-2 bg-white text-primary-100 rounded-lg">
                            <div className="font-mono leading-none">00</div>
                            <div className="font-mono uppercase text-sm leading-none">Seconds</div>
                        </div>
                    </div>
                </div>
          </div>
			<div className="flex flex-col justify-center flex-1 p-6">
				<span className="text-xs uppercase text-gray-500 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#46760A" className="w-8 h-8 mr-2 dark:text-violet-400">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <p>Built to empower every team</p>
        </span>
				<h3 className="sm:text-3xl text-2xl font-semibold mt-2">Order Successfull Thanks for choosing Rentals</h3>
				<p className="my-6 dark:text-gray-400">From </p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
      
    </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                   <div className="flex flex-col">
                      <div className="flex flex-col items-center w-full">
                        <h2 className="text-2xl font-semibold text-center">Your opinion matters!</h2>
                        <div className="flex flex-col items-center py-6 space-y-3">
                          <span className="text-center">How was your experience?</span>
                          <div className="flex space-x-3">
                            <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-primary-100">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            </button>
                            <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-primary-100">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            </button>
                            <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-primary-100">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            </button>
                            <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-primary-100">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            </button>
                            <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-gray-600">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <textarea rows="4" placeholder="Message..." className="focus:border-green-600 border outline-none p-4 rounded-md resize-none  bg-indigo-50"></textarea>
                          <button className="py-4 my-8 font-semibold rounded-md text-white bg-primary-100">Leave feedback</button>
                        </div>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-sm text-gray-600 cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>Maybe later</span>
                      </div>
                    </div>
                </div>
              </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default OrderSuccess