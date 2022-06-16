import { Link } from "react-router-dom";

const Banner = () => (
    <div className="bg-white ">
     <div className="lg:px-8 px-4 transition-all ease-in-out duration-700 ">
      <div className="flex items-center justify-between flex-wrap border-b py-4">
        <div className="flex justify-between flex-shrink-0 w-full sm:order-2 sm:w-auto transition-all ease-in-out duration-700 ">
          <span className="cursor-pointer font-medium text-xs text-primary-100">Chat with us</span>
          <span className='cursor-pointer mx-10 sm:inline font-medium hidden text-xs'>
          <a href="tel://+2348159675934">+234 815 967 5934</a></span>
          <span className="cursor-pointer text-xs font-medium">info@rentals.com</span>
        </div>
        <div className="order-3 mt-2 flex justify-between flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto transition-all ease-in-out duration-700 ">
        <Link to="/blog" className="cursor-pointer text-decoration-none text-primary-100 font-medium text-xs">Blog</Link>
        <Link to="/about" className='cursor-pointer text-primary-100 font-medium mx-10 text-xs'>About Us</Link>
        <Link to="/user" className="cursor-pointer text-primary-100 font-medium text-xs">Profile</Link>
        </div>
      </div>
    </div>
  </div>
)

export default Banner;