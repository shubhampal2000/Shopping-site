import React, { useEffect, useState } from "react";
import CartProduct from "../../Sharedcomponents/CartProduct";

const AddToCart = () => {
  const [cartdata, setCartdata] = useState();

  const fetchCartData = async () => {
    const response = await fetch("http://localhost:4000/cart");
    const result = await response.json();
    setCartdata(result);
  };

  const handleRemove = async (id) => {
    let resp = await fetch(`http://localhost:4000/cart/${id}`, {
      method: "Delete",
    });
    let res = await resp.json();
    console.log("resultremove", res);

    if (res) {
      fetchCartData();
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div className="h-[90vh] lg:items-center md:items-center flex flex-col p-8 gap-5 overflow-scroll bg-slate-200">
      {cartdata &&
        cartdata.map((value) => (
          <CartProduct
            key={Math.random()}
            removecart={handleRemove}
            ids={value?.id}
          />
        ))}
    </div>
  );
};

export default AddToCart;
