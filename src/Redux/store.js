import {  configureStore } from '@reduxjs/toolkit'
import favouriteSlice from './Slice/favourites'
 export const store = configureStore({
    reducer:{
        favourites: favouriteSlice.reducer
    }
 })