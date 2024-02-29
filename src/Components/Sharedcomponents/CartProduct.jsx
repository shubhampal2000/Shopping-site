import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

const CartProduct = ({ ids, removecart }) => {
  const [cartdata, setCartdata] = useState();

  const fetchCartData = async () => {
    const response = await fetch(`http://localhost:4000/product/${ids}`);
    const result = await response.json();
    setCartdata(result);
  };

  useEffect(() => {
    if (ids && ids > 0) {
      fetchCartData();
    }
  }, [ids]);

  
  return (
    <div className="w-[100%] lg:w-[70%] md:justify-evenly md:w-[70%] p-2 lg:justify-evenly h-[12rem] bg-white flex ">
      <div className="h-full md:w-[20%] w-[40%] lg:w-[20%]  flex items-center ">
        <img
          src={cartdata?.image}
          alt=""
          className="h-auto w-[100%] max-h-40 max-w-48 p-2 object-contain"
        />
      </div>

      <div className="w-[60%] h-full  flex flex-col justify-evenly">
        <p className="font-semibold">{cartdata?.category}</p>
        <p className="italic">{cartdata?.title}</p>
        <p className="font-bold"> ₹ {cartdata?.price}</p>
        <p className="flex items-center">
          {cartdata?.rating.rate} <CiStar />{" "}
          <span className="text-gray-400">({cartdata?.rating.count}) </span>{" "}
        </p>
        <div className="flex flex-row items-start justify-evenly lg:justify-normal lg:gap-3">
          <button className="px-2 py-0.5 bg-blue-600 hover:bg-blue-700 font-semibold text-white rounded-lg ">
            Buy now
          </button>
          <button
            onClick={() => {
              removecart(cartdata.id);
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
