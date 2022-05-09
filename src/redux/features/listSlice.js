import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: { loadList: (list, action) => [...action.payload] },
});

export const { loadList: loadListActionCreator } = listSlice.actions;

export default listSlice.reducer;
