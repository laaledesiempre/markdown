import { configureStore } from "@reduxjs/toolkit";
import { text } from "./slices/text";

export const store = configureStore({
  reducer: {
    text,
  },
});
