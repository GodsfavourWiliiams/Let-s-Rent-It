import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/Freshnesecom.svg';
import { ReactComponent as ActionsUser} from '../Assets/actions-user.svg';
import { ReactComponent as Cart} from '../Assets/cart.svg';
import { ReactComponent as SearchIcon} from '../Assets/search.svg';
import { ReactComponent as Shop} from '../Assets/Shop.svg';
import Directory from '../directory/directoy';
import Banner from './banner';


const Header = () => {

  const  [IsNavFixed, setIsNavFixed] = useState(false)

  const onScrollTOp = () => {
  window.scrollY >= 35 ? setIsNavFixed(true) : setIsNavFixed(false)
  }

  window.addEventListener('scroll', onScrollTOp)
return(
    <div className=''>
      <Banner/>
    <div className={ IsNavFixed ? "fixed w-full top-0 z-50" : "relative" }>
      <div className="max-w-7xl mx-auto px-3 xl:p-0">
        <nav className='bg-white border-gray-200 py-10'>
          <div className=" flex flex-wrap justify-between items-center mx-auto">
          <Link to='/' className="flex items-center">
              <Logo className="mr-3 h-6 sm:h-9" alt="Rentals Logo" />
          </Link>

          <div className="hidden md:max-w-xs w-full lg:max-w-lg md:block flex relative md:order-1 justify-center items-center">
                <input type="search" className="px-8 rounded-5 w-full lg:max-w-lg h-11 border focus:outline-none" placeholder="Search Products, categories ..."/>
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

          <div className="mt-8 md:max-w-xs w-full lg:max-w-lg md:hidden flex relative md:order-1 justify-center items-center">
              <input type="search" className="px-8 rounded-5 w-full lg:max-w-lg h-11 z-0 border focus:outline-none"   placeholder="Search Products, categories ..."/>
                  <div className="absolute top-3.5 right-3"><SearchIcon className="z-20 "/></div>
          </div>
          </div>
        </nav>
      </div>
    <Directory/>
  </div>
</div>
)
}
export default Header;
