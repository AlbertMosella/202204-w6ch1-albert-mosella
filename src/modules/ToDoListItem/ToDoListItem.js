const ToDoListItem = ({ toDoListItem: { id, name, done } }) => {
  return (
    <li>
      <p>Id: {id}</p>
      <p>{name}</p>
      <p>
        Done: {done && "Yes"} {!done && "No"}
      </p>
    </li>
  );
};

export default ToDoListItem;
