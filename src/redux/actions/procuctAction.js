import { actionType } from "../contants/action-type"

export const setProducts=(products)=>{
        return{
                type: actionType.SET_PRODUCTS,
                payload:products,
        }
}
export const selectedProducts=(product)=>{
        return{
                type: actionType.SELECTED_PROUCT,
                payload:product,
        }
}