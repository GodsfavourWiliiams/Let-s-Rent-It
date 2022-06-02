import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { FaAngleUp } from 'react-icons/fa';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';


const Directoy = ({ sections }) => {
  const [dropDown, setDropdown] = useState(false);

  const handleDrop = () => {
    dropDown ? setDropdown(false) : setDropdown(true)
  }

    return (
    <div className="bg-neutral-100 transition-all ease-in-out duration-700">
      <div className=" max-w-7xl mx-auto px-4 transition-all ease-in-out duration-700  xl:px-0">
        <div className="py-4 justify-between transition-all ease-in-out duration-700 hidden md:flex flex-auto space-x-2">
           {sections.map(({id, ...otherSectionProps}) => (
               <MenuItem 
               key={id}
               {...otherSectionProps}
               />
           ))}
        </div>
      </div>

      {/* for mobile view */}
      <div className="block md:hidden w-full">
        <div className="cursor-pointer px-4 py-4 text-black flex justify-between items-center w-full"
           onClick={handleDrop}>
                  <div className="flex space-x-2">
                        <p className="font-bold text-base focus:outline-none hover:text-gray-800 duration-100 cursor-pointer ">
                              Collections</p>
                        </div>
                    <FaAngleUp className={`${dropDown ? ' ' : 'rotate-180'} transform duration-100`} />
           </div>
          <div className="relative z-50">
              <div className={`${dropDown ? 'block' : 'hidden'} transition-all ease-in-out duration-700  p-4 bg-white font-bold text-base leading-4 absolute w-full rounded shadow`}>
              {sections.map(({id, ...otherSectionProps}) => (
                  <MenuItem 
                  key={id}
                  {...otherSectionProps}
                  />
              ))}
              </div>
            </div>
        </div>
    </div>
    )
}


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect( mapStateToProps )(Directoy);
