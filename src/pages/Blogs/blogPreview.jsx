import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import BlogOne from "../../component/Assets/image-01.jpg";
import BlogTwo from "../../component/Assets/image-02.jpg";


const BlogPreview = () => {
  return (
    <div className="my-16">
        <div className="container mx-auto px-3 lg:px-10 flex items-center justify-between">
            <p className="sm:font-semibold">Read our Blog posts</p>
            <div className="flex items-center justify-center">
              <Link to="/blog" className='sm:font-semibold'>Go to Blog</Link>
              <FaAngleRight className='text-gray-600 mt-1'/>
            </div>
        </div>
	<div className="container grid grid-cols-12 gap-6 mx-auto p-3 my-6 lg:px-10">
        <div className="flex rounded-lg flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-100 lg:col-span-5 lg:h-auto">
            <img src={BlogOne} alt="" />
        </div>
		<div className="absolute p-6" >
             <span className=" rounded-lg bg-gray-200 py-1 px-3 text-sm sm:font-semibold font-medium text-primary-100">Rent tips</span> 
		</div>

        <div className="flex justify-center flex-col md:flex-row col-span-12 lg:col-span-7 gap-6 ">
        
        <div className="flex flex-col">
            <div className="min-h-52 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg group-hover:opacity-75 lg:aspect-none flex-shrink-0 overflow-hidden mx-auto w-full h-52">
                    <img
                    src={BlogTwo}
                    alt="blog"
                    className="w-full h-52 object-cover"
                    />
                </div>
				<div className="flex flex-col py-3">
					<span className="rounded-full bg-gray-200 py-1 px-3 text-sm font-semibold text-primary-100 ">Gadgets</span>
					<h3 className="py-2 text-lg font-semibold leading-snug">Which product your company will love and want’s use each day</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>Author</span>
						<span>15. 6. 2020</span>
					</div>
				</div>
		</div>

		<div className="flex flex-col space-y-3">
			<div className="flex items-center justify-between ">
                <div className="">
                    <p className='font-semibold text-gray-700'>Playing games is kinda good start to your morning routines</p>
                    <span className="inline-flex items-center py-2 space-x-2 text-sm ">
                        <span>Author</span>
                        <span className=''>14.1.2022</span>
                    </span>
                </div>
                <div className="h-24 w-24 ml-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQdSAYq2nyDDOc2aZnQH4Lx5a-1Vsvsw0eA6ZNWILlA&s"
                    alt="name"
                    className="h-full w-full object-cover object-center"
                    />
                </div>
			</div>
			<div className="flex items-center justify-between ">
                <div className="">
                    <p className='font-semibold text-gray-700'>Our Drones tips for a great and healthy Income</p>
                    <span className="inline-flex items-center py-2 space-x-2 text-sm ">
                        <span>Author</span>
                        <span>14.1.2022</span>
                    </span>
                </div>
                <div className="h-24 w-24 ml-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0NAikNgsxuMKRS7nT80LuyMutu012xevd5ajUH1N5-GGDZoFa3EDthhF71bl422sWX0&usqp=CAU"
                    alt="name"
                    className="h-full w-full object-cover object-center"
                    />
                </div>
			</div>
			<div className="flex items-center justify-between">
                <div className="">
                    <p className='font-semibold text-gray-700'>Prepare a simple and delicious breads</p>
                    <span className="inline-flex items-center py-2 space-x-2 text-sm ">
                        <span>Author</span>
                        <span>14.1.2023</span>
                    </span>
                </div>
                <div className="h-24 w-24 ml-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                    src="data:image/jpeg;base64,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"
                    alt="name"
                    className="h-full w-full object-cover object-center"
                    />
                </div>    
			</div>
		</div>
        </div>
	</div>
</div>
  )
}

export default BlogPreview;