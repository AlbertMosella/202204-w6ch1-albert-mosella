import axios from "axios";
import {
  addItemActionCreator,
  loadListActionCreator,
  removeItemActionCreator,
} from "../features/listSlice";

export const loadToDoListThunk = () => async (dispatch) => {
  const { data: toDoList } = await axios.get(process.env.REACT_APP_API_URL);
  dispatch(loadListActionCreator(toDoList));
};

export const addToDoThunk = (toDo) => async (dispatch) => {
  dispatch(addItemActionCreator(toDo));
  await axios.post(process.env.REACT_APP_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(toDo),
  });
};

export const deleteToDoThunk = (id) => async (dispatch) => {
  const { status } = await axios.delete(process.env.REACT_APP_API_URL + id);
  if (status === 200) {
    dispatch(removeItemActionCreator(id));
  }
};
