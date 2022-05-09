import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    loadList: (list, action) => [...action.payload],
    removeItem: (list, action) => {
      return list.filter((listItem) => listItem.id !== action.payload);
    },
  },
});

export const {
  loadList: loadListActionCreator,
  removeItem: removeItemActionCreator,
} = listSlice.actions;

export default listSlice.reducer;
