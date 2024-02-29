import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Overlay = () => {

 const[overlaydata,setOverlaydata]=useState()
  const params =useParams();
  // console.log("params",params);


  const fetchdata =async()=>{
    const res =await fetch(`http://localhost:4000/product/${params.id}`)
    const result =await res.json();
    setOverlaydata(result)
    console.log(result);
  }
  useEffect(()=>{
    fetchdata();
  },[])

  // console.log(overlaydata);


  return (
 
    <div className="absolute h-[90vh]  flex justify-center items-center w-[100vw] bg-gray-800   ">

    <div className="h-[100%] lg:justify-evenly lg:h-[70%] lg:w-[70%] p-3 w-[100%] lg:flex-row flex-col bg-white  gap-3  absolute flex rounded-lg justify-center items-center">
      <div className="h-[30%] lg:h-[90%]" >
      <img className="h-[100%] w-auto" src={overlaydata?.image} alt="" />
      </div>
      <div className="font-semibold flex flex-col gap-4 ">
        <div className="w-full flex justify-between"><h1>{overlaydata?.category} </h1>
      </div>
        <h1 className="text-2xl">{overlaydata?.title}</h1>
        <h1 className="max-w-[20em] ">{overlaydata?.description}</h1>
        <h1 className="">$ {overlaydata?.price}</h1>
      <div className="flex flex-row items-start justify-evenly lg:justify-normal lg:gap-3">
        <button className="lg:px-8 lg:py-3 px-2 py-0.5 bg-yellow-500 hover:bg-yellow-600 font-semibold text-white rounded-lg ">
          Buy now
        </button>
        <button
          className="px-2 py-0.5 bg-blue-700 lg:px-8 lg:py-3  hover:bg-blue-800 font-semibold text-white rounded-lg "
        >
          Add To Cart{" "}
        </button>
      </div>
      </div>
    </div>
   </div>
  )
}

export default Overlay;