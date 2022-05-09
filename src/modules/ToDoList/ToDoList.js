import toDoListData from "../../utils/toDoListData";
import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = () => {
  return (
    <ul>
      {toDoListData.map((toDoListItem) => {
        return (
          <ToDoListItem toDoListItem={toDoListItem} key={toDoListItem.id} />
        );
      })}
    </ul>
  );
};

export default ToDoList;
