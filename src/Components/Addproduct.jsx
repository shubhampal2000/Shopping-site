import React, { useState } from "react";

const Addproduct = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const[image,setImage]=useState()


    const handleSubmit = async(e)=>{

        e.preventDefault();
        let res = await fetch("http://localhost:4000/product",{
            method: "POST",
            body:JSON.stringify({id:Math.random,title,description,price,category, image}),
            headers: {"Content-Type":"application/json"},
        });
        const result = await res.json();
        console.log(result);
    }

  return (
    <div className="h-[90vh]  bg-no-repeat bg-cover bg-[20%] lg:bg-cover  bg-[url('https://media.istockphoto.com/id/1557816716/photo/concept-add-to-cart-online-shopping-ecommerce-and-delivery-service-the-hand-holds-a-wooden.jpg?s=1024x1024&w=is&k=20&c=kyvj2LChNNZnM553ujTcWjiOQSY8yiCzYnV9SrVOeew=')]  flex flex-col justify-center items-center">
      <form className="h-full w-full items-center md:items-center lg:justify-center lg:items-center  lg:h-full lg:w-1/2 lg:right-0 lg:top-0 lg:absolute    flex bg-white flex-col gap-4  border-gray-500 px-12 shadow-md shadow-gray-600 py-8 rounded-md">
        <h4 className="text-center lg:self-center lg:text-3xl text-2xl font-thin self-start md:self-center "> Product's Details</h4>
        <label htmlFor=""  className="w-full md:w-1/2 lg:w-1/2 bg-transparent border-b-2 border-b-cyan-500 focus:border-b-cyan-600   ">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" bg-transparent outline-none"
            type="text"
            placeholder="Enter product title"
          />
        </label>
        <label htmlFor=""  className="w-full md:w-1/2 lg:w-1/2  bg-transparent border-b-2 border-b-cyan-500 focus:border-b-cyan-600   ">
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" bg-transparent outline-none"
            type="text"
            placeholder="Enter product description"
          />
        </label>
        <label htmlFor=""  className="w-full md:w-1/2 lg:w-1/2 bg-transparent border-b-2  border-b-cyan-500 focus:border-b-cyan-600   ">
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className=" bg-transparent outline-none    "
            type="text"
            placeholder="Enter product price"
          />
        </label>
        <label htmlFor="" className="w-full md:w-1/2 lg:w-1/2  bg-transparent border-b-2  border-b-cyan-500 focus:border-b-cyan-600   ">
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className=" bg-transparent outline-none  "
            type="text"
            placeholder="Enter product category"
          />
        </label>
        <label htmlFor="" className="w-full md:w-1/2 lg:w-1/2">
          <input type="file" value={image} onChange={e=>e.target.value}/>
        </label>
        <button onClick={handleSubmit} className=" px-2 w-full md:w-1/2 lg:w-1/2  lg:rounded-sm  py-1 bg-blue-500 font-semibold text-white mt-2">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
