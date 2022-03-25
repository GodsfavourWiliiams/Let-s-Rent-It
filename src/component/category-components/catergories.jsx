import React from 'react'
import { FaAngleRight, FaTimes } from 'react-icons/fa';
import Button from '../button-component/button';


const subCategories = [
  { name: 'Bakery' },
  { name: 'Fruit and vegetables' },
  { name: 'Meat and fish' },
  { name: 'Drinks' },
  { name: 'Kitchen' },
]
export default function Category() {

  return (
    <div className="bg-white mt-16">
          <div className="fixed hidden w-full top-0 lg:hidden">
           
              <div className="ml-auto relative max-w-xs w-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <FaTimes className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories Menu</h3>
                  <div className="font-medium text-gray-900 px-2 py-3">
                    {subCategories.map((category) => (
                      <div key={category.name}>
                        <span className="block px-2 py-3">
                          {category.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>

        <main className="max-w-7xl mx-auto px-3 xl:px-0 sm:px-6 lg:px-8">
          <section className="">
            <h2 className="sr-only">
                Category menu
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h2 className="font-bold text-base mb-4">
                    Category menu
                </h2>
                <div className="text-sm font-medium text-primary-100 space-y-4 ">
                  {subCategories.map((category) => (
                    <div key={category.name}>
                      <span className='cursor-pointer'>{category.name}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-neutral-100 w-44 text-xs mt-10 rounded-5 flex items-center justify-center">More categories
                    <FaAngleRight className='ml-3'/>
                </Button>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 flex gap-6 sm:flex-row flex-col justify-between">
                {/* Replace with your content */}
                <div className="border-4 w-full  border-dashed border-gray-200 rounded-5 h-96 lg:h-full" />
                {/* /End replace */}
                <div className="border-4 w-full border-dashed border-gray-200 rounded-5 h-96 lg:h-full" />
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    
  )
}
