import React from 'react';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../component/collection-item/collection-item';

const CollectionSearch = () => {
  return (
        <section className="">
            <div className="container mx-auto px-4 lg:px-10">
            <div className="flex flex-wrap -mx-4 mb-10 items-center justify-between">
                <div className="w-full lg:w-auto px-4 mb-6 xl:mb-0">
                <h2 className="text-md sm:text-2xl font-medium md:font-bold font-heading">
                    <span>Found {"-"} results for </span>
                    <span className="relative" >{"-"}</span>
                </h2>
                </div>
                <div className="w-full lg:w-auto px-4 flex flex-wrap items-center">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                        <select className="appearance-none w-full bg-indigo-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-green-500 mt-2" name="" id="">
                        <option value="1">Sort by newest</option>
                        <option value="2">Sort by price</option>
                        <option value="3">Sort by most popular</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-16">
                <div className="w-full lg:hidden px-3">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-1/2 md:w-1/3 px-2 mb-4">
                            <div className="py-6 px-2 text-center bg-gray-50 rounded-lg">
                                <span className="font-medium font-heading">Category</span>
                                <ul className="hidden text-left mt-6">
                                <li className="mb-4"><a href="/">New in</a></li>
                                <li className="mb-4"><a href="/">Activewear</a></li>
                                <li className="mb-4"><a href="/">Hoodies &amp; Sweatshirts</a></li>
                                <li className="mb-4"><a href="/">Jackets</a></li>
                                <li className="mb-4"><a href="/">Multipacks</a></li>
                                <li className="mb-4"><a href="/">Bags</a></li>
                                <li className="mb-4"><a href="/">Sports</a></li>
                                <li className="mb-4"><a href="/">Gifts</a></li>
                                <li><a href="/">Notes</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/3 px-2 mb-4">
                            <div className="py-6 px-4 text-center bg-gray-50 rounded-lg">
                                <span className="font-medium font-heading">Custom Price</span>
                               
                        </div>
                    </div>
                   </div>
                </div>
                <div className="hidden lg:block w-1/4 px-3">
                    <div className="mb-6 sm:p-6 p-4 bg-gray-50 rounded-lg">
                        <h3 className="mb-6 text-lg sm:text-xl font-medium sm:font-bold font-heading">Category</h3>
                        <ul>
                        <li className="mb-3">New in</li>
                        <li className=''>Notes</li>
                        </ul>
                    </div>
              
                <div className="mb-6 py-6 px-6 bg-gray-50 rounded-lg">
                    <h3 className="mb-6 text-xl font-bold font-heading">Custom Price</h3>
                    <fieldset className="space-y-1 sm:w-60 text-gray-900">
                        
                    </fieldset>
                </div>
                
                </div>
                <div className="w-full lg:w-3/4 px-3">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <h1 className=''>search output</h1>
                    </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <span className="inline-block bg-primary-100 text-sm text-white font-medium font-heading py-4 px-8 rounded-md uppercase" >Show More</span>
            </div>
        </div>
    </section>
  )
}

export default CollectionSearch;