import { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { RadioGroup } from '@headlessui/react';
import Button from '../button-component/button';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
// import { selectOverview } from '../../redux/shop/shop.selectors';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-300' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: false },
  ],
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CollectionViewMore = ({ item }) => {
  // const { productId } = useParams();
  // const collection = useSelector(selectOverview(productId));
  const dispatch = useDispatch();
  const aaddItemHandler = item => dispatch(addItem(item))
  console.log(item);

 
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
      <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="w-full px-4 my-16 max-w-5xl mx-auto grid grid-cols-1 gap-y-8 gap-x-6 items-start lg:grid-cols-12 lg:gap-x-8">
            <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
              <img src={product.src} alt="names" className="object-center object-cover" />
            </div>

              {/*  */}

                  <div className="sm:col-span-8 md:lg-col-span-5 lg:col-span-7">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">PRODUCT NAME</h2>
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>

                    <section aria-labelledby="information-heading" className="mt-2">
                      <p className="text-2xl text-gray-900">{product.price}</p>

                      {/* Reviews */}
                      <div className="mt-4">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((ratings) => (
                              <FaStar
                                key={ratings + 1}
                                className={classNames(
                                  reviews.average > ratings ? 'text-gray-900' : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <a href="/" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {product.reviewCount} reviews
                          </a>
                        </div>
                      </div>
                    </section>


                        {/* Colors */}
                        <div className='mt-8'>
                          <h4 className="text-sm text-gray-900 font-medium">Color</h4>

                          <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                            <span className="flex items-center space-x-3">
                              {product.colors.map((color) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      active && checked ? 'ring ring-offset-1' : '',
                                      !active && checked ? 'ring-2' : '',
                                      '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                    )
                                  }
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))}
                            </span>
                          </RadioGroup>
                        </div>
                    <div className=''>           
                        {/* description */}
                        <div className="mt-8">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm text-gray-900 font-medium">Description {''}</h4>
                            <a href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              Model guide
                            </a>
                          </div>

                            <p className="leading-relaxed mt-4 text-justify ">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                            </p>
                        </div>
                        <Button
                          className="mt-6 w-full bg-primary-100 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                          onClick={(e) => {
                            aaddItemHandler(item)
                            e.preventDefault()
                          }}
                        >
                          Add to bag
                        </Button>
                        </div>
                  </div>
                </div>
      </section>
  )
}

export default CollectionViewMore;