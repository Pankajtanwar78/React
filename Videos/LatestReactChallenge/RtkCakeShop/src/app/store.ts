import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "../features/cake/cakeSlice";
import { iceCreamReducer } from "../features/iceCream/iceCreamSlice";
// import logger from 'redux-logger'
import { userReducer } from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;