import axios from "axios";
import { loadListActionCreator } from "../features/listSlice";

export const loadToDoListThunk = () => async (dispatch) => {
  const { data: toDoList } = await axios.get(process.env.REACT_APP_API_URL);

  dispatch(loadListActionCreator(toDoList));
};

export default loadToDoListThunk;
