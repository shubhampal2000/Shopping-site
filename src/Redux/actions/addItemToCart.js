import { initialState } from "../reducers/cartReducer";
import { addtocart } from "../constants/constant";

export const addItemToCart = (val) => {
   
    
  return{
      type : addtocart, 
      payload: val,
  }
}