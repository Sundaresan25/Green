import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonReducer";

const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});

export default store;

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
