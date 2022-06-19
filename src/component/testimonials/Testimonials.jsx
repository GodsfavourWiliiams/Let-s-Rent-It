import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import TestimonialSlides from './testimonial.Slides';



const Testimonials = () => {
  return (
    <div className='py-10'>
         <div className="container mx-auto px-3 lg:px-10 flex items-center justify-between">
            <p className="sm:font-semibold">Our customers says</p>
            <div className="flex items-center justify-center">
              <Link to="/blog" className='sm:font-medium text-gray-700'>Button</Link>
              <FaAngleRight className='text-gray-600 mt-1 '/>
            </div>
        </div>
    <TestimonialSlides/>
  </div>
  )
}

export default Testimonials