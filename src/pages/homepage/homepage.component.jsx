import React, {Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';
import FooterComponent from '../../component/footer-component/footer-component';
import Header from '../../component/header-component/header';
import BlogPreview from '../Blogs/blogPreview';
import Hero from './homePage Compenents/Hero/Hero';
import Brands from './homePage Compenents/brands/Brands';
import Testimonials from '../../component/testimonials/Testimonials';



const HomePage = ({currentUser}) =>  {
    const  [IsFixed, setIsFixed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      
      if (!sessionStorage.popupModal) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.popupModal = 1;
        }, 2000);
  
        return () => clearTimeout(timer);
      }
    }, [])

    const onScrollTOp = () => {
    window.scrollY >= 35 ? setIsFixed(true) : setIsFixed(false);
    }

    window.addEventListener('scroll', onScrollTOp);
    
    return(
    <>
        <Header currentUser={currentUser}/>
            <div className={IsFixed ? 'mt-60' : 'mt-16'}>
                <Hero/>
                <Brands/>
                <Testimonials/>
                <BlogPreview/>
           </div>
        <FooterComponent/>
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
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-3xl w-full">
                  <div className="sm:flex sm:items-start">
                     <button className='absolute right-0 top-0 z-50 outline-0 text-xl p-3' 
                     onClick={() => {
                            setIsOpen(false)
                          }}>
                            <FaTimes/>
                          </button>
                      <div className="relative text-center sm:text-left flex flex-col items-center bg-white rounded lg:flex-row">
                        
                        <div className="w-full p-6 py-8 sm:p-12 lg:w-1/2">
                            <Dialog.Title as="h3" className="text-xl leading-2 font-medium text-gray-900">
                                Less time buying.<br/>More time Renting.
                            </Dialog.Title>
                         
                            <div className="mt-2 mb-3 sm:mb-6">
                                    <p className="text-sm text-gray-500">
                                    A marketplace of fully tested, multi-purpose product, for companies and individual of any kind.
                                    </p>
                            </div>
                            <form>
                                <label for="email" className="inline-block mb-2 uppercase text-xs font-medium sm:font-semibold">Subscribe for new product releases</label>
                                <input  
                                name="EMAIL" 
                                required 
                                aria-required="true" 
                                placeholder="Your email" 
                                type="email" 
                                maxlength="150" 
                                className="flex-grow w-full h-12 px-4 mb-4 transition duration-200 bg-indigo-50 border rounded-lg shadow-sm appearance-none focus:outline-none focus:shadow-outline focus:border-green-500" />
                            <button className="px-2 h-12 inline-flex items-center justify-center w-full mb-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-100 focus:shadow-outline focus:outline-none">Subscribe</button>
                            
                            <p className="text-sm text-gray-700">We respect your privacy. Unsubscribe at any time.</p>
                            </form>
                        </div>
                            <div className="lg:flex w-full hidden lg:w-1/2">
                                    <span className="relative hidden h-auto lg:block">
                                        <svg viewBox="0 0 190 1440" className="w-16 h-full text-gray-300" preserveAspectRatio="none" stroke-width="0">
                                            <path d="M-0.000203125 6.34766e-06H190V1440H-0.000203125C-0.000203125 1440 113.574 1059.66 114.317 699.623C115.06 339.589 -0.000203125 6.34766e-06 -0.000203125 6.34766e-06Z" fill="currentColor">
                                            </path>
                                        </svg>
                                    </span>
                                <div className="w-full bg-gray-300 lg:py-0 lg:rounded-r sm:pl-2 xl:pl-0">
                                    <div className="w-full h-full transform lg:mt-20 lg:scale-100 xl:scale-135" >
                                       <img src="https://kitwind.io/static/7277c9785e82b31b79de9c72e716bce1/9d953/human.png" alt="" />
                                 </div>
                             </div>
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

export default HomePage;
