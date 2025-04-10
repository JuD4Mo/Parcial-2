import { configureStore } from "@reduxjs/toolkit";
import listSlice from  "./Slices/listSlice.js"

export  const Store = configureStore({
    reducer:{
        list: listSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})