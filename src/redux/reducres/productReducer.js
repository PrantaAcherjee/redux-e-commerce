 import { actionType } from "../contants/action-type"

const initialState={
        products:[
                {
                        id:1,
                        title:'Pranta',
                        job:'programmer'
                }
        ]
}

export const productReducer=(state=initialState,{type,payload})=>{
        switch (type) {
                case actionType.SET_PRODUCTS:
                        return state                      
                default:
                        return state
        }
}