import {useState} from 'react';
import Button from "../../../component/button-component/button";


const FormProduct = () => {
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
                            <label className="uppercase tracking-wide text-gray-700 text-xs font-medium mb-1"> Item Name </label>
                            <input 
                            type="text" 
                            className="text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-green-600 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity mt-2" 
                            placeholder='Enter item name' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                            </div>

                            <div className="mb-4">
                            <label className="uppercase tracking-wide text-gray-700 text-xs font-mudium mb-1"> Description </label>
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
                                    <label className="uppercase tracking-wide text-gray-700 text-xs font-medium mb-1"> Image upload </label>
                                    <input 
                                    type="text" 
                                    className="text-sm leading-none text-left text-gray-600 px-4 py-3 focus:border focus:border-green-600 bg-indigo-50 w-full relative outline-none rounded-lg transition transition-opacity mt-2" 
                                    placeholder='Enter image Url' 
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}/>
                                </div>

                                <div className="mb-4">
                                    <label className="uppercase tracking-wide text-gray-700 text-xs font-medium mb-1"> Category </label>
                                        <select 
                                        className="appearance-none w-full text-sm bg-indigo-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-green-500 mt-2" 
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option>Select Directory</option>
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
                                <label className="uppercase tracking-wide text-gray-700 text-xs font-medium mb-1"> Price </label>
                                <div className="grid grid-cols-3 gap-x-2 ">
                                <div className="col-span-2">
                                     <div className="flex mt-2">
                                        <input type="text" name="price" id="price" placeholder="99 999,99" className="appearance-none w-full bg-indigo-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-l-lg leading-tight focus:outline-none focus:border-green-500"
                                         value={price}
                                         onChange={(e) => setPrice(e.target.value)} />
                                        <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md bg-gray-200">NGN</span>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div className="mb-4 w-full">
                                
                                <div className="grid grid-cols-3 gap-x-2 ">
                                <div className="col-span-2">
                                <label className="uppercase tracking-wide text-gray-700 text-xs font-medium mb-1"> Reviews  </label>
                                    <input type="number"
                                    className="appearance-none w-full bg-indigo-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:border-green-500 mt-2" 
                                    placeholder="100"
                                    value={reviews}
                                    onChange={(e) => setReviews(e.target.value)} />
                                </div>
                                <div>
                                <label className="uppercase tracking-wide text-gray-700 text-xs font-medium mb-1"> Rating  </label>
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
                                onClick={() => {}}
                                > Submit item </Button>

                            </div>
                        </form>

                </article>
            </section>
          
         </div>
  )
}

export default FormProduct