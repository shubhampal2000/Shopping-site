import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Header = () => {

    const[searchdata,setSearchdata]=useState();
    const[menubar,setMenubar]=useState(false)
    const state = useSelector(state => state.cartReducer.noOfItemInCart)
    console.log("cart is ",state);

  return (
    <>
    <div className='z-50 h-[10vh]  bg-blue-950 text-white flex   justify-between items-center px-2 py-3 font-semibold sticky top-0 ' >
    <span>
    <h4 className='text-2xl'>MultiStore</h4>
    </span>
    <span className='hidden md:block lg:block '>
        <ul className='flex gap-4 '>
            <li><NavLink className={(isActive)=>` ${isActive? " text-red-600":"text-black"} ` }  to="home"> HOME </NavLink>  </li>
            <li><NavLink to="addproduct" >ADD </NavLink> </li>
            <li><NavLink to="">SIGNUP</NavLink> </li>
            <li className=''><NavLink className='flex items-center gap-1'  to="addtocart"><FaCartPlus/> CART</NavLink> {state} </li>
        </ul>
    </span>
    <div className='md:hidden lg:hidden flex flex-col  border-solid'>
    <IoMenu  onClick={()=>{
      setMenubar(!menubar)
      console.log(menubar);
    }} className=' text-2xl self-end h-[]' />
    {menubar && menubar==true?  <div className=' h-[0vh] w-[45vw]'>
      <ul className='gap-3 w-full mt-7  justify-evenly flex flex-col bg-white text-black rounded-sm '>
            <li onClick={()=>setMenubar(!menubar)} className='border-b-2 border-b-gray-300 w-full text-center '><NavLink  to="home"> HOME </NavLink>  </li>
            <li onClick={()=>setMenubar(!menubar)} className='border-b-2 border-b-gray-300 w-full text-center'><NavLink  to="addproduct"  >ADD </NavLink> </li>
            <li onClick={()=>setMenubar(!menubar)} className='border-b-2 border-b-gray-300 w-full text-center'><NavLink to="">SIGNUP</NavLink> </li>
            <li onClick={()=>setMenubar(!menubar)} className='border-b-2 border-b-gray-300 w-full text-center'><NavLink to="addtocart">CART</NavLink> </li>
      </ul>
    </div> : ""}
    </div>
    </div>
    </>
  )
}

export default Header;