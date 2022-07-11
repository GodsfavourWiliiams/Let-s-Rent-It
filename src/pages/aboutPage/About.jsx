import {useState} from 'react';
import FooterComponent from '../../component/footer-component/footer-component';
import Header from '../../component/header-component/header';
import Image1 from "../../component/Assets/image-1.jpg";
import Image2 from "../../component/Assets/image-2.jpg";
import Image3 from "../../component/Assets/image-3.jpg";



const About = () => {
    const [fixedCollections, setFixedCollections ] = useState(false);

    const onScrollTOp = () => {
      window.scrollY >= 35 ? setFixedCollections(true) : setFixedCollections(false)
      }
      window.addEventListener('scroll', onScrollTOp)
  return (
      <>
      <Header/>
          <section className={`${fixedCollections ? 'mt-56' : 'mt-6'} overflow-hidden pt-12 pb-12 container mx-auto px-3 lg:px-10`}>
            <div className="">
                <div className="-mx-4 flex flex-wrap items-center justify-between">
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="-mx-3 flex items-center sm:-mx-4">
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                            <div className="py-3 sm:py-4">
                            <img
                                src={Image1}
                                alt="1"
                                className="w-full rounded-2xl"
                            />
                            </div>
                            <div className="py-3 sm:py-4">
                            <img
                                src={Image2}
                                alt="2"
                                className="w-full rounded-2xl"
                            />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                            <div className="relative z-10 my-4">
                            <img
                                src={Image3}
                                alt="3"
                                className="w-full rounded-2xl"
                            />
                            <span className="absolute -right-7 -bottom-7 z-[-1]">
                                <svg
                                width="134"
                                height="106"
                                viewBox="0 0 134 106"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <circle
                                    cx="1.66667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 104)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 104)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="31"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 31 104)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 104)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="60.3334"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 60.3334 104)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 104)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="117.667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 104)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 104)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="103"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 103 104)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="132"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 132 104)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 89.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 89.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="31"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 89.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 89.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 89.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 89.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="117.667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 89.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 89.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="103"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 103 89.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="132"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 132 89.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="74.6673"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 74.6673)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 31.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 74.6668)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 31.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="31"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 31 74.6668)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="31"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 31 31.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 74.6668)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 31.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 74.6668)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 30.9998)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 74.6668)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 30.9998)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="117.667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 74.6668)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="117.667"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 30.9998)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 74.6668)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 30.9998)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="103"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 103 74.6668)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="103"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 103 30.9998)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="132"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 132 74.6668)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="132"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 132 30.9998)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 60.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 16.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 60.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 16.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="31"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 31 60.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="31"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 16.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 60.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 16.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 60.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 16.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 60.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 16.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="117.667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 60.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="117.667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 16.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 60.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 16.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="103"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 103 60.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="103"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 103 16.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="132"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 132 60.0003)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="132"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 132 16.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 45.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="1.66667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 1.66683)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 45.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="16.3333"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 1.66683)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="31"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 45.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="31"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 31 1.66683)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 45.3333)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="45.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 1.66683)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 45.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="60.3333"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 1.66683)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 45.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="88.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 1.66683)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="117.667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 45.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="117.667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 1.66683)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 45.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="74.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 1.66683)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="103"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 103 45.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="103"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 103 1.66683)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="132"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 132 45.3338)"
                                    fill="#6A983C"
                                />
                                <circle
                                    cx="132"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 132 1.66683)"
                                    fill="#6A983C"
                                />
                                </svg>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                <div className="w-full px-4 lg:w-5/12">
                    <div className="mt-10 lg:mt-0">
                    <span className="mb-2 block sm:text-md font-medium text-green-500">
                        Why Choose Us
                    </span>
                    <h2 className="mb-8 text-xl font-semibold text-dark sm:text-3xl">
                        Make your customers happy by giving services.
                    </h2>
                    <p className="mb-8 text-base ">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less.
                    </p>
                    <p className="mb-12 text-base ">
                        A domain name is one of the first steps to establishing your
                        brand. Secure a consistent brand image with a domain name that
                        matches your business.
                    </p>
                    <button
                        className="inline-flex items-center justify-center rounded-lg bg-primary-100 py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Get Started
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </section>
        <FooterComponent/>
      </>
  )
}

export default About