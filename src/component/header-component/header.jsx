import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/Freshnesecom.svg';
import { ReactComponent as ActionsUser} from '../Assets/actions-user.svg';
import { ReactComponent as Cart} from '../Assets/cart.svg';
import { ReactComponent as SearchIcon} from '../Assets/search.svg';
import { ReactComponent as Shop} from '../Assets/Shop.svg';
import Directory from '../directory/directoy';


const Header = () => (
<div className="">
<div className="max-w-7xl mx-auto px-3 xl:p-0">
  <div className="bg-white">
      <div className="">
        <div className="flex items-center justify-between flex-wrap border-b py-4">
          <div className="flex justify-between flex-shrink-0 w-full sm:order-2 sm:w-auto">
           <span className="cursor-pointer font-bold text-xs text-primary-100">Chat with us</span>
           <span className='cursor-pointer mx-10 sm:inline font-bold hidden text-xs'>
           <a href="tel://+2348159675934">+234 815 967 5934</a></span>
           <span className="cursor-pointer text-xs font-bold">info@freshnesecom.com</span>
          </div>
          <div className="order-3 mt-2 flex justify-between flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <span className="cursor-pointer text-primary-100 font-bold text-xs">Blog</span>
           <span className='cursor-pointer text-primary-100 font-bold mx-10 text-xs'>About Us</span>
           <span className="cursor-pointer text-primary-100 font-bold text-xs">Careers</span>
          </div>
        </div>
      </div>
    </div>
   <nav className="bg-white border-gray-200 py-10 ">
    <div className=" flex flex-wrap justify-between items-center mx-auto">
    <Link to='/' className="flex items-center">
        <Logo className="mr-3 h-6 sm:h-9" alt="Rentals Logo" />
    </Link>

    <div className="hidden md:max-w-xs w-full lg:max-w-lg md:block flex relative md:order-1 justify-center items-center">
           <input type="search" className="px-8 rounded-5 w-full lg:max-w-lg h-11 z-0 border focus:outline-none" placeholder="Search Products, categories ..."/>
            <div className="absolute top-3.5 right-3"><SearchIcon className=" z-20 "/></div>
    </div>
    <div className=" md:w-auto md:order-1">
      <ul className="flex md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <Link to="/signin">
          <ActionsUser className="cursor-pointer "/>
        </Link>
        <Link to="./shop" className="md:px-6 px-3">
          <Shop/>
        </Link>
        <Link to="" className="cursor-pointer ">
          <Cart/>
        </Link>
      </ul>
    </div>

    <div className="mt-6 md:max-w-xs w-full lg:max-w-lg md:hidden flex relative md:order-1 justify-center items-center">
           <input type="search" className="px-8 rounded-5 w-full lg:max-w-lg h-11 z-0 border focus:outline-none" placeholder="Search Products, categories ..."/>
            <div className="absolute top-3.5 right-3"><SearchIcon className=" z-20 "/></div>
    </div>

    </div>
  </nav>
</div>
<Directory/>
</div>
)

export default Header;
