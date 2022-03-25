import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { FaAngleUp } from 'react-icons/fa';

export default class directoy extends Component {
constructor(){
    super();

    this.state = {
        sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: ''
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: ''
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: ''
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: ''
            }
          ],
          dropdown: true
    }

    this.handleDrop = this.handleDrop.bind(this)
}

      handleDrop(){
        this.setState( dropMenu => ({
          dropDown: !dropMenu.dropDown
        }))
      }

  render() {
    return (
    <div className="bg-neutral-100">
      <div className=" max-w-7xl mx-auto px-3 xl:px-0">
        <div className="py-4 flex justify-between hidden md:flex flex-auto space-x-2">
           {this.state.sections.map(({id, ...otherSectionProps}) => (
               <MenuItem 
               key={id}
               {...otherSectionProps}
               />
           ))}
        </div>
      </div>
      <div className="block md:hidden w-full">
        <div className="cursor-pointer px-4 py-4 text-black flex justify-between items-center w-full"
           onClick={this.handleDrop}>
                  <div className="flex space-x-2">
                        <p className="font-bold text-base focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">
                              Collections</p>
                        </div>
                    <FaAngleUp className={`${this.state.dropDown ? ' ' : 'rotate-180'} transform duration-100`} />
           </div>
          <div className="relative">
              <div className={`${this.state.dropDown ? 'block' : 'hidden'} p-4 bg-white font-bold text-base leading-4 absolute top-2 w-full rounded shadow`}>
              {this.state.sections.map(({id, ...otherSectionProps}) => (
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
}
