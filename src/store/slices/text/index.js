import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: {
    text: `# Welcome to my React Markdown Previewer!\n\n## This was made by laaledesiempre\n### she does'nt know how it works:\n\nSo she edited \`<div></div>\`, the text from the example.\n\n\`\`\`\n// Because she is so lazy:\n\nfunction saySomethingAlefyed(textToAlefy) {\n  return textToAlefy + "---> Ale said that!"\n  console.log("this is unreachable code, if you see this in your console, you made something wrong")\n}\n\`\`\`\n\nI dont know how much i can **pretend**... about this!\nsurely _not any more_.\nOr... i feel really well... **_dont worry_**\nim talking about pretending that my pizza is not~~vegan~~.\n\nall my pizzas are vegan pizzas, because i love animals... oh i dont know what i should put here, OH MY [GITHUB](https://github.com/laaledesiempre), and\n> PLEASE PUT A STAR ON THIS PROJECT\n\nTables? when we travel we dont use tables:\n\nGrid | Use grid | Hate tables\n------------ | ------------- | -------------\nGrid is responsive | You can control every thing | but that letter\nAlso very practic | not "surprise" position change | it's scares me\n\n- Im talking\n  - About the L\n     - Bcs in grid containers\n        - You can not make L shape grids, bcs\n\n\n1. It must be squared\n1. It can not be not squared\n1. I cant belive that i made this, i thought that it was going to be harder, PLEASE STUDY FREE IN:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`,
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});
export const { setText } = textSlice.actions;

export const text = textSlice.reducer;

export const setTextValue=(text)=>(dispatch) =>{
  
  dispatch(setText(text))
}

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
