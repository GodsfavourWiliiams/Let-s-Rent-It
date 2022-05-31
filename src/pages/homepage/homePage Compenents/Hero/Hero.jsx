import React from 'react';
import "./style.css";
// import heroImage from "../../../../component/Assets/image1.png";
import Product1 from "../../../../component/Assets/h.png";
import Product2 from "../../../../component/Assets/w.png";
import Product3 from "../../../../component/Assets/Laptop.png";
import Product4 from "../../../../component/Assets/gam.png";
import Product5 from "../../../../component/Assets/man2.png";
import Product6 from "../../../../component/Assets/mus.png";



const Hero = () => {
  return (
    <>
     <main className="hero-section bg-gray-200 flex md:flex-row flex-col items-start md:items-center md:justify-between justify-center">
        <div className='flex'>
            <div className="">
                <button className="mr-3 bg-red-600 text-white inline-block rounded border py-1 px-2 text-sm font-semibold ">
                    Shop By Category
                </button>
                <p className='inline-block rounded bg-red-600 py-1 px-2 text-sm font-semibold text-white'>Beats Solo</p>
                <span className="block font-bold text-3xl md:text-4xl xl:text-6xl py-2">
                    Wireless
                </span>
                <span
                    className="text-white"
                    >Headphone
                </span>
            </div>
            {/* <img src={heroImage} alt="" /> */}
        </div>
        <div className="flex pt-14 md:pt-6">
            <div className="text-left md:text-right md:w-80 lg:w-96">
            <h4 className="inline-block rounded bg-green-600 py-1 px-3 text-sm font-semibold text-white">Description</h4>
            <p className="pt-4">
                There are many variations passages of Lorem Ipsum available, but the
                majority have suffered alteration
            </p>
            </div>
        </div>
        </main>
    <section className="product-section">
      <div className="category bg-black grid">
        <div>
          <h3 className="text-white ">
            Enjoy <span className="block ">With</span
            ><span
              className=""
              >Musical Instrument</span
            >
          </h3>
          <button className="text-white bg-red-600 rounded-lg py-2 px-6 mt-2 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Browse
          </button>
        </div>
        <div className="product-img1">
          <img src={Product1} alt="" />
        </div>
      </div>
      <div className="category bg-yellow-300 grid">
        <div>
          <h3 className="text-white ">
            New <span className="block ">Wear</span
            ><span
              className=" "
              >Tools</span
            >
          </h3>
          <button
            className="bg-white rounded-lg py-2 px-6 mt-2 font-medium text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Browse
          </button>
        </div>
        <div className="product-img2">
          <img src={Product2} alt="" />
        </div>
      </div>
      <div className="category bg-red-500 grid">
        <div>
          <h3 className="text-white ">
            Trend <span className="block ">Devices</span
            ><span
              className=" "
              >Laptop</span
            >
          </h3>
          <button className="bg-red-600 rounded-lg py-2 px-6 mt-2 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Browse
          </button>
        </div>
        <div className="product-img3">
          <img src={Product3} alt="" />
        </div>
      </div>
      <div className="category bg-gray-200 grid">
        <div>
          <h3 className="text-black ">
            Best
            <span className="block  text-black">Light weight</span
            ><span
              className=""
              >Console</span
            >
          </h3>
          <button className="bg-red-600 rounded-lg py-2 px-6 mt-2 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Browse
          </button>
        </div>
        <div className="product-img4">
          <img src={Product4} alt="" />
        </div>
      </div>
      <div className="category bg-green-400 grid">
        <div>
          <h3 className="text-white ">
            Play <span className="block ">Game</span
            ><span
              className=" "
              >Console</span
            >
          </h3>
          <button className="text-green-600 bg-white rounded-lg py-2 px-6 mt-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
            Browse
          </button>
        </div>
        <div className="product-img5">
          <img src={Product5} alt="" />
        </div>
      </div>
      <div className="category bg-blue-400 grid">
        <div>
          <h3 className="text-white ">
            New <span className="block ">Light weight</span
            >
            <span
              className=" "
              >
                Speakers
            </span>
          </h3>
          <button className="text-blue-600 bg-white border rounded-lg py-2 px-6 mt-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Browse
          </button>
        </div>
        <div className="product-img6">
          <img src={Product6} alt="" />
        </div>
      </div>
    </section>          
     </>
  )
}

export default Hero;