import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg overflow-hidden border mb-4">
      <div className="flex items-center p-4 w-full md:w-2/5">
        <ImCross
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-red-500 hover:text-red-700 duration-300 cursor-pointer mr-4"
        />
        <img className="w-20 h-20 object-cover" src={item.image} alt="productImage" />
        <h1 className="ml-4 text-lg font-semibold text-gray-800">{item.name}</h1>
      </div>
      <div className="flex items-center justify-between w-full md:w-3/5 p-4 border-t md:border-t-0 md:border-l">
        <div className="text-lg font-semibold text-gray-700">${item.price}</div>
        <div className="flex items-center">
          <button
            onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
            className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-900 duration-300 border rounded-full"
          >
            -
          </button>
          <p className="mx-4 text-lg">{item.quantity}</p>
          <button
            onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
            className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-900 duration-300 border rounded-full"
          >
            +
          </button>
        </div>
        <div className="text-lg font-bold text-gray-800">${(item.quantity * item.price).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ItemCard;

