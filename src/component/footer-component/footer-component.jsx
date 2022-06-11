import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterComponent = () => (
    <footer className="bg-white pt-10 sm:mt-10 pt-10">
        <div className="container mx-auto text-black flex flex-wrap justify-between px-3 lg:px-10">
            {/* <!-- Col-1 --> */}
            <div className=" w-1/2 sm:w-4/12 md:w-3/12">
                {/* <!-- Col Title --> */}
                <div className="text-xs uppercase text-black font-bold font-medium mb-6">
                    Get in Touch
                </div>
                {/* <!-- Links --> */}
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    About Us
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Careers
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Press Releases
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Blog
                </span>
            </div>
    
            {/* <!-- Col-2 --> */}
            <div className=" w-1/2 sm:w-4/12 md:w-3/12">
                {/* <!-- Col Title --> */}
                <div className="text-xs uppercase text-black font-bold font-medium mb-6">
                    Connections
                </div>
    
                {/* <!-- Links --> */}
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Facebook
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Twitter
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Instagram
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Youtube
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    LinkedIn
                </span>
            </div>
    
            {/* <!-- Col-3 --> */}
            <div className=" w-1/2 sm:w-4/12 md:w-3/12">
                {/* <!-- Col Title --> */}
                <div className="text-xs uppercase text-black font-bold font-medium mb-6">
                    Earnings
                </div>
    
                {/* <!-- Links --> */}
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Become an Affiliate
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Advertise your product
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Sell on Market
                </span>
            
            </div>
    
            {/* <!-- Col-3 --> */}
            <div className=" w-1/2 sm:w-4/12 md:w-3/12">
                {/* <!-- Col Title --> */}
                <div className="text-xs uppercase text-black font-bold font-medium mb-6">
                    Account
                </div>
    
                {/* <!-- Links --> */}
                <span className="my-3 block text-primary-100  text-sm font-medium duration-700">
                    Your Account
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Chat with us
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                100 % purchase protection
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Chat with us
                </span>
                <span className="my-3 block text-primary-100 text-sm font-medium duration-700">
                    Help
                </span>
            </div>
        </div>
    
        {/* <!-- Copyright Bar --> */}
        <div className="pt-2">
            <div className="flex pb-5 px-3 xl:px-0 m-auto pt-5 text-black-100 text-sm 
                flex-col md:flex-row max-w-7xl">
                <div className="mt-2">
                    © Copyright 2022-year. All Rights Reserved. Williams Godsfavour
                </div>
    
                {/* <!-- Required Unicons (if you want) --> */}
                <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    <span className="w-6 mx-1">
                        <i className="uil uil-facebook-f"></i>
                        <FaFacebook/>
                    </span>
                    <span className="w-6 mx-1">
                        <i className="uil uil-twitter-alt"></i>
                        <FaTwitter/>
                    </span>
                    <span className="w-6 mx-1">
                        <i className="uil uil-linkedin"></i>
                        <FaLinkedin/>
                    </span>
                    <span className="w-6 mx-1">
                        <i className="uil uil-instagram"></i>
                        <FaInstagram/>
                    </span>
                </div>
            </div>
        </div>
    </footer>
  )


export default FooterComponent;
