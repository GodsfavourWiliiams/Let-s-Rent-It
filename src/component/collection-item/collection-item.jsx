import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaExpand, FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { toast } from 'react-toastify';

const CollectionItem = ({ addItem, item }) => {
  const { name, price, imageUrl } = item;
  const navigate = useNavigate();
  
  console.log(item)

  return (
    <>
       <div className="product__item group relative border rounded-lg cursor-pointer">
            <div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80 lg:aspect-none">
              <img
                src={imageUrl}
                alt="names"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between p-3">
              <div>
                <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {name}
                </h3>
                <div className="product__hover">
                    <FaShoppingCart className='cart p-2 rounded-lg bg-white shadow-sm hover:bg-green-500 hover:text-white'  onClick={() => {
                            addItem(item)
                            toast.success( name + "succecfully added")
                          }}/>
                    <FaExpand className='cart p-2 rounded-lg bg-white shadow-sm hover:bg-green-500 hover:text-white'
                    onClick={() => {
                      // navigate(`/shop/${item.routeName}`)
                    }
                    }
                    />
                </div>
                <p className="mt-1 text-sm text-gray-500">Shop Now</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$ {price}</p>
            </div>
      </div>
  </>
        
)
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);