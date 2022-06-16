import { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa';
import Button from "../../../../component/button-component/button";


const subCategories = [
  { name: 'Drone' },
  { name: 'Laptops and Smart watch' },
  { name: 'Games and Console' },
  { name: 'Wifi and Networking' },
  { name: 'Projectors' },
]
export default function Category() {
  const [openFilter, setOpenFilter] = useState(false)


  return (
    <div className="bg-white mt-10">
        <div className="cursor-pointer ml-4 lg:hidden">
          <span className='font-medium' onClick={() => setOpenFilter(!openFilter)}>Category menu</span>
        </div>
          <div className={`${openFilter ? "left-0" : "-left-80"} absolute lg:hidden transition-all duration-700`}>
              <div className="ml-auto relative max-w-xl rounded-lg w-full bg-white shadow-md flex flex-col overflow-y-auto">
                {/* Filters */}
                <form className="">
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h2 className="font-semibold text-base mb-4">
                    More Category
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