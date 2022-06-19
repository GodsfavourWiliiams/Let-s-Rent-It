import React, {useState, useEffect} from 'react';
import "./style.css";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";



const slideWidth = 30.7;

const _items = [
    {
        player: {
            title: 'Williams Godsfavour',
            desc: '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
            image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
        },
    },
    {
        player: {
            title: "Ronnie O'Sullivan",
            desc: "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “",
            image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
        },
    },
    {
        player: {
            title: 'Shane Van Boening',
            desc: '“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “',
            image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
        },
    },
    {
        player: {
            title: 'Mike Sigel',
            desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
            image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
        },
    },
    {
        player: {
            title: 'Willie Mosconi',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <div className="carousel__slide-item text-center transition-all ease-in-out duration-700 " style={item.styles} >
                    <div className="relative block p-px overflow-hidden transition duration-300 transform border rounded-md shadow-sm group hover:shadow-sm">
                    <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-primary-100 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-primary-100 group-hover:scale-y-100" />
                    <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-primary-100 group-hover:scale-x-100" />
                    <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-primary-100 group-hover:scale-y-100" />
                    <div className="relative p-3 bg-white rounded-sm">
                        <div className="flex mb-2 items-center justify-center" >
                        <div className="flex items-center justify-center skeleton-box w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-0 lg:mb-0">
                            <span
                            className="w-14 h-14 text-primary-100"
                            >
                            <img src={''} alt="" className='' />
                            </span>
                        </div>
                        
                        </div>
                        <h6 className="font-semibold leading-10 text-center">{item.player.title}</h6>
                        <p className="mb-2 text-xs sm:text-sm text-center text-gray-900">{item.player.desc}</p>
                        
                    </div>
                </div>
            </div>
    );
};

const keys = Array.from(Array(_items.length).keys());
const TestimonialSlides = () => {
    const [items, setItems] = useState(keys);
    const [isTicking, setIsTicking] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);


  return (
    <div>
        <div className="carousel__wrap">
            <div className="relative h-60 w-full py-6 overflow-hidden">
                <button className="carousel__btn absolute left-0 bg-black rounded-r-lg sm:rounded-r-xl bg-black py-2 sm:py-3 px-1 sm:px-2 text-md sm:text-xl text-white" onClick={() => prevClick()}>
                        <FaAngleLeft className=""/>
                   </button>
                    <div className="carousel__slide-list ">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </div>
                <button className="carousel__btn absolute rounded-l-lg sm:rounded-l-xl bg-black py-2 sm:py-3 px-1 sm:px-2 text-md sm:text-xl text-white right-0" onClick={() => nextClick()}>
                  <FaAngleRight/>            
                     </button>
               
            </div>

        </div>
      
    </div>
  )
}

export default TestimonialSlides