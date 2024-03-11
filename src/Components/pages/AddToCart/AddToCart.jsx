import React, { useEffect, useState } from "react";
import CartProduct from "../../Sharedcomponents/CartProduct";
import { UseSelector, useSelector } from "react-redux";

const AddToCart = () => {
  const [cartdata, setCartdata] = useState();

  const fetchCartData = async () => {
    const response = await fetch("http://localhost:4000/cart");
    const result = await response.json();
    setCartdata(result);
  };

  // const handleRemove = async (id) => {
  //   let resp = await fetch(`http://localhost:4000/cart/${id}`, {
  //     method: "Delete",
  //   });
  //   let res = await resp.json();
  //   console.log("resultremove", res);

  //   if (res) {
  //     fetchCartData();
  //   }
  // };

  // useEffect(() => {
  //   fetchCartData();
  // }, []);

  const state = useSelector((state) => state.cartReducer.cart);
  
  let total = state.map(value=> value.price).reduce((acc, curr) => acc + curr, 0);
  
  return (
    <>
      <div className="flex flex-row  bg-slate-200 ">
        <div className=" p-8 h-[90vh] w-[80vw] lg:items-center  md:items-center flex flex-col overflow-scroll gap-5  bg-slate-200">
          {state &&
            state.map((value) => (
              <CartProduct value={value} key={Math.random()} ids={value?.id} />
            ))}
        </div>
       
        <div className="w-[20vw] bg-slate-200 p-7">
          <div className="w-full flex flex-col gap-5 ">
            <h4 className="font-sans text-[1.1rem]"> Price Details</h4>
            <div className="flex justify-between">
              <h5>Total Price</h5>
              <p> {Math.floor(total)} $</p>
            </div>
            <div className="flex justify-between">
              <h5>Delivery Charges</h5>
              <p>Free</p>
            </div>
            <div className="font-semibold flex justify-between">
              <h5 className="">Amount Payable </h5>
              <p>{Math.floor(total) } $</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
