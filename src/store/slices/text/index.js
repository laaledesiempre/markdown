import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: {
    text: "",
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});
export const { setText } = textSlice.actions;

export const text = textSlice.reducer;

/* export const fetchAllPhrases = () => async (dispatch) => {
  const response = await fetch(
    "https://programming-quotesapi.vercel.app/api/random"
  );

  const dataJson = await response.json();
  console.log("fetched data:");
  console.log(dataJson);
  dispatch(setPhraseList(dataJson));
};
 */
