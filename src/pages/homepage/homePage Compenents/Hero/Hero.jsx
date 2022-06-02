import React, { CSSProperties } from 'react';
import "./style.css";
// import heroImage from "../../../../component/Assets/image1.png";
import Product1 from "../../../../component/Assets/h.png";
import Product2 from "../../../../component/Assets/w.png";
import Product3 from "../../../../component/Assets/Laptop.png";
import Product4 from "../../../../component/Assets/gam.png";
import Product5 from "../../../../component/Assets/man2.png";
import Product6 from "../../../../component/Assets/mus.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";



const arrowStyles: CSSProperties = {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 15px)',
      width: 30,
      height: 30,
      cursor: 'pointer',
  };

  const indicatorStyles: CSSProperties = {
      background: '#fff',
      width: 12,
      height: 12,
      display: 'inline-block',
      margin: '0 8px',
      borderRadius: "50%",
  };



const Hero = () => {
  return (
    <>
        <Carousel
        // autoPlay={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 22 }}>
                        <FaArrowLeft/>
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                        <FaArrowRight/>
                    </button>
                )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            className='animate animate-ping w-40'
                            style={{ ...indicatorStyles, background: '#000' }}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}
        >
        <main className="hero-section transition-all ease-in-out duration-700  bg-gray-200 flex md:flex-row flex-col items-start md:items-center md:justify-between justify-center">
             Slide One 
        </main>
        <main className="hero-section transition-all ease-in-out duration-700  bg-gray-200 flex md:flex-row flex-col items-start md:items-center md:justify-between justify-center">
            Slide Two    
        </main>
         <main className="hero-section  bg-gray-200 flex md:flex-row flex-col items-start md:items-center md:justify-between justify-center">
            Slide Three
        </main>
    </Carousel>
    
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