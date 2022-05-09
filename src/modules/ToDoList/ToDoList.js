import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadListActionCreator } from "../../redux/features/listSlice";
import toDoListData from "../../utils/toDoListData";
import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadListActionCreator(toDoListData));
  }, [dispatch]);

  const list = useSelector((state) => state.list);

  return (
    <ul>
      {list.map((listItem) => {
        return <ToDoListItem toDoListItem={listItem} key={listItem.id} />;
      })}
    </ul>
  );
};

export default ToDoList;
