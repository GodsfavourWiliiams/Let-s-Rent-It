import { useState } from 'react';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../component/collection-item/collection-item';
import Header from '../header-component/header';
import FooterComponent from '../footer-component/footer-component';

const CollectionSearch = () => {
    const [fixedCollections, setFixedCollections ] = useState(false);


    const onScrollTOp = () => {
        window.scrollY >= 35 ? setFixedCollections(true) : setFixedCollections(false)
        }
        window.addEventListener('scroll', onScrollTOp)


  return (
    <>
    <Header/>
        <section className={`${fixedCollections ? 'mt-56' : 'mt-6'}`}>
            <div className="container mx-auto px-4 lg:px-10">
            <div className="flex flex-wrap -mx-4 mb-6 md:mb-10 items-center justify-between">
                <div className="w-full lg:w-auto px-4 mb-6 xl:mb-0">
                <h2 className="text-md sm:text-2xl font-medium md:font-bold font-heading">
                    <span>Found {"-"} results for </span>
                    <span className="relative" >{"-"}</span>
                </h2>
                </div>
                <div className="w-full lg:w-auto px-4 flex flex-wrap items-center">
                    <div className="w-full sm:w-auto mb-3 sm:mb-0">
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
                        <div className="w-1/2 md:w-1/3 px-2 mb-3">
                            <div className="py-5 px-2 text-center bg-gray-50 rounded-lg">
                                <span className="font-medium font-heading">Category</span>
                                <ul className="hidden text-left mt-6">
                                <li className="mb-3">New in</li>
                                <li className="mb-3">Active</li>
                                <li className="mb-3">Drones &amp; Cameras</li>
                                <li className="mb-3">Computing</li>
                                <li className="mb-3">Multipacks</li>
                                <li className="mb-3">Brand</li>
                                <li className="mb-3">Music</li>
                                <li className="mb-3">Gifts</li>
                                <li className=''>Notes</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/3 px-2 mb-3">
                            <div className="py-6 px-4 text-center bg-gray-50 rounded-lg">
                                <span className="font-medium font-heading">Custom Price</span>
                               
                        </div>
                    </div>
                   </div>
                </div>
                <div className="hidden lg:block w-1/4 px-3">
                    <div className="mb-6 p-5 bg-gray-50 rounded-lg">
                        <h3 className="mb-5 text-xl font-bold font-heading">Category</h3>
                        <ul>
                            <li className="mb-3">New in</li>
                            <li className="mb-3">Active</li>
                            <li className="mb-3">Drones &amp; Cameras</li>
                            <li className="mb-3">Computing</li>
                            <li className="mb-3">Multipacks</li>
                            <li className="mb-3">Brand</li>
                            <li className="mb-3">Music</li>
                            <li className="mb-3">Gifts</li>
                            <li className=''>Notes</li>
                        </ul>
                    </div>
              
                <div className="mb-6 p-5 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold font-heading">Price</h3>
                    <fieldset className="w-full space-y-1 my-3">
                        <div className="flex w-full">
                            <div className=''>
                                <input type="text" name="price" placeholder="Min" className="flex flex-1 text-right border sm:text-sm rounded-l-md form__input outline-0 border-gray-300 text-gray-900 bg-white p-1.5 w-full" />
                            </div>
                            <div className=''>
                                <input type="text" name="price" placeholder="Max " className="flex flex-1 text-right border sm:text-sm form__input outline-0 border-gray-300 text-gray-900 bg-white p-1.5 w-full" />
                            </div>
                            <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md bg-gray-200">NGN</span>
                        </div>
                    </fieldset>
                         <button className='w-full p-2 font-medium rounded bg-primary-100 text-white'>
                            Apply
                        </button>
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
                <span className="inline-block bg-primary-100 text-sm text-white font-medium font-heading py-3 px-8 rounded-md uppercase" >Show More</span>
            </div>
        </div>
    </section>
    <FooterComponent/>
</>
  )
}

export default CollectionSearch;