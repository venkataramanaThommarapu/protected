// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0,
// };

// const CountSlice = createSlice({
//   name: "count",
//   initialState,

//   reducers: {
//     getCount: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { getCount } = CountSlice.actions;
// export default CountSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

// const MySlice = createSlice({
//   name: "count",
//   initialState,

//   reducers: {
//     getCount: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { getCount } = MySlice.actions;
// export default MySlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

// const MySlice = createSlice({
//   name: "count",
//   initialState,

//   reducers: {
//     getCounterValue: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { getCounterValue } = MySlice.actions;
// export default MySlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

// export const MySlice = createSlice({
//   name: "count",
//   initialState,

//   reducers: {
//     getCount: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { getCount } = MySlice.actions;

// export default MySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null, // anything you give
};

export const MySlice = createSlice({
  name: "todoCount",
  initialState,

  reducers: {
    getTodoCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getTodoCount } = MySlice.actions;
export default MySlice.reducer;
