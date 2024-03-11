import { removefromcart } from "../constants/constant"
export const removeItemFromCart = (val) =>{

    return{
        type : removefromcart,
        payload : val.id
    }
}

