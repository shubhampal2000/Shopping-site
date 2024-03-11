import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../Redux/actions/removeItemFromCart";
import { addItemToCart } from "../../Redux/actions/addItemToCart";

const CartProduct = ({ ids, removecart, value }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[100%] lg:w-[70%] md:justify-evenly md:w-[70%] p-2 lg:justify-evenly h-[12rem] bg-white flex ">
      <div className="h-full md:w-[20%] w-[40%] lg:w-[20%]  flex items-center ">
        <img
          src={value?.image}
          alt=""
          className="h-auto w-[100%] max-h-40 max-w-48 p-2 object-contain"
        />
      </div>

      <div className="w-[60%] h-full  flex flex-col justify-evenly">
        <p className="font-semibold">{value?.category}</p>
        <p className="italic">{value?.title}</p>
        <p className="font-bold"> ₹ {value?.price}</p>
        <p className="flex items-center">
          {value?.rating.rate} <CiStar />{" "}
          <span className="text-gray-400">({value?.rating.count}) </span>{" "}
        </p>
        <div className="flex justify-start items-center gap-2">
          <span
            onClick={() => dispatch(removeItemFromCart(value))}
            className=" cursor-pointer px-1 inline-block w-7 border-2 border-solid bg-slate-200 text-center text-[1.2rem] font-semibold"
          >
            {" "}
            -{" "}
          </span>
          <span>{value?.quantity}</span>
          <span
            onClick={() => dispatch(addItemToCart(value))}
            className="cursor-pointer px-1 border-2 inline-block w-7 border-solid bg-slate-200 text-center text-[1.2rem] font-semibold"
          >
            {" "}
            +{" "}
          </span>
        </div>
        <div className="flex flex-row items-start justify-evenly lg:justify-normal lg:gap-3">
          <button className="px-2 py-0.5 bg-blue-600 hover:bg-blue-700 font-semibold text-white rounded-lg ">
            Buy now
          </button>
          <button
            onClick={() => {
              dispatch(removeItemFromCart(value));
            }}
            className="px-2 py-0.5 bg-red-600 hover:bg-red-700 font-semibold text-white rounded-lg "
          >
            Remove{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
