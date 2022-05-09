import { useDispatch } from "react-redux";
import { removeItemActionCreator } from "../../redux/features/listSlice";

const ToDoListItem = ({ toDoListItem: { id, name, done } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Id: {id}</p>
      <p>{name}</p>
      <p>
        Done: {done && "Yes"} {!done && "No"}
      </p>
      <button onClick={() => dispatch(removeItemActionCreator(id))}>
        Delete
      </button>
    </>
  );
};

export default ToDoListItem;
