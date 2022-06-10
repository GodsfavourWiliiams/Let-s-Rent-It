import {useState, Fragment} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from "../../../component/button-component/button";
import { FaStar }  from "react-icons/fa";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const FormProduct = () => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [reviews, setReviews] = useState("");
    const [rating, setRating] = useState("");

    const CreateNewItem = event => {
        event.preventDefault();
        console.log(
            name,
            description,
            imageUrl,
            price,
            category,
            rating,
            reviews)
    }
  return (
        <div className="flex min-h-screen">
            <section className="container">
                <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 my-5">
                    <h2 className="mb-3 text-xl md:text-2xl font-semibold text-black">
                        Create new item
                    </h2>

                        <form onSubmit={CreateNewItem}>
                            <div className="mb-4">
                            <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"> Item Name </label>
                            <input 
                            type="text" 
                            className="text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-green-600 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity mt-2" 
                            placeholder='Enter item name' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                            </div>

                            <div className="mb-4">
                            <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"> Description </label>
                            <textarea 
                            rows="4" 
                            className="text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-green-600 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity mt-2" 
                            placeholder="Type here" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-2">
                                
                                <div className="mb-4">
                                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"> Image upload </label>
                                    <input 
                                    type="text" 
                                    className="text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-green-600 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity mt-2" 
                                    placeholder='Enter image Url' 
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}/>
                                </div>

                                <div className="mb-4">
                                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"> Category </label>
                                        <select 
                                        className="appearance-none w-full text-sm bg-indigo-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-green-500 mt-2" 
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option value=""> Drones </option>
                                            <option value=""> Tripods </option>
                                            <option value="Cameras"> Cameras </option>
                                            <option value="Tools"> Tools </option>
                                            <option value="Musical Instruments">Musical Instruments</option>
                                            <option value="Speakers">Speakers</option>
                                        </select>
                                </div>     
                            </div>
                            <div className='grid md:grid-cols-2 gap-x-2'>
                            <div className="mb-4 w-full">
                                <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"> Price </label>
                                <div className="grid grid-cols-3 gap-x-2 ">
                                <div className="col-span-2">
                                    <input type="number" 
                                    className="appearance-none w-full bg-indigo-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:border-green-500 mt-2" 
                                    placeholder="10,000" 
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input className="appearance-none w-full bg-indigo-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:border-green-500 mt-2" value="NGN" readOnly/>
                                </div>
                                </div>
                            </div>
                            <div className="mb-4 w-full">
                                
                                <div className="grid grid-cols-3 gap-x-2 ">
                                <div className="col-span-2">
                                <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"> Reviews  </label>
                                    <input type="number"
                                    className="appearance-none w-full bg-indigo-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:border-green-500 mt-2" 
                                    placeholder="100"
                                    value={reviews}
                                    onChange={(e) => setReviews(e.target.value)} />
                                </div>
                                <div>
                                <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"> Rating  </label>
                                    <select className="appearance-none w-full bg-indigo-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-green-500 mt-2" placeholder="Select one option"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}>
                                        <option> 1</option>
                                        <option> 2</option>
                                        <option> 3</option>
                                        <option> 4</option>
                                        <option> 5</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="flex justify-between mt-4">
                                
                                <Button className="border-red-600 border border-transparent rounded-lg py-3 px-8 flex items-center justify-center text-base font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" 
                                onClick={(e) => {
                                    e.preventDefault()
                                    setName("");
                                    setDescription("");
                                    setImageUrl("");
                                    setPrice("");
                                    setCategory("");
                                    setRating("");
                                    setReviews("");
                                    
                                }}> Clear </Button>
                                
                                <Button className="border-green-600 border rounded-lg py-3 px-8 flex items-center justify-center text-base font-medium text-green-600 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 " 
                                onClick={() => setOpen(true)}
                                > Submit item </Button>

                            </div>
                        </form>

                </article>
            </section>
            <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Confirm item Submition
                      </Dialog.Title>
                      <div className="mt-2">
                      <section className="text-gray-700 body-font overflow-hidden bg-white">
                        <div className="w-full max-w-6xl mx-auto ">
                            <div className="rounded-lg bg-gray-100 overflow-hidden ">
                            <img src={imageUrl} alt="names" className="object-center object-" />
                            </div>

                            {/*  */}

                                <div className="text-left mt-2">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
                                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{name}</h2>

                                    <section aria-labelledby="information-heading" className="mt-2">
                                    <p className="text-2xl text-gray-900">{price}</p>

                                    {/* Reviews */}
                                    <div className="mt-4">
                                        <h4 className="sr-only">Reviews</h4>
                                        <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((ratings) => (
                                            <FaStar
                                                key={ratings + 1}
                                                className={classNames(
                                                rating > ratings ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                            ))}
                                        </div>
                                        <a href="/" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            {reviews} reviews
                                        </a>
                                        </div>
                                    </div>
                                    </section>


                                    <div className=''>           
                                        {/* description */}
                                        <div className="mt-8">
                                            <p className="leading-relaxed mt-4 text-justify ">{description}</p>
                                        </div>
                                        
                                        </div>
                                </div>
                                </div>
                             </section>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <Button
                    type="Button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Submit
                  </Button>
                  <Button
                    type="Button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
         </div>
  )
}

export default FormProduct