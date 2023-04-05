// import { configureStore } from "@reduxjs/toolkit";
// import CountReducer from "./Reducer/CountReducer";

// export const Store = configureStore({
//   reducer: { myCount: CountReducer },
// });

// import { configureStore } from "@reduxjs/toolkit";
// import MySlice from "./Reducer/CountReducer";

// export const Store = configureStore({
//   reducer: {
//     myvalue: MySlice,
//   },
// });

// import { configureStore } from "@reduxjs/toolkit";
// import CountReducer from "./Reducer/CountReducer";

// export const Store = configureStore({
//   reducer: {
//     MyCounter: CountReducer, //  we have to access thev value of MyCounter
//   },
// });

// import { configureStore } from "@reduxjs/toolkit";
// import Myslice from "./Reducer/CountReducer";

// export const Store = configureStore({
//   reducer: {
//     MyCount: Myslice,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
// import MySlice from "./Reducer/CountReducer";
import MySlice from "./Reducer/CountReducer";

export const Store = configureStore({
  reducer: {
    Rajesh: MySlice,
  },
});
