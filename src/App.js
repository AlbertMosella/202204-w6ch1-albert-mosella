import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Form from "./modules/Form/Form";
import ToDoList from "./modules/ToDoList/ToDoList";
import { loadToDoListThunk } from "./redux/thunks/toDoListThunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadToDoListThunk());
  }, [dispatch]);

  return (
    <>
      <Form />
      <ToDoList />
    </>
  );
}

export default App;
