import { createSlice } from '@reduxjs/toolkit'

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState:{
        products:[]
    },
    reducers:{
        addProduct:(state, action)=>{
            state.products.push(action.payload)
        },
        removeProduct:(state, action)=>{
            state.products.splice(state.products.findIndex(product=>product.id===action.payload), 1)
        },
        clearAll:(state, action)=>{
            state.products=[]
        }
    }
})

export const { addProduct, removeProduct,clearAll } = favouriteSlice.actions
export default favouriteSlice;