import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import BlogOne from "../../component/Assets/image-01.jpg";
import BlogTwo from "../../component/Assets/image-02.jpg";


const BlogPreview = () => {
  return (
    <div className="my-16">
        <div className="container mx-auto px-3 lg:px-10 flex items-center justify-between">
            <p className="font-semibold">Read our Blog posts</p>
            <div className="flex items-center justify-center">
              <Link to="/blog" className='font-semibold'>Go to Blog</Link>
              <FaAngleRight className='text-gray-600 mt-1'/>
            </div>
        </div>
	<div className="container grid grid-cols-12 gap-6 mx-auto p-3 my-6 lg:px-10">
        <div className="flex rounded-lg flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-100 lg:col-span-5 lg:h-auto">
            <img src={BlogOne} alt="" />
        </div>
		<div className="absolute p-6" >
             <span className=" rounded-lg bg-gray-200 py-1 px-3 text-sm sm:font-semibold font-medium text-primary-100">Dinner tips</span> 
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
				<div className="flex flex-col flex-1 py-3">
					<p className="rounded-full w-20 bg-gray-200 py-1 px-3 text-sm font-bold text-primary-100 ">Cameras</p>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Which vegetable your family will love and want’s eat each day</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>Author</span>
						<span>15. 6. 2020</span>
					</div>
				</div>
		</div>

		<div className="flex flex-col">
			<div className=" space-y-2">
				<h1 className="text-md font-bold">Lorem ipsum dolor sit.</h1>
				<p>playing games is kinda good start to your morning routines</p>
				<span className="inline-flex items-center py-2 space-x-2 text-sm ">
					<span>Author</span>
					<span>14.1.2022</span>
				</span>
			</div>
			<div className="space-y-2">
				<h1 className="text-md font-bold">Lorem ipsum dolor sit.</h1>
				<p>Our Drones tips for a great and healthy Income</p>
				<span className="inline-flex items-center py-2 space-x-2 text-sm ">
					<span>Author</span>
					<span>14.1.2022</span>
				</span>
			</div>
			<div className="space-y-2">
				<h1 className="text-md font-bold">Lorem ipsum dolor sit.</h1>
				<p>Prepare a simple and delicious breads</p>
				<span className="inline-flex items-center py-2 space-x-2 text-sm ">
					<span>Author</span>
					<span>14.1.2023</span>
				</span>
			</div>
		</div>
        </div>
	</div>
</div>
  )
}

export default BlogPreview;