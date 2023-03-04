
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/GetFoodSlice';
// import Button from './Button';

const FoodItem = (props) => {
  const dispatch=useDispatch();
  const{name,dsc,img,price}=props;
  return (
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4  sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={img}/>
        </div>
        <h2 className="text-xl font-medium title-font text-white mt-5">{name}</h2>
        <p className="text-base leading-relaxed mt-2">{dsc}</p>
        <button onClick={()=>dispatch(addToCart(props))} className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
        </button>
      </div>
    </div>
  )
}

export default FoodItem
