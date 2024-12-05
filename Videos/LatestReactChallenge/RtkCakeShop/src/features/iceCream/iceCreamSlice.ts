import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

type InitialState = {
  numberOfIceCreams: number;
}

const initialState: InitialState = {
  numberOfIceCreams: 20
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers:{
    ordered: state => {state.numberOfIceCreams--},
    restocked: (state, action: PayloadAction<number>) => {state.numberOfIceCreams += action.payload}
  },
  extraReducers: (builder) => {
    builder
      .addCase(cakeActions.ordered, state => {
        state.numberOfIceCreams--
      })
      .addCase((cakeActions.restocked), state => {
        state.numberOfIceCreams += 3
      })
  }
})

export const iceCreamReducer = iceCreamSlice.reducer;
export const iceCreamActions = iceCreamSlice.actions;