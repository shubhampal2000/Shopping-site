import React from "react";
import { addItemToCart } from "../actions/addItemToCart";
import { addtocart } from "../constants/constant";
import { removefromcart } from "../constants/constant";


export const initialState = {
  noOfItemInCart: 0,
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case addtocart:
      const existingItem = state.cart.findIndex(item => item.id === action.payload.id);
      if(existingItem == -1){
        console.log("item not exits");
        return {
          
          ...state,
          noOfItemInCart: state.noOfItemInCart + 1,
          cart: [...state.cart,{...action.payload,quantity: 1}],
          
        };
      }else{
        const updatedCartItems = [...state.cart];
        updatedCartItems[existingItem].quantity += 1;
        const price = updatedCartItems[existingItem].price;
        updatedCartItems[existingItem].price += price;
        console.log(price);
        return{
          ...state,cart:updatedCartItems
        }
      }
    case removefromcart:
      
      return {
        noOfItemInCart: state.noOfItemInCart - 1,
        cart: state.cart.filter((val) => {
          if (val.id != action.payload) {
            return true;
          }
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
