import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/Freshnesecom.svg';
import { ReactComponent as ActionsUser} from '../Assets/actions-user.svg';
import { ReactComponent as Cart} from '../Assets/cart.svg';
import { ReactComponent as SearchIcon} from '../Assets/search.svg';
import { ReactComponent as Shop} from '../Assets/Shop.svg';
import Directory from '../directory/directoy';
import Banner from './banner';
import { connect } from 'react-redux';


const Header = ({currentUSer}) => {

  const  [IsNavFixed, setIsNavFixed] = useState(false)
  const  [IsDropDownFixed, setIsDropDownFixed] = useState(false)

  const onScrollTOp = () => {
  window.scrollY >= 35 ? setIsNavFixed(true) : setIsNavFixed(false)
  }

  window.addEventListener('scroll', onScrollTOp)
return(
    <div className=''>
      <Banner/>
    <div className={ IsNavFixed ? "fixed w-full top-0 z-50" : "relative" }>
      <div className=" bg-white xl:px-0 px-4">
        <nav className='max-w-7xl mx-auto border-gray-200 py-10'>
          <div className=" flex flex-wrap justify-between items-center mx-auto">
          <Link to='/' className="flex items-center">
              <Logo className="mr-3 h-6 sm:h-9" alt="Rentals Logo" />
          </Link>

          <div className="hidden md:max-w-xs w-full lg:max-w-lg md:block flex relative md:order-1 justify-center items-center">
                <input type="text" className="px-8 rounded-5 w-full lg:max-w-lg h-11 border focus:outline-none" placeholder="Search Products, categories ..."/>
                  <div className="absolute top-3.5 right-3">
                    <SearchIcon className=" z-20  cursor-pointer"/>
                  </div>
          </div>
          <div className="md:w-auto md:order-1">
            <Shop className='cursor-pointer md:hidden' onClick={() => setIsDropDownFixed(!IsDropDownFixed)}/>
            <ul className={`md:relative fixed z-40 mt-8 md:right-0 flex md:flex-row flex-col p-4 md:p-0 items-start justify-center md:bg-transparent bg-white shadow md:shadow-none rounded md:space-y-0 space-y-4 md:mt-0 md:text-sm md:font-medium transition-all duration-300 ${IsDropDownFixed ? 'right-4 ' : '-right-80'}`}>
              <Link to="/signin" className='flex flex-row space-x-2 items-center md:pr-0 pr-10'>
                <ActionsUser/> <span className=''>Login</span>
              </Link>
                <Link to="/shop" className="md:pl-6 md:pl-0 flex flex-row space-x-3 items-center md:pr-6 pr-10 ">
                  <Shop/>
                  <span className=''>Shop</span>
                </Link>
              <div className="cursor-pointer flex flex-row space-x-4 items-center md:pr-0 pr-10">
                <Cart/>
                <span className=''>Cart</span>
              </div>
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

const mapStateToProps = state => ({
  currentUSer: state.user.currentUSer
})

export default connect(mapStateToProps)(Header);
