import { useState } from 'react'
import { FaAngleRight, FaTimes, FaBars } from 'react-icons/fa';
import Button from "../../../../component/button-component/button";


const subCategories = [
  { name: 'Drone' },
  { name: 'Laptops and Smart watch' },
  { name: 'Gamiing console' },
  { name: 'Drinks' },
  { name: 'Kitchen' },
]
export default function Category() {
  const [openFilter, setOpenFilter] = useState(false)


  return (
    <div className="bg-white mt-10">
        <div className="cursor-pointer ml-4 lg:hidden">
          <FaBars onClick={() => setOpenFilter(!openFilter)}/>
        </div>
          <div className={`${openFilter ? "left-0" : "-left-80"} absolute lg:hidden transition-all duration-700`}>
              <div className="ml-auto relative max-w-xl rounded-lg w-full bg-white shadow-md py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <FaTimes className="h-6 w-6" aria-hidden="true" onClick={() => setOpenFilter(false)} />
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

        <main className="container mx-auto px-3 lg:px-10">
          <section className="pt-6 pb-24">
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
                <Button className="bg-neutral-100 w-44 text-xs mt-10 rounded-5 p-3 flex items-center justify-center">More categories
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