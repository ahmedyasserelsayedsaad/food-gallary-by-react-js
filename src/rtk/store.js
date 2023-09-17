import { configureStore } from "@reduxjs/toolkit";
import  cartSlices  from "./cartslices/cart-slice";
 export const Store=configureStore({
    reducer:{
    cart:cartSlices,
    }
})
